
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
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <header className="mb-8 shrink-0">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Performance <span className="text-purple-600">Domains</span>
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Groups of related activities that are critical for the effective delivery of project outcomes.
        </p>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row gap-8 min-h-0">
        {/* Tabs Sidebar */}
        <div className="lg:w-80 shrink-0 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
          {performanceDomains.map((domain) => {
            const DomainIcon = iconMap[domain.icon];
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(domain.id)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 border ${
                  activeTab === domain.id
                    ? 'bg-white border-purple-200 shadow-md text-purple-700'
                    : 'bg-transparent border-transparent hover:bg-white/60 text-slate-500 hover:text-slate-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${activeTab === domain.id ? 'bg-purple-100 text-purple-600' : 'bg-slate-100'}`}>
                  <DomainIcon size={18} />
                </div>
                <span className="font-medium">{domain.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 overflow-y-auto custom-scrollbar shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDomain.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-5 rounded-2xl bg-purple-50 text-purple-600 shrink-0">
                  <Icon size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{activeDomain.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed">{activeDomain.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
