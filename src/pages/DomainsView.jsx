
import React, { useState } from 'react';
import { performanceDomains } from '../pmpData';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, UserCheck, GitMerge, Calendar, Briefcase, 
  Package, BarChart2, AlertTriangle, CheckCircle2, 
  Sparkles, Target 
} from 'lucide-react';

const iconMap = {
  Users, UserCheck, GitMerge, Calendar, Briefcase, 
  Package, BarChart2, AlertTriangle
};

const DomainsView = () => {
  const [activeTab, setActiveTab] = useState(performanceDomains[0].id);

  const activeDomain = performanceDomains.find(d => d.id === activeTab);
  const Icon = iconMap[activeDomain.icon];

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col">
      <header className="mb-6 lg:mb-8 shrink-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-4">
          Performance <span className="text-purple-600">Domains</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
          Groups of related activities that are critical for the effective delivery of project outcomes.
        </p>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0">
        {/* Tabs - Horizontal scroll on mobile, Sidebar on large screens */}
        <div className="lg:w-80 shrink-0 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:pr-2 custom-scrollbar">
          <div className="flex lg:flex-col gap-2 pb-2 lg:pb-0 min-w-max lg:min-w-0">
            {performanceDomains.map((domain) => {
              const DomainIcon = iconMap[domain.icon];
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveTab(domain.id)}
                  className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2.5 lg:py-4 rounded-xl text-left transition-all duration-200 border whitespace-nowrap lg:whitespace-normal lg:w-full ${
                    activeTab === domain.id
                      ? 'bg-white border-purple-200 shadow-md text-purple-700'
                      : 'bg-white/60 lg:bg-transparent border-slate-200 lg:border-transparent hover:bg-white/80 lg:hover:bg-white/60 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <div className={`p-1.5 lg:p-2 rounded-lg ${activeTab === domain.id ? 'bg-purple-100 text-purple-600' : 'bg-slate-100'}`}>
                    <DomainIcon size={16} className="lg:w-[18px] lg:h-[18px]" />
                  </div>
                  <span className="font-medium text-sm lg:text-base">{domain.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white border border-slate-200 rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-purple-50 text-purple-600 shrink-0">
                  <Icon size={32} className="sm:w-10 sm:h-10" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{activeDomain.title}</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">{activeDomain.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Key Activities */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                    <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg">
                      <Sparkles size={18} />
                    </div>
                    Key Activities
                  </h3>
                  <div className="space-y-3">
                    {activeDomain.details.map((detail, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <p className="text-slate-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desired Outcomes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                    <div className="p-1.5 bg-green-100 text-green-600 rounded-lg">
                      <Target size={18} />
                    </div>
                    Desired Outcomes
                  </h3>
                  <div className="space-y-3">
                    {activeDomain.outcomes.map((outcome, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                        <p className="text-slate-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DomainsView;
