import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Repeat, GitBranch, Layout, Zap, TrendingUp, Layers,
    ChevronDown, ChevronRight, Users, Calendar, Target,
    CheckCircle, Clock, MessageCircle, Settings, BarChart2,
    Clipboard, ArrowRight, BookOpen, Award
} from 'lucide-react';

import {
    agileFrameworks,
    agilePractices,
    agileRoles,
    agileVsPredictive,
    servantLeadership
} from '../agileData';

const iconMap = {
    Repeat, GitBranch, Layout, Zap, TrendingUp, Layers,
    Users, Calendar, Target, CheckCircle, Clock, MessageCircle,
    Settings, BarChart2, Clipboard, Award
};

const colorClasses = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', badge: 'bg-yellow-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', badge: 'bg-green-100' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', badge: 'bg-indigo-100' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', badge: 'bg-red-100' }
};

const AgileView = () => {
    const [activeTab, setActiveTab] = useState('frameworks');
    const [expandedFramework, setExpandedFramework] = useState('scrum');
    const [expandedSection, setExpandedSection] = useState({});

    const tabs = [
        { id: 'frameworks', name: 'Frameworks', icon: GitBranch },
        { id: 'practices', name: 'Practices', icon: Settings },
        { id: 'roles', name: 'Roles', icon: Users },
        { id: 'comparison', name: 'Agile vs Predictive', icon: BarChart2 },
        { id: 'leadership', name: 'Servant Leadership', icon: Award }
    ];

    const toggleSection = (section) => {
        setExpandedSection(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const renderFrameworks = () => (
        <div className="space-y-6">
            <div className="flex flex-wrap gap-3 mb-8">
                {agileFrameworks.map(framework => {
                    const colors = colorClasses[framework.color];
                    return (
                        <button
                            key={framework.id}
                            onClick={() => setExpandedFramework(framework.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                                expandedFramework === framework.id
                                    ? `${colors.bg} ${colors.text} ${colors.border} border-2`
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {framework.name}
                        </button>
                    );
                })}
            </div>

            {agileFrameworks.map(framework => {
                if (framework.id !== expandedFramework) return null;
                const colors = colorClasses[framework.color];
                const IconComponent = iconMap[framework.icon] || GitBranch;

                return (
                    <motion.div
                        key={framework.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Header */}
                        <div className={`p-6 rounded-xl ${colors.bg} ${colors.border} border`}>
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl bg-white ${colors.text}`}>
                                    <IconComponent size={28} />
                                </div>
                                <div>
                                    <span className={`text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
                                        {framework.category}
                                    </span>
                                    <h2 className="text-2xl font-bold text-slate-900 mt-1">{framework.name}</h2>
                                    <p className="text-slate-600 mt-2">{framework.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Principles */}
                        {framework.principles && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Core Principles</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {framework.principles.map((principle, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className={`${colors.text} flex-shrink-0 mt-0.5`} size={18} />
                                            <span className="text-slate-700">{principle}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Scrum-specific sections */}
                        {framework.id === 'scrum' && (
                            <>
                                {/* Roles */}
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Scrum Roles</h3>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        {framework.roles.map((role, idx) => (
                                            <div key={idx} className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                                                <h4 className={`font-semibold ${colors.text} mb-3`}>{role.name}</h4>
                                                <ul className="space-y-2">
                                                    {role.responsibilities.map((resp, ridx) => (
                                                        <li key={ridx} className="text-sm text-slate-600 flex items-start gap-2">
                                                            <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`}></span>
                                                            {resp}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Events */}
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Scrum Events</h3>
                                    <div className="space-y-4">
                                        {framework.events.map((event, idx) => (
                                            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => toggleSection(`event-${idx}`)}
                                                    className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Calendar className={colors.text} size={20} />
                                                        <span className="font-semibold text-slate-900">{event.name}</span>
                                                        <span className={`text-xs px-2 py-1 rounded-full ${colors.badge} ${colors.text}`}>
                                                            {event.timeBox}
                                                        </span>
                                                    </div>
                                                    {expandedSection[`event-${idx}`] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                                </button>
                                                <AnimatePresence>
                                                    {expandedSection[`event-${idx}`] && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="border-t border-slate-200"
                                                        >
                                                            <div className="p-4 bg-slate-50">
                                                                <p className="text-slate-600 mb-3">{event.description}</p>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {event.keyPoints.map((point, pidx) => (
                                                                        <span key={pidx} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-600">
                                                                            {point}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Artifacts */}
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">Scrum Artifacts & Commitments</h3>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                        {framework.artifacts.map((artifact, idx) => (
                                            <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <h4 className="font-semibold text-slate-900 mb-2">{artifact.name}</h4>
                                                <p className="text-sm text-slate-600 mb-3">{artifact.description}</p>
                                                <div className={`text-xs px-2 py-1 rounded inline-block ${colors.badge} ${colors.text} font-medium`}>
                                                    Commitment: {artifact.commitment}
                                                </div>
                                                <ul className="mt-3 space-y-1">
                                                    {artifact.keyPoints.map((point, pidx) => (
                                                        <li key={pidx} className="text-xs text-slate-500">• {point}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Kanban-specific sections */}
                        {framework.id === 'kanban' && framework.practices && (
                            <div className="bg-white rounded-xl p-6 border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Kanban Practices</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {framework.practices.map((practice, idx) => (
                                        <div key={idx} className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                                            <h4 className={`font-semibold ${colors.text} mb-2`}>{practice.name}</h4>
                                            <p className="text-sm text-slate-600 mb-2">{practice.description}</p>
                                            <p className="text-xs text-slate-500">{practice.details}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                {framework.metrics && (
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-slate-900 mb-3">Key Metrics</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {framework.metrics.map((metric, idx) => (
                                                <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                                                    <p className="font-medium text-slate-900 text-sm">{metric.name}</p>
                                                    <p className="text-xs text-slate-500 mt-1">{metric.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* XP-specific sections */}
                        {framework.id === 'xp' && (
                            <>
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">XP Values</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        {framework.values.map((value, idx) => (
                                            <div key={idx} className={`p-4 rounded-lg ${colors.bg} ${colors.border} border text-center`}>
                                                <h4 className={`font-semibold ${colors.text} mb-2`}>{value.name}</h4>
                                                <p className="text-xs text-slate-600">{value.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">XP Practices</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {framework.practices.map((practice, idx) => (
                                            <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-slate-900 text-sm">{practice.name}</span>
                                                    <span className={`text-xs px-2 py-0.5 rounded ${colors.badge} ${colors.text}`}>
                                                        {practice.category}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-500 mt-1">{practice.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Lean-specific sections */}
                        {framework.id === 'lean' && framework.principles && (
                            <div className="space-y-4">
                                {framework.principles.map((principle, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                                        <button
                                            onClick={() => toggleSection(`lean-${idx}`)}
                                            className="w-full flex items-center justify-between"
                                        >
                                            <h4 className={`font-semibold ${colors.text}`}>{principle.name}</h4>
                                            {expandedSection[`lean-${idx}`] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                        </button>
                                        <p className="text-slate-600 text-sm mt-2">{principle.description}</p>
                                        <AnimatePresence>
                                            {expandedSection[`lean-${idx}`] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="mt-4"
                                                >
                                                    {principle.wasteTypes && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            {principle.wasteTypes.map((waste, widx) => (
                                                                <div key={widx} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                                                    <p className="font-medium text-red-700 text-sm">{waste.name}</p>
                                                                    <p className="text-xs text-red-600">{waste.example}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                    {principle.practices && (
                                                        <div className="flex flex-wrap gap-2">
                                                            {principle.practices.map((practice, pidx) => (
                                                                <span key={pidx} className={`text-xs px-2 py-1 rounded ${colors.badge} ${colors.text}`}>
                                                                    {practice}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* SAFe-specific sections */}
                        {framework.id === 'safe' && (
                            <>
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">SAFe Levels</h3>
                                    <div className="space-y-4">
                                        {framework.levels.map((level, idx) => (
                                            <div key={idx} className={`p-4 rounded-lg ${colors.bg} ${colors.border} border`}>
                                                <h4 className={`font-semibold ${colors.text} mb-2`}>{level.name}</h4>
                                                <p className="text-sm text-slate-600 mb-3">{level.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {level.components.map((comp, cidx) => (
                                                        <span key={cidx} className="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                                                            {comp}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-slate-200">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4">SAFe Events</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {framework.events.map((event, idx) => (
                                            <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-semibold text-slate-900">{event.name}</h4>
                                                    <span className={`text-xs px-2 py-1 rounded ${colors.badge} ${colors.text}`}>
                                                        {event.frequency}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-slate-600">{event.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );

    const renderPractices = () => (
        <div className="space-y-6">
            {agilePractices.map((category, catIdx) => {
                const IconComponent = iconMap[category.icon] || Settings;
                return (
                    <div key={catIdx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <button
                            onClick={() => toggleSection(`practice-${catIdx}`)}
                            className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-purple-100 text-purple-600">
                                    <IconComponent size={20} />
                                </div>
                                <span className="font-bold text-slate-900">{category.category}</span>
                                <span className="text-sm text-slate-500">({category.items.length} items)</span>
                            </div>
                            {expandedSection[`practice-${catIdx}`] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                        </button>
                        <AnimatePresence>
                            {expandedSection[`practice-${catIdx}`] && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="border-t border-slate-200"
                                >
                                    <div className="p-4 space-y-4">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                                                <h4 className="font-semibold text-slate-900 mb-2">{item.name}</h4>
                                                <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                                                
                                                {item.format && (
                                                    <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm text-blue-700 font-mono">
                                                        {item.format}
                                                    </div>
                                                )}
                                                
                                                {item.investCriteria && (
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                                                        {item.investCriteria.map((criteria, cidx) => (
                                                            <div key={cidx} className="p-2 bg-white border border-slate-200 rounded text-center">
                                                                <span className="font-bold text-purple-600">{criteria.letter}</span>
                                                                <span className="text-xs text-slate-600"> - {criteria.meaning}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {item.steps && (
                                                    <div className="flex flex-wrap gap-2 mt-3">
                                                        {item.steps.map((step, sidx) => (
                                                            <span key={sidx} className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
                                                                {sidx + 1}. {step}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {item.cycle && (
                                                    <div className="flex items-center gap-2 mt-3">
                                                        {item.cycle.map((step, sidx) => (
                                                            <React.Fragment key={sidx}>
                                                                <span className={`text-xs px-2 py-1 rounded ${
                                                                    step.includes('Red') ? 'bg-red-100 text-red-700' :
                                                                    step.includes('Green') ? 'bg-green-100 text-green-700' :
                                                                    'bg-blue-100 text-blue-700'
                                                                }`}>
                                                                    {step}
                                                                </span>
                                                                {sidx < item.cycle.length - 1 && <ArrowRight size={14} className="text-slate-400" />}
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                )}

                                                {item.formats && (
                                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                                        {item.formats.map((format, fidx) => (
                                                            <div key={fidx} className="p-2 bg-white border border-slate-200 rounded">
                                                                <p className="font-medium text-slate-900 text-sm">{format.name}</p>
                                                                <p className="text-xs text-slate-500">{format.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );

    const renderRoles = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agileRoles.map((role, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                            <Users size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">{role.name}</h3>
                            <span className="text-xs text-slate-500">{role.framework}</span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Responsibilities</h4>
                        <ul className="space-y-1">
                            {role.responsibilities.map((resp, ridx) => (
                                <li key={ridx} className="text-sm text-slate-600 flex items-start gap-2">
                                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                                    {resp}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, sidx) => (
                                <span key={sidx} className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {role.antiPatterns && (
                        <div>
                            <h4 className="text-sm font-semibold text-slate-700 mb-2">Anti-Patterns to Avoid</h4>
                            <div className="flex flex-wrap gap-2">
                                {role.antiPatterns.map((pattern, pidx) => (
                                    <span key={pidx} className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">
                                        {pattern}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const renderComparison = () => (
        <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{agileVsPredictive.title}</h3>
                <p className="text-slate-600 mb-6">{agileVsPredictive.description}</p>
                
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="text-left py-3 px-4 font-semibold text-slate-700">Aspect</th>
                                <th className="text-left py-3 px-4 font-semibold text-blue-600 bg-blue-50">Agile</th>
                                <th className="text-left py-3 px-4 font-semibold text-green-600 bg-green-50">Predictive</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agileVsPredictive.comparison.map((row, idx) => (
                                <tr key={idx} className="border-b border-slate-100">
                                    <td className="py-3 px-4 font-medium text-slate-900">{row.aspect}</td>
                                    <td className="py-3 px-4 text-sm text-slate-600 bg-blue-50/50">{row.agile}</td>
                                    <td className="py-3 px-4 text-sm text-slate-600 bg-green-50/50">{row.predictive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-bold text-blue-700 mb-4">When to Use Agile</h4>
                    <ul className="space-y-2">
                        {agileVsPredictive.whenToUse.agile.map((item, idx) => (
                            <li key={idx} className="text-sm text-blue-700 flex items-start gap-2">
                                <CheckCircle className="flex-shrink-0 mt-0.5" size={14} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="font-bold text-green-700 mb-4">When to Use Predictive</h4>
                    <ul className="space-y-2">
                        {agileVsPredictive.whenToUse.predictive.map((item, idx) => (
                            <li key={idx} className="text-sm text-green-700 flex items-start gap-2">
                                <CheckCircle className="flex-shrink-0 mt-0.5" size={14} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h4 className="font-bold text-purple-700 mb-4">When to Use Hybrid</h4>
                    <ul className="space-y-2">
                        {agileVsPredictive.whenToUse.hybrid.map((item, idx) => (
                            <li key={idx} className="text-sm text-purple-700 flex items-start gap-2">
                                <CheckCircle className="flex-shrink-0 mt-0.5" size={14} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

    const renderLeadership = () => (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{servantLeadership.title}</h3>
                <p className="text-slate-600">{servantLeadership.description}</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">10 Principles of Servant Leadership</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servantLeadership.principles.map((principle, idx) => (
                        <div key={idx} className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 rounded-full bg-amber-200 text-amber-700 flex items-center justify-center font-bold text-sm">
                                    {idx + 1}
                                </span>
                                <h5 className="font-semibold text-amber-800">{principle.name}</h5>
                            </div>
                            <p className="text-sm text-amber-700">{principle.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Application in Agile</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {servantLeadership.applicationInAgile.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                            <Award className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
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
                    Agile <span className="text-purple-600">Methodologies</span>
                </h1>
                <p className="text-slate-600">
                    Comprehensive guide to agile frameworks, practices, and principles for the PMP exam
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-700">
                        <strong>Exam Tip:</strong> About 50% of PMP exam questions involve agile or hybrid approaches. 
                        Understand when to use each framework and the underlying principles.
                    </p>
                </div>
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
                {activeTab === 'frameworks' && renderFrameworks()}
                {activeTab === 'practices' && renderPractices()}
                {activeTab === 'roles' && renderRoles()}
                {activeTab === 'comparison' && renderComparison()}
                {activeTab === 'leadership' && renderLeadership()}
            </div>
        </motion.div>
    );
};

export default AgileView;
