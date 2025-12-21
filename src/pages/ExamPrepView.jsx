import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen, Target, Clock, CheckCircle, XCircle, AlertTriangle,
    Award, Brain, Lightbulb, TrendingUp, FileText, Calculator,
    ChevronDown, ChevronRight, Play, RotateCcw, Eye, Users,
    Settings, Briefcase, HelpCircle
} from 'lucide-react';

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

const ExamPrepView = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [practiceMode, setPracticeMode] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState('all');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });
    const [answeredQuestions, setAnsweredQuestions] = useState({});
    const [expandedSection, setExpandedSection] = useState({});

    const tabs = [
        { id: 'overview', name: 'Exam Overview', icon: BookOpen },
        { id: 'strategies', name: 'Study Strategies', icon: Brain },
        { id: 'mindset', name: 'PMP Mindset', icon: Lightbulb },
        { id: 'practice', name: 'Practice Questions', icon: Target },
        { id: 'formulas', name: 'Key Formulas', icon: Calculator },
        { id: 'tips', name: 'Exam Day Tips', icon: Award }
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
        
        setAnsweredQuestions(prev => ({
            ...prev,
            [currentQuestion.id]: { selected: optionId, correct: isCorrect }
        }));
        
        setScore(prev => ({
            correct: prev.correct + (isCorrect ? 1 : 0),
            total: prev.total + 1
        }));
        
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
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

    const toggleSection = (section) => {
        setExpandedSection(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const domainColors = {
        People: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-200' },
        Process: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
        'Business Environment': { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' }
    };

    const renderOverview = () => (
        <div className="space-y-6">
            {/* Exam Details */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{examOverview.title}</h3>
                <p className="text-slate-600 mb-6">{examOverview.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                        <p className="text-3xl font-bold text-purple-600">{examOverview.details.totalQuestions}</p>
                        <p className="text-sm text-purple-700">Total Questions</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                        <p className="text-3xl font-bold text-blue-600">{examOverview.details.duration}</p>
                        <p className="text-sm text-blue-700">Duration</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                        <p className="text-3xl font-bold text-green-600">{examOverview.details.breaks}</p>
                        <p className="text-sm text-green-700">Breaks</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-center">
                        <p className="text-3xl font-bold text-amber-600">{examOverview.details.passingScore}</p>
                        <p className="text-sm text-amber-700">Target Score</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-3">Question Types</h4>
                        <ul className="space-y-2">
                            {examOverview.details.questionTypes.map((type, idx) => (
                                <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                                    <CheckCircle className="text-green-500" size={14} />
                                    {type}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-3">Approach Distribution</h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Predictive</span>
                                <span className="text-sm font-semibold text-slate-900">{examOverview.approach.predictive}</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Agile/Hybrid</span>
                                <span className="text-sm font-semibold text-slate-900">{examOverview.approach.agileHybrid}</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Domain Distribution */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Domain Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {examOverview.domains.map((domain, idx) => {
                        const colors = domain.color === 'red' ? 'bg-red-500' : domain.color === 'blue' ? 'bg-blue-500' : 'bg-green-500';
                        const bgColor = domain.color === 'red' ? 'bg-red-50 border-red-200' : domain.color === 'blue' ? 'bg-blue-50 border-blue-200' : 'bg-green-50 border-green-200';
                        const textColor = domain.color === 'red' ? 'text-red-700' : domain.color === 'blue' ? 'text-blue-700' : 'text-green-700';
                        
                        return (
                            <div key={idx} className={`p-4 rounded-xl border ${bgColor}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className={`font-semibold ${textColor}`}>{domain.name}</h4>
                                    <span className={`text-2xl font-bold ${textColor}`}>{domain.percentage}%</span>
                                </div>
                                <div className="w-full bg-white/50 rounded-full h-3 mb-2">
                                    <div className={`${colors} h-3 rounded-full`} style={{ width: `${domain.percentage}%` }}></div>
                                </div>
                                <p className={`text-sm ${textColor}`}>{domain.questions}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const renderStrategies = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studyStrategies.map((strategy, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                            <Brain size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-2">{strategy.title}</h3>
                            <p className="text-sm text-slate-600 mb-4">{strategy.description}</p>
                            <ul className="space-y-2">
                                {strategy.tips.map((tip, tidx) => (
                                    <li key={tidx} className="text-sm text-slate-600 flex items-start gap-2">
                                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderMindset = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pmpMindset.title}</h3>
                <p className="text-slate-600">{pmpMindset.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pmpMindset.principles.map((principle, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                                {idx + 1}
                            </span>
                            <h4 className="font-bold text-slate-900">{principle.title}</h4>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{principle.description}</p>
                        <div className="space-y-2">
                            {principle.examples.map((example, eidx) => (
                                <div key={eidx} className="flex items-start gap-2 p-2 bg-slate-50 rounded-lg">
                                    <Lightbulb className="text-amber-500 flex-shrink-0 mt-0.5" size={14} />
                                    <span className="text-sm text-slate-700">{example}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPractice = () => (
        <div className="space-y-6">
            {/* Controls */}
            <div className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-700">Domain:</span>
                        <select
                            value={selectedDomain}
                            onChange={(e) => {
                                setSelectedDomain(e.target.value);
                                resetPractice();
                            }}
                            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="all">All Domains</option>
                            <option value="people">People (42%)</option>
                            <option value="process">Process (50%)</option>
                            <option value="business">Business Environment (8%)</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm">
                            <span className="text-slate-500">Score: </span>
                            <span className="font-bold text-purple-600">
                                {score.correct}/{score.total}
                            </span>
                            {score.total > 0 && (
                                <span className="text-slate-500 ml-1">
                                    ({Math.round((score.correct / score.total) * 100)}%)
                                </span>
                            )}
                        </div>
                        <button
                            onClick={resetPractice}
                            className="flex items-center gap-2 px-3 py-2 text-sm bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
                        >
                            <RotateCcw size={16} />
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            {/* Progress */}
            <div className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-slate-600">
                        {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
                    </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            {currentQuestion && (
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    {/* Question Header */}
                    <div className="p-4 bg-slate-50 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className={`px-2 py-1 text-xs font-medium rounded ${domainColors[currentQuestion.domain].bg} ${domainColors[currentQuestion.domain].text}`}>
                                    {currentQuestion.domain}
                                </span>
                                <span className="text-xs text-slate-500">Task: {currentQuestion.task}</span>
                            </div>
                            <span className="text-sm text-slate-500">ID: {currentQuestion.id}</span>
                        </div>
                    </div>

                    {/* Question */}
                    <div className="p-6">
                        <h3 className="text-lg font-medium text-slate-900 mb-6">{currentQuestion.question}</h3>
                        
                        {/* Options */}
                        <div className="space-y-3">
                            {currentQuestion.options.map((option) => {
                                const isSelected = selectedAnswer === option.id;
                                const isCorrect = option.id === currentQuestion.correctAnswer;
                                const isAnswered = answeredQuestions[currentQuestion.id];
                                
                                let optionClass = 'border-slate-200 hover:border-purple-300 hover:bg-purple-50';
                                if (isAnswered) {
                                    if (isCorrect) {
                                        optionClass = 'border-green-500 bg-green-50';
                                    } else if (isSelected && !isCorrect) {
                                        optionClass = 'border-red-500 bg-red-50';
                                    }
                                } else if (isSelected) {
                                    optionClass = 'border-purple-500 bg-purple-50';
                                }

                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleAnswer(option.id)}
                                        disabled={!!isAnswered}
                                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${optionClass}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                                                isAnswered && isCorrect ? 'bg-green-500 text-white' :
                                                isAnswered && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                                                'bg-slate-100 text-slate-600'
                                            }`}>
                                                {option.id}
                                            </span>
                                            <span className="text-slate-700">{option.text}</span>
                                            {isAnswered && isCorrect && (
                                                <CheckCircle className="text-green-500 ml-auto flex-shrink-0" size={20} />
                                            )}
                                            {isAnswered && isSelected && !isCorrect && (
                                                <XCircle className="text-red-500 ml-auto flex-shrink-0" size={20} />
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Explanation */}
                        <AnimatePresence>
                            {showExplanation && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-6"
                                >
                                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                                            <Eye size={18} />
                                            Explanation
                                        </h4>
                                        <p className="text-blue-700 text-sm mb-3">{currentQuestion.explanation}</p>
                                        {currentQuestion.tip && (
                                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                                                <p className="text-amber-700 text-sm flex items-start gap-2">
                                                    <Lightbulb className="flex-shrink-0 mt-0.5" size={16} />
                                                    <span><strong>Exam Tip:</strong> {currentQuestion.tip}</span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation */}
                        {showExplanation && currentQuestionIndex < questions.length - 1 && (
                            <div className="mt-6 flex justify-end">
                                <button
                                    onClick={nextQuestion}
                                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                                >
                                    Next Question
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        )}

                        {/* Completion */}
                        {showExplanation && currentQuestionIndex === questions.length - 1 && (
                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                                <Award className="mx-auto text-green-600 mb-2" size={32} />
                                <h4 className="font-bold text-green-800 mb-1">Practice Complete!</h4>
                                <p className="text-green-700">
                                    Final Score: {score.correct}/{score.total} ({Math.round((score.correct / score.total) * 100)}%)
                                </p>
                                <button
                                    onClick={resetPractice}
                                    className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Start Over
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    const renderFormulas = () => (
        <div className="space-y-6">
            {keyFormulas.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button
                        onClick={() => toggleSection(`formula-${idx}`)}
                        className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                                <Calculator size={20} />
                            </div>
                            <span className="font-bold text-slate-900">{category.category}</span>
                            <span className="text-sm text-slate-500">({category.formulas.length} formulas)</span>
                        </div>
                        {expandedSection[`formula-${idx}`] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </button>
                    <AnimatePresence>
                        {expandedSection[`formula-${idx}`] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="border-t border-slate-200"
                            >
                                <div className="p-4 space-y-3">
                                    {category.formulas.map((formula, fidx) => (
                                        <div key={fidx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                            <div className="flex items-start justify-between mb-2">
                                                <h4 className="font-semibold text-slate-900">{formula.name}</h4>
                                            </div>
                                            <div className="p-2 bg-blue-50 border border-blue-200 rounded font-mono text-blue-700 text-sm mb-2">
                                                {formula.formula}
                                            </div>
                                            <p className="text-sm text-slate-600">{formula.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}

            {/* EVM Quick Reference */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-slate-900 mb-4">EVM Quick Reference</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Variance Interpretation</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-slate-600">Positive CV/SV = Good (under budget/ahead)</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="text-slate-600">Negative CV/SV = Bad (over budget/behind)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-2">Index Interpretation</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                <span className="text-slate-600">CPI/SPI {'>'} 1 = Good performance</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                <span className="text-slate-600">CPI/SPI {'<'} 1 = Poor performance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTips = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examDayTips.map((section, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="text-purple-600" size={20} />
                        {section.title}
                    </h3>
                    <ul className="space-y-3">
                        {section.tips.map((tip, tidx) => (
                            <li key={tidx} className="flex items-start gap-3 p-2 bg-slate-50 rounded-lg">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                <span className="text-sm text-slate-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    Exam <span className="text-purple-600">Preparation</span>
                </h1>
                <p className="text-slate-600">
                    Practice questions, study strategies, and exam tips for PMP certification success
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4">
                {tabs.map(tab => {
                    const IconComponent = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                                activeTab === tab.id
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            <IconComponent size={18} />
                            {tab.name}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div>
                {activeTab === 'overview' && renderOverview()}
                {activeTab === 'strategies' && renderStrategies()}
                {activeTab === 'mindset' && renderMindset()}
                {activeTab === 'practice' && renderPractice()}
                {activeTab === 'formulas' && renderFormulas()}
                {activeTab === 'tips' && renderTips()}
            </div>
        </motion.div>
    );
};

export default ExamPrepView;
