
import React, { useState } from 'react';
import { principles } from '../pmpData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Users, MessageCircle, Target, Share2, Award, Sliders, CheckSquare, Layers, AlertTriangle, RefreshCw, TrendingUp } from 'lucide-react';

const iconMap = {
  Shield, Users, MessageCircle, Target, Share2, Award, 
  Sliders, CheckSquare, Layers, AlertTriangle, RefreshCw, TrendingUp
};

const PrinciplesView = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedPrinciple = principles.find(p => p.id === selectedId);

  return (
    <div>
      <header className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          The <span className="text-purple-600">12 Principles</span>
        </h1>
        <p className="text-slate-600 text-lg">
          Foundational mindsets and guidelines for project professionals. These principles are not prescriptive rules, but universal truths that guide behavior.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {principles.map((principle, index) => {
          const Icon = iconMap[principle.icon] || Shield;
          return (
            <motion.div
              key={principle.id}
              layoutId={principle.id}
              onClick={() => setSelectedId(principle.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-slate-200 p-6 rounded-2xl cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden"
            >
              <div className="p-3 rounded-xl bg-purple-50 w-fit mb-4 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2">{principle.description}</p>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={selectedId}
              className="bg-white w-full max-w-2xl rounded-3xl p-8 relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-purple-100 text-purple-600">
                  {(() => {
                    const Icon = iconMap[selectedPrinciple.icon] || Shield;
                    return <Icon size={32} />;
                  })()}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{selectedPrinciple.title}</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">Core Concept</h3>
                  <p className="text-xl text-slate-800 font-medium leading-relaxed">
                    {selectedPrinciple.description}
                  </p>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Detailed Explanation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedPrinciple.details}
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
