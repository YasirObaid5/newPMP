import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const domains = [
  {
    n: 'I',
    title: 'People',
    subtitle: 'Leadership, team management, and stakeholder engagement',
    gloss: 'The soft skills the exam treats as hard requirements — coaching, conflict, negotiation, and the servant-leader posture that runs underneath all of it.',
    weight: 42,
    progress: 65,
    path: '/principles',
  },
  {
    n: 'II',
    title: 'Process',
    subtitle: 'Technical project management and methodologies',
    gloss: 'Half the paper. Predictive, agile and hybrid delivery: planning, execution, measurement, and the tailoring decisions between them.',
    weight: 50,
    progress: 45,
    path: '/domains',
  },
  {
    n: 'III',
    title: 'Business Environment',
    subtitle: 'Strategic alignment and organizational context',
    gloss: 'The smallest domain and the most often underprepared — compliance, benefits realisation, and the value the project is meant to return.',
    weight: 8,
    progress: 30,
    path: '/models-methods',
  },
];

const Dashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
  >
    {/* ---------------------------------------------------------------- Hero */}
    <section className="border-t-2 border-ink pt-4">
      <div className="flex items-baseline gap-4 mb-10">
        <span className="numeral text-sm font-semibold">§</span>
        <span className="label">Project Management Professional</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 items-start">
        <div className="lg:col-span-7">
          <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] xl:text-[3.75rem] font-semibold
                         leading-[1.06] tracking-[-0.015em] text-ink text-balance">
            A study manual for the seventh edition
          </h1>

          <p className="page-standfirst mt-7">
            Principles, performance domains, the predictive process grid, and the
            agile practices the current exam actually asks about — set out to be
            read rather than skimmed.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <Link to="/domains" className="btn-primary">
              Begin <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <Link to="/exam-prep" className="btn-secondary">
              Exam Preparation
            </Link>
          </div>
        </div>

        {/* Weights, as a small table set into the margin */}
        <div className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-rule lg:pl-8">
          <p className="label border-b border-rule pb-2 mb-4">Examination weights</p>
          <dl className="space-y-0">
            {domains.map((d) => (
              <div key={d.n} className="flex items-baseline justify-between gap-4 py-2.5
                                        border-b border-rule last:border-b-0">
                <dt className="font-display text-base text-ink-soft">{d.title}</dt>
                <dd className="figure font-display text-lg font-semibold text-ink">
                  {d.weight}<span className="text-ink-faint text-sm">%</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="font-text text-xs text-ink-faint mt-4 leading-relaxed">
            Percentages are the proportion of scored questions drawn from each
            performance domain.
          </p>
        </div>
      </div>
    </section>

    {/* ------------------------------------------------------------ Contents */}
    <section className="mt-20 sm:mt-28">
      <div className="flex items-baseline justify-between gap-6 border-t border-rule-strong pt-4 mb-2">
        <h2 className="font-display text-2xl font-semibold text-ink">Contents</h2>
        <span className="label text-ink-faint">Three domains</span>
      </div>

      <ol>
        {domains.map((d) => (
          <li key={d.n}>
            <Link
              to={d.path}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-4 items-start
                         border-b border-rule py-8 sm:py-10 transition-colors
                         hover:bg-[rgba(255,253,247,0.7)]"
            >
              {/* Numeral */}
              <div className="lg:col-span-1">
                <span className="numeral text-2xl font-semibold">{d.n}</span>
              </div>

              {/* Title + gloss */}
              <div className="lg:col-span-6">
                <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-ink
                               group-hover:text-lapis transition-colors leading-snug">
                  {d.title}
                </h3>
                <p className="font-display text-ink-muted italic mt-1.5">{d.subtitle}</p>
                <p className="font-text text-[15px] text-ink-soft leading-relaxed mt-4 measure">
                  {d.gloss}
                </p>
              </div>

              {/* Weight */}
              <div className="lg:col-span-2 lg:text-right">
                <span className="label block mb-1">Weight</span>
                <span className="figure font-display text-4xl font-semibold text-ink leading-none">
                  {d.weight}
                  <span className="text-lg text-ink-faint">%</span>
                </span>
              </div>

              {/* Progress */}
              <div className="lg:col-span-3">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="label">Studied</span>
                  <span className="figure font-text text-sm font-semibold text-ink-soft">
                    {d.progress}%
                  </span>
                </div>
                <div className="h-px w-full bg-rule-strong relative">
                  <div
                    className="absolute inset-y-0 left-0 h-px bg-lapis"
                    style={{ width: `${d.progress}%` }}
                  />
                  <div
                    className="absolute -top-[3px] h-[7px] w-px bg-lapis"
                    style={{ left: `${d.progress}%` }}
                  />
                </div>
                <span className="hidden lg:flex items-center gap-1.5 label-accent mt-5
                                 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight size={13} strokeWidth={2.2} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  </motion.div>
);

export default Dashboard;
