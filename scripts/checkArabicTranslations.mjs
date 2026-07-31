import assert from 'node:assert/strict';
import translations, { polishArabic } from '../src/i18n/translations.js';

assert.ok(Object.keys(translations).length >= 2000, 'Arabic translation coverage dropped below 2,000 phrases');
assert.equal(translations.Dashboard, 'الرئيسية');
assert.equal(translations.Tailoring, 'التخصيص');
assert.equal(translations['Process Grid'], 'شبكة العمليات');
assert.equal(translations['Exam Prep'], 'الاستعداد للاختبار');
assert.equal(translations.Integration, 'التكامل');
assert.equal(translations['Develop Project Charter'], 'تطوير ميثاق المشروع');
assert.equal(polishArabic('يقرر رئيس الوزراء عناصر Product Backlog خلال Sprint.'), 'يقرر مدير المشروع عناصر قائمة متطلبات المنتج خلال الدورة.');

console.log(`Arabic translation check passed (${Object.keys(translations).length} phrases).`);
