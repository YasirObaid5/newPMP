import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, RotateCcw } from 'lucide-react';
import PageHeader from '../components/PageHeader';

import {
    examOverview,
    studyStrategies,
    pmpMindset,
    peopleQuestions,
    processQuestions,
    businessQuestions,
    keyFormulas,
    examDayTips
} from '../examPrepData';

const pad = (n) => String(n).padStart(2, '0');

const Subhead = ({ children, count, accent = false }) => (
    <div className={`flex items-baseline justify-between gap-4 border-b-2 pb-2 mb-1 ${
        accent ? 'border-lapis/40' : 'border-rule-strong'
    }`}>
        <h3 className={accent ? 'label-accent' : 'label'}>{children}</h3>
        {count != null && <span className="label figure text-ink-faint">{count}</span>}
    </div>
);

/**
 * A quantity set as a display figure over a small-caps label.
 *
 * The source strings are prose, not numbers ("230 minutes (3 hours 50
 * minutes)"), so pull the first figure out to set large and demote whatever
 * sits either side of it to a gloss. Falls back to setting the whole string
 * small when there is no number in it at all.
 */
const Statistic = ({ value, label }) => {
    const text = String(value);
    const match = text.match(/\d[\d.,]*\s*%?/);
    const figure = match ? match[0].trim() : null;
    const before = match ? text.slice(0, match.index).trim() : '';
    const after = match ? text.slice(match.index + match[0].length).trim() : '';

    return (
        <div className="py-4 border-b border-rule">
            {before && <p className="font-text text-[12px] text-ink-muted mb-1">{before}</p>}
            <p
                className={`figure font-display font-semibold text-ink leading-none ${
                    figure ? 'text-[2.5rem]' : 'text-xl leading-snug'
                }`}
            >
                {figure ?? text}
            </p>
            {after && (
                <p className="font-text text-[12px] text-ink-muted leading-snug mt-1.5">{after}</p>
            )}
            <p className="label mt-2">{label}</p>
        </div>
    );
};

/* A hairline measure with a tick at its value. */
const Meter = ({ value, tone = 'bg-lapis' }) => (
    <div className="h-px w-full bg-rule-strong relative mt-2">
        <div className={`absolute inset-y-0 left-0 h-px ${tone}`} style={{ width: `${value}%` }} />
        <div className={`absolute -top-[3px] h-[7px] w-px ${tone}`} style={{ left: `${value}%` }} />
    </div>
);

