
import React, { useState } from 'react';
import { principles } from '../pmpData';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const PrinciplesView = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selected = principles.find((p) => p.id === selectedId);
  const selectedIndex = principles.findIndex((p) => p.id === selectedId);

  return (
    <div>
      <PageHeader
        number="§ I"
        kicker="Foundations"
        title="The Twelve Principles"
        standfirst="Not prescriptive rules, but the mindsets a project professional is expected to reason from."
        note="The seventh edition replaced process compliance with principled judgement. Every situational question on the exam is, underneath, asking which of these twelve applies."
        image="/art/chapter-principles.jpg"
        imageAlt="An ancient pine with deep roots overlooking a misty river"
        maxim="Root the judgement before you move the work."
        imagePosition="center bottom"
      />

      {/* A numbered reference list, two columns wide. */}
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 xl:gap-x-20 border-t border-rule-strong">
        {principles.map((principle, index) => (
          <li key={principle.id} className="border-b border-rule">
            <motion.button
              layoutId={principle.id}
              onClick={() => setSelectedId(principle.id)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
              className="group w-full text-left flex items-baseline gap-5 py-6 pr-2
                         transition-colors hover:bg-[rgba(255,253,247,0.75)]"
            >
              <span className="numeral text-sm font-semibold w-8 shrink-0 pt-1">
                {ROMAN[index]}
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl font-semibold text-ink
                                 group-hover:text-lapis transition-colors leading-snug">
                  {principle.title}
                </span>
                <span className="block font-text text-sm text-ink-muted leading-relaxed mt-1.5">
                  {principle.description}
                </span>
              </span>
            </motion.button>
          </li>
        ))}
      </ol>

      {/* Detail */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-ink/35"
            />

            <motion.div
              layoutId={selectedId}
              className="plate w-full max-w-2xl relative z-10 max-h-[88vh] overflow-y-auto
                         custom-scrollbar shadow-[0_18px_50px_-25px_rgba(26,24,21,0.5)]"
            >
              <div className="p-6 sm:p-10">
                <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-3 mb-7">
                  <div className="flex items-baseline gap-4">
                    <span className="numeral text-sm font-semibold">{ROMAN[selectedIndex]}</span>
                    <span className="label">Principle</span>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    aria-label="Close"
                    className="text-ink-faint hover:text-ink transition-colors -mr-1"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h2 className="font-display text-3xl sm:text-[2.25rem] font-semibold text-ink leading-tight">
                  {selected.title}
                </h2>

                <p className="font-display text-xl text-ink-soft italic leading-relaxed mt-5 measure">
                  {selected.description}
                </p>

                <div className="mt-9 pt-6 border-t border-rule">
                  <p className="label mb-3">In practice</p>
                  <p className="font-text text-[15px] text-ink-soft leading-relaxed measure">
                    {selected.details}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrinciplesView;
