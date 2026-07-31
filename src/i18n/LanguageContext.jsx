/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import translations, { polishArabic } from './translations';

const LanguageContext = createContext(null);
const textOriginals = new WeakMap();
const attributeOriginals = new WeakMap();
const attributes = ['alt', 'aria-label', 'placeholder', 'title'];

const dynamicTranslate = text => {
  const patterns = [
    [/^Question (\d+) of (\d+)$/i, (_, current, total) => `السؤال ${current} من ${total}`],
    [/^Score: (\d+)\/(\d+)$/i, (_, score, total) => `النتيجة: ${score}/${total}`],
    [/^Your Score: (\d+) out of (\d+)$/i, (_, score, total) => `نتيجتك: ${score} من ${total}`],
    [/^Search (.+)…$/i, (_, scope) => `ابحث في ${translations[scope] || scope}…`],
    [/^(\d+) questions?$/i, (_, count) => `${count} سؤالاً`],
  ];
  for (const [pattern, format] of patterns) {
    const match = text.match(pattern);
    if (match) return format(...match);
  }
  return null;
};

const translateText = value => {
  const leading = value.match(/^\s*/)?.[0] || '';
  const trailing = value.match(/\s*$/)?.[0] || '';
  const source = value.trim().replace(/\s+/g, ' ');
  if (!source) return value;
  const translated = translations[source] || dynamicTranslate(source);
  return translated ? `${leading}${polishArabic(translated)}${trailing}` : value;
};

const isBlocked = node => node.parentElement?.closest('[data-no-translate], script, style, code');

const translateNode = (node, language) => {
  if (node.nodeType === Node.TEXT_NODE) {
    if (isBlocked(node)) return;
    const current = node.nodeValue;
    if (language === 'ar') {
      const normalized = current.trim().replace(/\s+/g, ' ');
      if (translations[normalized] || dynamicTranslate(normalized)) textOriginals.set(node, current);
      const source = textOriginals.get(node) || current;
      const translated = translateText(source);
      if (translated !== current) node.nodeValue = translated;
    } else if (textOriginals.has(node) && current !== textOriginals.get(node)) {
      node.nodeValue = textOriginals.get(node);
    }
    return;
  }

  if (node.nodeType !== Node.ELEMENT_NODE || node.closest('[data-no-translate]')) return;
  let originals = attributeOriginals.get(node);
  for (const attribute of attributes) {
    if (!node.hasAttribute(attribute)) continue;
    const current = node.getAttribute(attribute);
    if (language === 'ar') {
      if (!originals) {
        originals = {};
        attributeOriginals.set(node, originals);
      }
      if (translations[current] || dynamicTranslate(current)) originals[attribute] = current;
      const source = originals[attribute] || current;
      const translated = translateText(source);
      if (translated !== current) node.setAttribute(attribute, translated);
    } else if (originals?.[attribute] && current !== originals[attribute]) {
      node.setAttribute(attribute, originals[attribute]);
    }
  }
};

const translateTree = (root, language) => {
  translateNode(root, language);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) translateNode(walker.currentNode, language);
};

export function LanguageProvider({ children }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    const query = new URLSearchParams(window.location.search).get('lang');
    return query === 'ar' || (!query && localStorage.getItem('pmp-language') === 'ar') ? 'ar' : 'en';
  });

  useLayoutEffect(() => {
    const isArabic = language === 'ar';
    document.documentElement.lang = language;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.title = isArabic ? 'PMP | دليل دراسة إدارة المشاريع' : 'PMP | The Way of the Project';
    localStorage.setItem('pmp-language', language);

    const url = new URL(window.location.href);
    if (isArabic) url.searchParams.set('lang', 'ar');
    else url.searchParams.delete('lang');
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);

    translateTree(document.body, language);
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') mutation.addedNodes.forEach(node => translateTree(node, language));
        else translateNode(mutation.target, language);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: attributes });
    return () => observer.disconnect();
  }, [language, location.pathname]);

  const value = useMemo(() => ({
    language,
    isArabic: language === 'ar',
    toggleLanguage: () => setLanguage(current => current === 'ar' ? 'en' : 'ar'),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
export { translateText, translations };
