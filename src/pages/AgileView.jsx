import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';

import {
    agileFrameworks,
    agilePractices,
    agileRoles,
    agileVsPredictive,
    servantLeadership
} from '../agileData';

const pad = (n) => String(n).padStart(2, '0');

/* -------------------------------------------------------------------------
   Shared furniture — a ruled subhead, and a ruled definition row.
   ------------------------------------------------------------------------- */

const Subhead = ({ children, count, accent = false }) => (
    <div className={`flex items-baseline justify-between gap-4 border-b-2 pb-2 mb-1 ${
        accent ? 'border-lapis/40' : 'border-rule-strong'
    }`}>
        <h3 className={accent ? 'label-accent' : 'label'}>{children}</h3>
        {count != null && <span className="label figure text-ink-faint">{count}</span>}
    </div>
);

const Term = ({ index, name, children, aside }) => (
    <div className="flex items-baseline gap-4 py-4 border-b border-rule">
        {index != null && (
            <span className="numeral text-[11px] font-semibold shrink-0 w-5 pt-0.5">
                {pad(index)}
            </span>
        )}
        <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-[17px] font-semibold text-ink leading-snug">
                    {name}
                </span>
                {aside && <span className="label text-ink-faint">{aside}</span>}
            </div>
            {children && (
                <div className="font-text text-[13.5px] text-ink-soft leading-relaxed mt-1.5">
                    {children}
                </div>
            )}
        </div>
    </div>
);

/* A run of terms set inline — replaces the old coloured pill badges. */
const TermRun = ({ items, ordered = false }) => (
    <p className="font-text text-[13px] text-ink-muted leading-relaxed mt-2">
        {items.map((item, i) => (
            <React.Fragment key={i}>
                {i > 0 && <span className="text-ink-faint"> · </span>}
                {ordered && <span className="numeral text-[11px] font-semibold">{i + 1} </span>}
                {item}
            </React.Fragment>
        ))}
    </p>
);

/* -------------------------------------------------------------------------- */

