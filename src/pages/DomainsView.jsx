
import React, { useState } from 'react';
import { performanceDomains } from '../pmpData';
// eslint-disable-next-line no-unused-vars -- motion is used through JSX member tags.
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const pad = (n) => String(n).padStart(2, '0');

const DomainsView = () => {
  const [activeTab, setActiveTab] = useState(performanceDomains[0].id);
  const activeDomain = performanceDomains.find((d) => d.id === activeTab);
  const activeIndex = performanceDomains.findIndex((d) => d.id === activeTab);

  return (
    <div>
      <PageHeader
        number="§ II"
        kicker="Delivery"
        title="Performance Domains"
        standfirst="Groups of related activities that are critical to the effective delivery of project outcomes."
        note="The eight domains operate simultaneously rather than in sequence. Weakness in one shows up as a symptom in another."
        image="/art/chapter-domains.jpg"
        imageAlt="Many mountain streams converging into one river"
        maxim="Many currents. One destination."
        imagePosition="center bottom"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
        {/* Contents column */}
        <nav className="lg:col-span-3">
          <p className="label border-b border-rule pb-2 mb-1 hidden lg:block">The eight domains</p>
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible
                          gap-0 -mx-4 px-4 lg:mx-0 lg:px-0 custom-scrollbar
                          border-b lg:border-b-0 border-rule">
            {performanceDomains.map((domain, i) => (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`group flex items-baseline gap-3 shrink-0 lg:shrink
                            whitespace-nowrap lg:whitespace-normal text-left
                            px-3 lg:px-0 py-3 lg:border-b lg:border-rule
                            transition-colors ${
                  activeTab === domain.id
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink-soft'
                }`}
              >
                <span
                  className={`text-[11px] font-text font-semibold tabular-nums shrink-0 ${
                    activeTab === domain.id ? 'text-saffron' : 'text-ink-faint'
                  }`}
                >
                  {pad(i + 1)}
                </span>
                <span className="font-display text-[15px] leading-snug">{domain.title}</span>
                {activeTab === domain.id && (
                  <span className="hidden lg:block ml-auto w-4 h-px bg-lapis self-center" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Text column */}
        <div className="lg:col-span-9 lg:border-l lg:border-rule lg:pl-12">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeDomain.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-baseline gap-4 border-b border-rule-strong pb-3 mb-7">
                <span className="numeral text-sm font-semibold">{pad(activeIndex + 1)}</span>
                <span className="label">Performance domain</span>
              </div>

              <h2 className="font-display text-3xl sm:text-[2.5rem] font-semibold text-ink leading-[1.1]">
                {activeDomain.title}
              </h2>
              <p className="page-standfirst mt-4">{activeDomain.description}</p>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-12 mt-12">
                {/* Activities */}
                <section>
                  <h3 className="label border-b border-rule pb-2 mb-1">Key activities</h3>
                  <ol>
                    {activeDomain.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-4 py-3.5 border-b border-rule"
                      >
                        <span className="figure font-text text-[11px] font-semibold text-ink-faint shrink-0 w-4">
                          {pad(i + 1)}
                        </span>
                        <span className="font-text text-[15px] text-ink-soft leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Outcomes */}
                <section>
                  <h3 className="label-accent border-b border-lapis/30 pb-2 mb-1">Desired outcomes</h3>
                  <ol>
                    {activeDomain.outcomes.map((outcome, i) => (
                      <li
                        key={i}
                        className="flex items-baseline gap-4 py-3.5 border-b border-rule"
                      >
                        <span className="text-lapis shrink-0 w-4 text-sm leading-none">—</span>
                        <span className="font-text text-[15px] text-ink-soft leading-relaxed">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DomainsView;