const ExamPrepView = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedDomain, setSelectedDomain] = useState('all');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [expandedSection, setExpandedSection] = useState({});

    const tabs = [
        { id: 'overview', name: 'Overview' },
        { id: 'strategies', name: 'Study Strategies' },
        { id: 'mindset', name: 'The Mindset' },
        { id: 'practice', name: 'Practice' },
        { id: 'formulas', name: 'Formulas' },
        { id: 'tips', name: 'Exam Day' }
    ];

    const getAllQuestions = () => {
        if (selectedDomain === 'people') return peopleQuestions;
        if (selectedDomain === 'process') return processQuestions;
        if (selectedDomain === 'business') return businessQuestions;
        return [...peopleQuestions, ...processQuestions, ...businessQuestions];
    };

    const questions = getAllQuestions();
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (optionId) => {
        if (answeredQuestions[currentQuestion.id]) return;

        setSelectedAnswer(optionId);
        const isCorrect = optionId === currentQuestion.correctAnswer;

        setAnsweredQuestions((prev) => ({
            ...prev,
            [currentQuestion.id]: { selected: optionId, correct: isCorrect }
        }));

        setScore((prev) => ({
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1
        }));

        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
        }
    };

    const resetPractice = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setScore({ correct: 0, total: 0 });
        setAnsweredQuestions({});
    };

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
                        <div className="pb-6 sm:pl-9 sm:border-l-2 sm:border-saffron/40 sm:ml-1">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    /* ------------------------------------------------------------ Overview */

    const renderOverview = () => (
        <div className="space-y-16">
            <section>
                <h3 className="font-display text-2xl font-semibold text-ink">{examOverview.title}</h3>
                <p className="font-text text-[15px] text-ink-soft leading-relaxed mt-2 measure">
                    {examOverview.description}
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 mt-10 border-t-2 border-ink">
                    <Statistic value={examOverview.details.totalQuestions} label="Total questions" />
                    <Statistic value={examOverview.details.duration} label="Duration" />
                    <Statistic value={examOverview.details.breaks} label="Breaks" />
                    <Statistic value={examOverview.details.passingScore} label="Target score" />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">
                <section>
                    <Subhead count={examOverview.details.questionTypes.length}>Question types</Subhead>
                    <ul>
                        {examOverview.details.questionTypes.map((type, idx) => (
                            <li key={idx} className="flex items-baseline gap-4 py-3 border-b border-rule">
                                <span className="numeral text-[11px] font-semibold w-5 shrink-0">
                                    {pad(idx + 1)}
                                </span>
                                <span className="font-text text-[14px] text-ink-soft">{type}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <Subhead accent>Approach distribution</Subhead>
                    <div className="pt-2">
                        {[
                            { name: 'Predictive', value: examOverview.approach.predictive, tone: 'bg-lapis' },
                            { name: 'Agile / Hybrid', value: examOverview.approach.agileHybrid, tone: 'bg-saffron' },
                        ].map((row) => (
                            <div key={row.name} className="py-4 border-b border-rule">
                                <div className="flex items-baseline justify-between gap-4">
                                    <span className="font-display text-[16px] font-semibold text-ink">
                                        {row.name}
                                    </span>
                                    <span className="figure font-text text-sm font-semibold text-ink-soft">
                                        {row.value}
                                    </span>
                                </div>
                                <Meter value={50} tone={row.tone} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <section>
                <Subhead count={examOverview.domains.length}>Domain distribution</Subhead>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14">
                    {examOverview.domains.map((domain, idx) => (
                        <div key={idx} className="py-6 border-b border-rule">
                            <div className="flex items-baseline justify-between gap-4">
                                <h4 className="font-display text-lg font-semibold text-ink">
                                    {domain.name}
                                </h4>
                                <span className="figure font-display text-3xl font-semibold text-ink leading-none">
                                    {domain.percentage}
                                    <span className="text-base text-ink-faint">%</span>
                                </span>
                            </div>
                            <Meter value={domain.percentage} />
                            <p className="font-text text-[13px] text-ink-muted mt-3">{domain.questions}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    /* ---------------------------------------------------------- Strategies */

    const renderStrategies = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 border-t-2 border-ink">
            {studyStrategies.map((strategy, idx) => (
                <article key={idx} className="py-8 border-b border-rule">
                    <div className="flex items-baseline gap-4">
                        <span className="numeral text-xs font-semibold w-5 shrink-0">{pad(idx + 1)}</span>
                        <div className="min-w-0">
                            <h3 className="font-display text-xl font-semibold text-ink leading-snug">
                                {strategy.title}
                            </h3>
                            <p className="font-text text-[14px] text-ink-soft leading-relaxed mt-2">
                                {strategy.description}
                            </p>
                            <ul className="mt-4">
                                {strategy.tips.map((tip, tidx) => (
                                    <li key={tidx} className="flex items-baseline gap-3 py-2.5 border-t border-rule
                                                              font-text text-[13.5px] text-ink-soft leading-relaxed">
                                        <span className="text-lapis shrink-0">—</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );

    /* ------------------------------------------------------------- Mindset */

    const renderMindset = () => (
        <div className="space-y-14">
            <section className="border-l-2 border-saffron pl-6 sm:pl-8">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
                    {pmpMindset.title}
                </h3>
                <p className="page-standfirst mt-3">{pmpMindset.description}</p>
            </section>

            <ol className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 border-t-2 border-ink">
                {pmpMindset.principles.map((principle, idx) => (
                    <li key={idx} className="py-7 border-b border-rule">
                        <div className="flex items-baseline gap-4">
                            <span className="numeral text-xs font-semibold w-5 shrink-0">{pad(idx + 1)}</span>
                            <div className="min-w-0">
                                <h4 className="font-display text-lg font-semibold text-ink leading-snug">
                                    {principle.title}
                                </h4>
                                <p className="font-text text-[14px] text-ink-soft leading-relaxed mt-2">
                                    {principle.description}
                                </p>
                                <ul className="mt-4">
                                    {principle.examples.map((example, eidx) => (
                                        <li key={eidx} className="flex items-baseline gap-3 py-2 border-t border-rule
                                                                  font-text text-[13px] text-ink-muted leading-relaxed italic">
                                            <span className="text-saffron shrink-0 not-italic">→</span>
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );

    /* ------------------------------------------------------------ Practice */

    const renderPractice = () => {
        const answered = currentQuestion && answeredQuestions[currentQuestion.id];
        const percent = score.total > 0 ? Math.round((score.correct / score.total) * 100) : null;

        return (
            <div>
                {/* Apparatus */}
                <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5
                                border-y-2 border-ink py-4 mb-10">
                    <label className="flex items-baseline gap-3">
                        <span className="label">Domain</span>
                        <select
                            value={selectedDomain}
                            onChange={(e) => {
                                setSelectedDomain(e.target.value);
                                resetPractice();
                            }}
                            className="bg-transparent border-0 border-b border-rule-strong py-1 pr-6
                                       font-display text-[15px] font-medium text-ink
                                       focus:border-lapis focus:outline-none cursor-pointer"
                        >
                            <option value="all">All domains</option>
                            <option value="people">People — 42%</option>
                            <option value="process">Process — 50%</option>
                            <option value="business">Business Environment — 8%</option>
                        </select>
                    </label>

                    <div className="flex items-end gap-8">
                        <div>
                            <span className="label block mb-1">Score</span>
                            <span className="figure font-display text-2xl font-semibold text-ink leading-none">
                                {score.correct}<span className="text-ink-faint">/{score.total}</span>
                                {percent !== null && (
                                    <span className="font-text text-[11px] font-semibold text-ink-muted ml-2">
                                        {percent}%
                                    </span>
                                )}
                            </span>
                        </div>
                        <button onClick={resetPractice} className="btn-quiet">
                            <RotateCcw size={13} /> Reset
                        </button>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-12">
                    <div className="flex items-baseline justify-between gap-4">
                        <span className="label">
                            Question <span className="figure">{currentQuestionIndex + 1}</span> of{' '}
                            <span className="figure">{questions.length}</span>
                        </span>
                        <span className="label figure text-ink-faint">
                            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
                        </span>
                    </div>
                    <Meter value={((currentQuestionIndex + 1) / questions.length) * 100} />
                </div>

                {currentQuestion && (
                    <article className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6">
                        <div className="lg:col-span-3">
                            <p className="label border-b border-rule pb-2 mb-3">
                                {currentQuestion.domain}
                            </p>
                            <p className="font-text text-[12.5px] text-ink-muted leading-relaxed">
                                {currentQuestion.task}
                            </p>
                            <p className="label text-ink-faint mt-4">Ref {currentQuestion.id}</p>
                        </div>

                        <div className="lg:col-span-9 lg:border-l lg:border-rule lg:pl-12">
                            <h3 className="font-display text-xl sm:text-2xl font-medium text-ink leading-snug measure">
                                {currentQuestion.question}
                            </h3>

                            <ol className="mt-8 border-t border-rule-strong">
                                {currentQuestion.options.map((option) => {
                                    const isSelected = selectedAnswer === option.id;
                                    const isCorrect = option.id === currentQuestion.correctAnswer;

                                    let mark = 'text-ink-faint';
                                    let body = 'text-ink-soft';
                                    let edge = 'border-transparent';

                                    if (answered) {
                                        if (isCorrect) {
                                            mark = 'text-correct';
                                            body = 'text-ink';
                                            edge = 'border-correct';
                                        } else if (isSelected) {
                                            mark = 'text-wrong';
                                            body = 'text-ink-muted line-through decoration-wrong/40';
                                            edge = 'border-wrong';
                                        }
                                    }

                                    return (
                                        <li key={option.id} className="border-b border-rule">
                                            <button
                                                onClick={() => handleAnswer(option.id)}
                                                disabled={!!answered}
                                                className={`group w-full text-left flex items-baseline gap-5 py-4 pl-4 pr-2
                                                            border-l-2 ${edge} transition-colors
                                                            ${!answered ? 'hover:bg-[rgba(252,251,247,0.85)] hover:border-lapis' : ''}`}
                                            >
                                                <span className={`font-display text-lg font-semibold shrink-0 w-4 ${mark}`}>
                                                    {option.id}
                                                </span>
                                                <span className={`font-text text-[14.5px] leading-relaxed ${body}`}>
                                                    {option.text}
                                                </span>
                                                {answered && isCorrect && (
                                                    <span className="label ml-auto shrink-0 self-center text-correct">
                                                        Correct
                                                    </span>
                                                )}
                                                {answered && isSelected && !isCorrect && (
                                                    <span className="label ml-auto shrink-0 self-center text-wrong">
                                                        Your answer
                                                    </span>
                                                )}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ol>

                            <AnimatePresence>
                                {showExplanation && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-10 border-l-2 border-lapis pl-6">
                                            <p className="label-accent mb-2.5">Explanation</p>
                                            <p className="font-text text-[14.5px] text-ink-soft leading-relaxed measure">
                                                {currentQuestion.explanation}
                                            </p>

                                            {currentQuestion.tip && (
                                                <div className="mt-6 pt-5 border-t border-rule">
                                                    <p className="label text-saffron mb-2">Exam tip</p>
                                                    <p className="font-display text-[16px] italic font-medium
                                                                  text-ink-soft leading-relaxed measure">
                                                        {currentQuestion.tip}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {currentQuestionIndex < questions.length - 1 ? (
                                            <div className="mt-10 flex justify-end">
                                                <button onClick={nextQuestion} className="btn-primary">
                                                    Next question <ChevronRight size={15} strokeWidth={2.2} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="mt-10 border-t-2 border-ink pt-6">
                                                <p className="label mb-2">Practice complete</p>
                                                <p className="figure font-display text-4xl font-semibold text-ink leading-none">
                                                    {score.correct}<span className="text-ink-faint">/{score.total}</span>
                                                    <span className="font-text text-sm font-semibold text-ink-muted ml-3">
                                                        {percent}%
                                                    </span>
                                                </p>
                                                <button onClick={resetPractice} className="btn-secondary mt-6">
                                                    Start over
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </article>
                )}
            </div>
        );
    };

    /* ------------------------------------------------------------ Formulas */

    const renderFormulas = () => (
        <div className="space-y-16">
            <div className="border-t-2 border-ink">
                {keyFormulas.map((category, idx) => (
                    <Disclosure
                        key={idx}
                        id={`formula-${idx}`}
                        summary={
                            <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                                <span className="numeral text-xs font-semibold w-6">{pad(idx + 1)}</span>
                                <span className="font-display text-xl font-semibold text-ink">
                                    {category.category}
                                </span>
                                <span className="label text-ink-faint figure">
                                    {category.formulas.length} formulas
                                </span>
                            </span>
                        }
                    >
                        <dl className="pt-2">
                            {category.formulas.map((formula, fidx) => (
                                <div key={fidx} className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-1.5
                                                           py-4 border-b border-rule">
                                    <dt className="sm:col-span-4 font-display text-[16px] font-semibold text-ink">
                                        {formula.name}
                                    </dt>
                                    <dd className="sm:col-span-8">
                                        <p className="figure font-text text-[14px] font-semibold text-lapis tracking-wide">
                                            {formula.formula}
                                        </p>
                                        <p className="font-text text-[13px] text-ink-muted leading-relaxed mt-1.5">
                                            {formula.description}
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </Disclosure>
                ))}
            </div>

            <section>
                <Subhead accent>Earned value — reading the numbers</Subhead>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
                    {[
                        {
                            head: 'Variances',
                            rows: [
                                { verdict: 'Favourable', tone: 'text-correct', text: 'Positive CV or SV — under budget, or ahead of schedule.' },
                                { verdict: 'Adverse', tone: 'text-wrong', text: 'Negative CV or SV — over budget, or behind schedule.' },
                            ],
                        },
                        {
                            head: 'Indices',
                            rows: [
                                { verdict: 'Favourable', tone: 'text-correct', text: 'CPI or SPI greater than 1 — performing better than planned.' },
                                { verdict: 'Adverse', tone: 'text-wrong', text: 'CPI or SPI less than 1 — performing worse than planned.' },
                            ],
                        },
                    ].map((block) => (
                        <div key={block.head}>
                            <p className="label border-b border-rule pb-2 mb-1">{block.head}</p>
                            <dl>
                                {block.rows.map((row) => (
                                    <div key={row.verdict} className="py-3.5 border-b border-rule">
                                        <dt className={`label ${row.tone}`}>{row.verdict}</dt>
                                        <dd className="font-text text-[13.5px] text-ink-soft leading-relaxed mt-1">
                                            {row.text}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );

    /* ---------------------------------------------------------------- Tips */

    const renderTips = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 border-t-2 border-ink">
            {examDayTips.map((section, idx) => (
                <section key={idx} className="py-8 border-b border-rule">
                    <div className="flex items-baseline gap-4 mb-4">
                        <span className="numeral text-xs font-semibold w-5 shrink-0">{pad(idx + 1)}</span>
                        <h3 className="font-display text-xl font-semibold text-ink leading-snug">
                            {section.title}
                        </h3>
                    </div>
                    <ul className="sm:pl-9">
                        {section.tips.map((tip, tidx) => (
                            <li key={tidx} className="flex items-baseline gap-3 py-2.5 border-t border-rule
                                                      font-text text-[13.5px] text-ink-soft leading-relaxed">
                                <span className="text-lapis shrink-0">—</span>
                                {tip}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
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
                number="§ VI"
                kicker="Examination"
                title="Exam Preparation"
                standfirst="What the paper asks, how it asks it, and the habits of mind that answer it."
                note="One hundred and eighty questions in two hundred and thirty minutes. The practice set below is scored as you go."
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

            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'strategies' && renderStrategies()}
            {activeTab === 'mindset' && renderMindset()}
            {activeTab === 'practice' && renderPractice()}
            {activeTab === 'formulas' && renderFormulas()}
            {activeTab === 'tips' && renderTips()}
        </motion.div>
    );
};

export default ExamPrepView;
