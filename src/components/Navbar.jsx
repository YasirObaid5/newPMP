import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import IlluminatedBand from "./IlluminatedBand";
import { useLanguage } from "../i18n/LanguageContext";

/* The wordmark's mark: an 8-point khatam, two squares overlaid. */
const Khatam = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="-24 -24 48 48" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="-14.5" y="-14.5" width="29" height="29" />
      <rect x="-14.5" y="-14.5" width="29" height="29" transform="rotate(45)" />
      <circle r="5.5" />
    </g>
  </svg>
);

const navLinks = [
  { path: "/", name: "Dashboard", end: true },
  { path: "/domains", name: "Domains" },
  { path: "/principles", name: "Principles" },
  { path: "/process-grid", name: "Process Grid" },
  { path: "/models-methods", name: "Tools" },
  { path: "/agile", name: "Agile" },
  { path: "/exam-prep", name: "Exam Prep" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50">
      {/* Masthead — solid lapis, the colour block that carries the identity */}
      <div className="pmp-masthead text-paper-raised">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative flex items-center justify-between h-16 lg:h-[4.75rem]">
            <div className="flex items-center gap-3.5">
              <span className="text-saffron-bright">
                <Khatam />
              </span>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[1.6rem] font-semibold tracking-tight leading-none" data-no-translate>
                  PMP
                </span>
                <span className="hidden sm:inline font-text text-[10.5px] font-semibold
                                 uppercase tracking-[0.18em] text-paper-raised/60">
                  The Way of the Project
                </span>
              </div>
            </div>

            <div className="pmp-calligraphy" lang={isArabic ? "ar" : "zh-Hant"} aria-label="The Way of the Project" data-no-translate>
              <span>{isArabic ? "طريق المشروع" : "項目之道"}</span>
              <i aria-hidden="true">{isArabic ? "نهج" : "道"}</i>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={toggleLanguage}
                className="pmp-language-switch"
                aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
                data-no-translate
              >
                {isArabic ? "English" : "العربية"}
              </button>
              <span className="hidden sm:inline font-text text-[10.5px] font-semibold
                               uppercase tracking-[0.18em] text-paper-raised/60">
                Seventh&nbsp;Edition
              </span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
                className="lg:hidden -mr-2 p-2 text-paper-raised/70 hover:text-paper-raised transition-colors"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Illumination */}
        <div className="text-saffron-bright/75">
          <IlluminatedBand />
        </div>
      </div>

      {/* Contents bar */}
      <div className="hidden lg:block bg-paper border-b border-rule-strong">
        <nav className="max-w-[84rem] mx-auto px-10 flex gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `toc-tab pt-3.5 ${isActive ? "toc-tab-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile contents */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-paper-raised border-b border-rule-strong">
          <div className="px-4 sm:px-6 py-2 divide-y divide-rule">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 py-3 font-display text-lg transition-colors ${
                    isActive ? "text-lapis" : "text-ink-soft hover:text-ink"
                  }`
                }
              >
                <span className="numeral text-sm w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
