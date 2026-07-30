
import React, { useState } from 'react';
import { models, methods, artifacts } from '../pmpData';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const TABS = [
  { id: 'models', label: 'Models', singular: 'Model' },
  { id: 'methods', label: 'Methods', singular: 'Method' },
  { id: 'artifacts', label: 'Artifacts', singular: 'Artifact' },
];

const SOURCES = { models, methods, artifacts };

const ModelsMethodsView = () => {
  const [activeTab, setActiveTab] = useState('models');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const query = searchQuery.trim().toLowerCase();
  const filteredData = SOURCES[activeTab]
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      ),
    }))
    .filter((category) => category.items.length > 0);

  const total = filteredData.reduce((n, c) => n + c.items.length, 0);
  const singular = TABS.find((t) => t.id === activeTab).singular;

  return (
    <div>
      <PageHeader
        number="§ III"
        kicker="Reference"
        title="Models, Methods & Artifacts"
        standfirst="The working vocabulary — what to think with, what to do, and what it leaves behind."
        note="Tailoring is the point. The exam rewards choosing the lightest instrument that answers the question, not the most thorough one."
      />

      {/* Controls */}
      <div className="border-b border-rule-strong">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <nav className="flex gap-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`toc-tab ${activeTab === tab.id ? 'toc-tab-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <div className="relative w-full sm:w-72 pb-2.5">
            <Search
              className="absolute left-0 top-1/2 -translate-y-1/2 mt-[-5px] text-ink-faint"
              size={15}
            />
            <input
              type="text"
              placeholder={`Search ${activeTab}…`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-rule pl-6 pr-6 py-1
                         font-display text-[15px] italic text-ink placeholder:text-ink-faint
                         focus:border-lapis focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear"
                className="absolute right-0 top-1/2 -translate-y-1/2 mt-[-5px] text-ink-faint hover:text-ink"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="label text-ink-faint mt-4 mb-10">
        {total} {total === 1 ? 'entry' : 'entries'}
        {query && <> matching &ldquo;{searchQuery}&rdquo;</>}
      </p>

      {/* Entries */}
      <div className="space-y-16">
        {filteredData.map((category, idx) => (
          <section key={idx}>
            <div className="flex items-baseline gap-4 border-t border-rule-strong pt-3 mb-1">
              <span className="numeral text-xs font-semibold">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">{category.category}</h3>
              <span className="label text-ink-faint ml-auto figure">
                {category.items.length}
              </span>
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16">
              {category.items.map((item, itemIdx) => (
                <li key={itemIdx} className="border-b border-rule">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="group w-full text-left py-4 pr-2 transition-colors
                               hover:bg-[rgba(255,253,247,0.75)]"
                  >
                    <span className="block font-display text-[17px] font-semibold text-ink
                                     group-hover:text-lapis transition-colors leading-snug">
                      {item.name}
                    </span>
                    <span className="block font-text text-[13.5px] text-ink-muted leading-relaxed mt-1">
                      {item.description}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {filteredData.length === 0 && (
          <div className="border-t border-rule pt-10">
            <p className="font-display text-xl italic text-ink-muted">
              Nothing here under &ldquo;{searchQuery}&rdquo;.
            </p>
            <button onClick={() => setSearchQuery('')} className="btn-quiet mt-5">
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Detail */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-ink/35"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.22 }}
              className="plate w-full max-w-2xl relative z-10 max-h-[88vh] overflow-y-auto
                         custom-scrollbar shadow-[0_18px_50px_-25px_rgba(26,24,21,0.5)]"
            >
              <div className="p-6 sm:p-10">
                <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-3 mb-7">
                  <span className="label">{singular}</span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close"
                    className="text-ink-faint hover:text-ink transition-colors -mr-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h2 className="font-display text-3xl font-semibold text-ink leading-tight">
                  {selectedItem.name}
                </h2>

                <p className="font-display text-lg text-ink-soft leading-relaxed mt-5 measure">
                  {selectedItem.description}
                </p>

                {selectedItem.details && (
                  <div className="mt-9 border-l-2 border-lapis pl-6">
                    <p className="label-accent mb-2.5">Application</p>
                    <p className="font-text text-[15px] text-ink-soft leading-relaxed measure">
                      {selectedItem.details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelsMethodsView;