const AgileView = () => {
    const [activeTab, setActiveTab] = useState('frameworks');
    const [expandedFramework, setExpandedFramework] = useState('scrum');
    const [expandedSection, setExpandedSection] = useState({});

    const tabs = [
        { id: 'frameworks', name: 'Frameworks' },
        { id: 'practices', name: 'Practices' },
        { id: 'roles', name: 'Roles' },
        { id: 'comparison', name: 'Agile vs Predictive' },
        { id: 'leadership', name: 'Servant Leadership' }
    ];

    const toggleSection = (section) =>
        setExpandedSection((prev) => ({ ...prev, [section]: !prev[section] }));

    const Disclosure = ({ id, children, summary }) => (
        <div className="border-b border-rule">
            <button
                onClick={() => toggleSection(id)}
                className="group w-full flex items-baseline justify-between gap-4 py-4 text-left row-link"
            >
                {summary}
                <span className="text-ink-faint group-hover:text-lapis transition-colors shrink-0 self-center">
                    {expandedSection[id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {expandedSection[id] && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-0 sm:pl-9 border-l-0 sm:border-l-2 sm:border-saffron/40 sm:ml-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    /* ---------------------------------------------------------- Frameworks */

    const renderFrameworks = () => {
        const framework = agileFrameworks.find((f) => f.id === expandedFramework);

        return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
                {/* Framework index */}
                <nav className="lg:col-span-3">
                    <p className="label border-b border-rule pb-2 mb-1 hidden lg:block">Frameworks</p>
                    <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible
                                    -mx-4 px-4 lg:mx-0 lg:px-0 custom-scrollbar
                                    border-b lg:border-b-0 border-rule">
                        {agileFrameworks.map((f, i) => (
                            <button
                                key={f.id}
                                onClick={() => setExpandedFramework(f.id)}
                                className={`flex items-baseline gap-3 shrink-0 lg:shrink text-left
                                            whitespace-nowrap lg:whitespace-normal
                                            px-3 lg:px-0 py-3 lg:border-b lg:border-rule transition-colors ${
                                    expandedFramework === f.id
                                        ? 'text-ink'
                                        : 'text-ink-muted hover:text-ink-soft'
                                }`}
                            >
                                <span className={`text-[10px] font-text font-semibold tabular-nums shrink-0 ${
                                    expandedFramework === f.id ? 'text-saffron' : 'text-ink-faint'
                                }`}>
                                    {pad(i + 1)}
                                </span>
                                <span className="font-display text-[15px] font-semibold leading-snug">
                                    {f.name}
                                </span>
                                {expandedFramework === f.id && (
                                    <span className="hidden lg:block ml-auto w-4 h-px bg-lapis self-center" />
                                )}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Framework text */}
                <div className="lg:col-span-9 lg:border-l lg:border-rule lg:pl-12">
                    <AnimatePresence mode="wait">
                        <motion.article
                            key={framework.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-14"
                        >
                            <div>
                                <div className="flex items-baseline gap-4 border-b border-rule-strong pb-3 mb-6">
                                    <span className="numeral text-xs font-semibold">
                                        {pad(agileFrameworks.findIndex((f) => f.id === framework.id) + 1)}
                                    </span>
                                    <span className="label">{framework.category}</span>
                                </div>
                                <h2 className="font-display text-3xl sm:text-[2.5rem] font-semibold text-ink leading-[1.08]">
                                    {framework.name}
                                </h2>
                                <p className="page-standfirst mt-4">{framework.description}</p>
                            </div>

                            {framework.principles && framework.id !== 'lean' && (
                                <section>
                                    <Subhead count={framework.principles.length}>Core principles</Subhead>
                                    <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                        {framework.principles.map((principle, idx) => (
                                            <li key={idx} className="flex items-baseline gap-4 py-3.5 border-b border-rule">
                                                <span className="numeral text-[11px] font-semibold shrink-0 w-5">
                                                    {pad(idx + 1)}
                                                </span>
                                                <span className="font-text text-[14px] text-ink-soft leading-relaxed">
                                                    {principle}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </section>
                            )}

                            {/* Scrum */}
                            {framework.id === 'scrum' && (
                                <>
                                    <section>
                                        <Subhead count={framework.roles.length} accent>Roles</Subhead>
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
                                            {framework.roles.map((role, idx) => (
                                                <div key={idx} className="py-5 border-b border-rule">
                                                    <h4 className="font-display text-[17px] font-semibold text-ink mb-2.5">
                                                        {role.name}
                                                    </h4>
                                                    <ul className="space-y-1.5">
                                                        {role.responsibilities.map((resp, ridx) => (
                                                            <li key={ridx} className="flex items-baseline gap-2.5
                                                                                      font-text text-[13px] text-ink-soft leading-relaxed">
                                                                <span className="text-saffron shrink-0">—</span>
                                                                {resp}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <Subhead count={framework.events.length} accent>Events</Subhead>
                                        {framework.events.map((event, idx) => (
                                            <Disclosure
                                                key={idx}
                                                id={`event-${idx}`}
                                                summary={
                                                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                                        <span className="numeral text-[11px] font-semibold w-5">{pad(idx + 1)}</span>
                                                        <span className="font-display text-[17px] font-semibold text-ink">
                                                            {event.name}
                                                        </span>
                                                        <span className="label text-ink-faint">{event.timeBox}</span>
                                                    </span>
                                                }
                                            >
                                                <p className="font-text text-[14px] text-ink-soft leading-relaxed measure">
                                                    {event.description}
                                                </p>
                                                <TermRun items={event.keyPoints} />
                                            </Disclosure>
                                        ))}
                                    </section>

                                    <section>
                                        <Subhead count={framework.artifacts.length} accent>
                                            Artifacts &amp; commitments
                                        </Subhead>
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
                                            {framework.artifacts.map((artifact, idx) => (
                                                <div key={idx} className="py-5 border-b border-rule">
                                                    <h4 className="font-display text-[17px] font-semibold text-ink">
                                                        {artifact.name}
                                                    </h4>
                                                    <p className="label-accent mt-1.5">
                                                        Commitment · {artifact.commitment}
                                                    </p>
                                                    <p className="font-text text-[13px] text-ink-soft leading-relaxed mt-2.5">
                                                        {artifact.description}
                                                    </p>
                                                    <TermRun items={artifact.keyPoints} />
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}

                            {/* Kanban */}
                            {framework.id === 'kanban' && framework.practices && (
                                <>
                                    <section>
                                        <Subhead count={framework.practices.length} accent>Practices</Subhead>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                            {framework.practices.map((practice, idx) => (
                                                <Term key={idx} index={idx + 1} name={practice.name}>
                                                    {practice.description}
                                                    {practice.details && (
                                                        <span className="block text-ink-muted mt-1">{practice.details}</span>
                                                    )}
                                                </Term>
                                            ))}
                                        </div>
                                    </section>

                                    {framework.metrics && (
                                        <section>
                                            <Subhead count={framework.metrics.length}>Metrics</Subhead>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                                {framework.metrics.map((metric, idx) => (
                                                    <div key={idx} className="py-4 border-b border-rule">
                                                        <p className="font-display text-[15px] font-semibold text-ink">
                                                            {metric.name}
                                                        </p>
                                                        <p className="font-text text-[12.5px] text-ink-muted leading-relaxed mt-1">
                                                            {metric.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}
                                </>
                            )}

                            {/* XP */}
                            {framework.id === 'xp' && (
                                <>
                                    <section>
                                        <Subhead count={framework.values.length} accent>Values</Subhead>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-8">
                                            {framework.values.map((value, idx) => (
                                                <div key={idx} className="py-4 border-b border-rule">
                                                    <p className="font-display text-[16px] font-semibold text-ink">
                                                        {value.name}
                                                    </p>
                                                    <p className="font-text text-[12.5px] text-ink-muted leading-relaxed mt-1">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section>
                                        <Subhead count={framework.practices.length}>Practices</Subhead>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10">
                                            {framework.practices.map((practice, idx) => (
                                                <Term
                                                    key={idx}
                                                    name={practice.name}
                                                    aside={practice.category}
                                                >
                                                    {practice.description}
                                                </Term>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}

                            {/* Lean */}
                            {framework.id === 'lean' && framework.principles && (
                                <section>
                                    <Subhead count={framework.principles.length} accent>Principles</Subhead>
                                    {framework.principles.map((principle, idx) => (
                                        <Disclosure
                                            key={idx}
                                            id={`lean-${idx}`}
                                            summary={
                                                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                                    <span className="numeral text-[11px] font-semibold w-5">{pad(idx + 1)}</span>
                                                    <span className="min-w-0">
                                                        <span className="block font-display text-[17px] font-semibold text-ink">
                                                            {principle.name}
                                                        </span>
                                                        <span className="block font-text text-[13px] text-ink-muted leading-relaxed mt-1">
                                                            {principle.description}
                                                        </span>
                                                    </span>
                                                </span>
                                            }
                                        >
                                            {principle.wasteTypes && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
                                                    {principle.wasteTypes.map((waste, widx) => (
                                                        <div key={widx} className="py-3 border-b border-rule">
                                                            <p className="font-display text-[15px] font-semibold text-ink">
                                                                {waste.name}
                                                            </p>
                                                            <p className="font-text text-[12.5px] text-ink-muted italic mt-0.5">
                                                                {waste.example}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                            {principle.practices && <TermRun items={principle.practices} />}
                                        </Disclosure>
                                    ))}
                                </section>
                            )}

                            {/* SAFe */}
                            {framework.id === 'safe' && (
                                <>
                                    <section>
                                        <Subhead count={framework.levels.length} accent>Levels</Subhead>
                                        {framework.levels.map((level, idx) => (
                                            <Term key={idx} index={idx + 1} name={level.name}>
                                                {level.description}
                                                <TermRun items={level.components} />
                                            </Term>
                                        ))}
                                    </section>

                                    <section>
                                        <Subhead count={framework.events.length}>Events</Subhead>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                            {framework.events.map((event, idx) => (
                                                <Term key={idx} name={event.name} aside={event.frequency}>
                                                    {event.description}
                                                </Term>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}
                        </motion.article>
                    </AnimatePresence>
                </div>
            </div>
        );
    };

    /* ----------------------------------------------------------- Practices */

    const renderPractices = () => (
        <div>
            {agilePractices.map((category, catIdx) => (
                <Disclosure
                    key={catIdx}
                    id={`practice-${catIdx}`}
                    summary={
                        <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span className="numeral text-xs font-semibold w-6">{pad(catIdx + 1)}</span>
                            <span className="font-display text-xl font-semibold text-ink">
                                {category.category}
                            </span>
                            <span className="label text-ink-faint figure">
                                {category.items.length} entries
                            </span>
                        </span>
                    }
                >
                    <div className="space-y-8 pt-2">
                        {category.items.map((item, idx) => (
                            <article key={idx}>
                                <h4 className="font-display text-[17px] font-semibold text-ink">
                                    {item.name}
                                </h4>
                                <p className="font-text text-[14px] text-ink-soft leading-relaxed mt-1.5 measure">
                                    {item.description}
                                </p>

                                {item.format && (
                                    <p className="font-text text-[13px] text-lapis border-l-2 border-lapis/40 pl-4 py-1 mt-3">
                                        {item.format}
                                    </p>
                                )}

                                {item.investCriteria && (
                                    <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 mt-3">
                                        {item.investCriteria.map((criteria, cidx) => (
                                            <div key={cidx} className="flex items-baseline gap-2.5 py-2 border-b border-rule">
                                                <dt className="numeral text-base font-semibold">{criteria.letter}</dt>
                                                <dd className="font-text text-[12.5px] text-ink-soft">{criteria.meaning}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                )}

                                {item.steps && <TermRun items={item.steps} ordered />}
                                {item.cycle && (
                                    <p className="flex flex-wrap items-center gap-2 font-text text-[13px] text-ink-soft mt-3">
                                        {item.cycle.map((step, sidx) => (
                                            <React.Fragment key={sidx}>
                                                <span>{step}</span>
                                                {sidx < item.cycle.length - 1 && (
                                                    <ArrowRight size={12} className="text-saffron" />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                )}

                                {item.formats && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-3">
                                        {item.formats.map((format, fidx) => (
                                            <div key={fidx} className="py-2.5 border-b border-rule">
                                                <p className="font-display text-[14px] font-semibold text-ink">
                                                    {format.name}
                                                </p>
                                                <p className="font-text text-[12.5px] text-ink-muted">
                                                    {format.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </Disclosure>
            ))}
        </div>
    );

    /* --------------------------------------------------------------- Roles */

    const renderRoles = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 border-t border-rule-strong">
            {agileRoles.map((role, idx) => (
                <article key={idx} className="py-8 border-b border-rule">
                    <div className="flex items-baseline gap-4 mb-5">
                        <span className="numeral text-xs font-semibold w-5">{pad(idx + 1)}</span>
                        <div>
                            <h3 className="font-display text-2xl font-semibold text-ink leading-tight">
                                {role.name}
                            </h3>
                            <p className="label text-ink-faint mt-1">{role.framework}</p>
                        </div>
                    </div>

                    <div className="sm:pl-9 space-y-5">
                        <div>
                            <p className="label border-b border-rule pb-1.5 mb-2">Responsibilities</p>
                            <ul className="space-y-1.5">
                                {role.responsibilities.map((resp, ridx) => (
                                    <li key={ridx} className="flex items-baseline gap-2.5
                                                              font-text text-[13.5px] text-ink-soft leading-relaxed">
                                        <span className="text-lapis shrink-0">—</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="label border-b border-rule pb-1.5 mb-1">Key skills</p>
                            <TermRun items={role.skills} />
                        </div>

                        {role.antiPatterns && (
                            <div>
                                <p className="label border-b border-rule pb-1.5 mb-1 text-saffron">
                                    Anti-patterns to avoid
                                </p>
                                <TermRun items={role.antiPatterns} />
                            </div>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );

    /* ---------------------------------------------------------- Comparison */

    const renderComparison = () => (
        <div className="space-y-16">
            <section>
                <h3 className="font-display text-2xl font-semibold text-ink">
                    {agileVsPredictive.title}
                </h3>
                <p className="font-text text-[15px] text-ink-soft leading-relaxed mt-2 measure">
                    {agileVsPredictive.description}
                </p>

                <div className="overflow-x-auto mt-8 custom-scrollbar">
                    <table className="w-full min-w-[640px] border-collapse text-left">
                        <thead>
                            <tr className="border-y-2 border-ink">
                                <th scope="col" className="label py-3 pr-6 w-1/4">Aspect</th>
                                <th scope="col" className="label-accent py-3 px-6 w-[37.5%]">Agile</th>
                                <th scope="col" className="label py-3 pl-6 w-[37.5%] text-saffron">Predictive</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agileVsPredictive.comparison.map((row, idx) => (
                                <tr key={idx} className="border-b border-rule align-top">
                                    <th scope="row" className="py-4 pr-6 font-display text-[15px] font-semibold text-ink text-left">
                                        {row.aspect}
                                    </th>
                                    <td className="py-4 px-6 font-text text-[13.5px] text-ink-soft leading-relaxed border-l border-rule">
                                        {row.agile}
                                    </td>
                                    <td className="py-4 pl-6 font-text text-[13.5px] text-ink-soft leading-relaxed border-l border-rule">
                                        {row.predictive}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                {[
                    { head: 'When to use agile', items: agileVsPredictive.whenToUse.agile, mark: 'text-lapis' },
                    { head: 'When to use predictive', items: agileVsPredictive.whenToUse.predictive, mark: 'text-saffron' },
                    { head: 'When to use hybrid', items: agileVsPredictive.whenToUse.hybrid, mark: 'text-ink-muted' },
                ].map((column) => (
                    <div key={column.head}>
                        <p className={`label border-b-2 border-rule-strong pb-2 mb-1 ${column.mark}`}>
                            {column.head}
                        </p>
                        <ul>
                            {column.items.map((item, idx) => (
                                <li key={idx} className="flex items-baseline gap-3 py-3 border-b border-rule
                                                         font-text text-[13.5px] text-ink-soft leading-relaxed">
                                    <span className={`shrink-0 ${column.mark}`}>—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );

    /* ---------------------------------------------------------- Leadership */

    const renderLeadership = () => (
        <div className="space-y-16">
            <section className="border-l-2 border-saffron pl-6 sm:pl-8">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                    {servantLeadership.title}
                </h3>
                <p className="page-standfirst mt-3">{servantLeadership.description}</p>
            </section>

            <section>
                <Subhead count={servantLeadership.principles.length}>
                    The ten principles
                </Subhead>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
                    {servantLeadership.principles.map((principle, idx) => (
                        <li key={idx}>
                            <Term index={idx + 1} name={principle.name}>
                                {principle.description}
                            </Term>
                        </li>
                    ))}
                </ol>
            </section>

            <section>
                <Subhead accent>Application in agile</Subhead>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
                    {servantLeadership.applicationInAgile.map((item, idx) => (
                        <li key={idx} className="flex items-baseline gap-3 py-3.5 border-b border-rule
                                                 font-text text-[14px] text-ink-soft leading-relaxed">
                            <span className="text-lapis shrink-0">—</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );

    /* -------------------------------------------------------------------- */

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            <PageHeader
                number="§ V"
                kicker="Adaptive"
                title="Agile Methodologies"
                standfirst="Frameworks, practices and roles — and the judgement about which of them a given situation is asking for."
                note="Roughly half the current exam sits in agile or hybrid territory. The frameworks matter less than knowing when each one is the right answer."
                image="/art/chapter-agile.jpg"
                imageAlt="A flexible bamboo grove and changing paths through rain"
                maxim="Bend with change. Keep value in sight."
                imagePosition="center bottom"
            />

            <nav className="flex gap-8 overflow-x-auto custom-scrollbar border-b border-rule-strong mb-12">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`toc-tab ${activeTab === tab.id ? 'toc-tab-active' : ''}`}
                    >
                        {tab.name}
                    </button>
                ))}
            </nav>

            {activeTab === 'frameworks' && renderFrameworks()}
            {activeTab === 'practices' && renderPractices()}
            {activeTab === 'roles' && renderRoles()}
            {activeTab === 'comparison' && renderComparison()}
            {activeTab === 'leadership' && renderLeadership()}
        </motion.div>
    );
};

export default AgileView;
