
import React, { useState } from 'react';
import { models, methods, artifacts } from '../pmpData';
import { Search, Box, PenTool, FileText, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ModelsMethodsView = () => {
  const [activeTab, setActiveTab] = useState('models');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const tabs = [
    { id: 'models', label: 'Models', icon: Box },
    { id: 'methods', label: 'Methods', icon: PenTool },
    { id: 'artifacts', label: 'Artifacts', icon: FileText },
  ];

  const getData = () => {
    switch (activeTab) {
      case 'models': return models;
      case 'methods': return methods;
      case 'artifacts': return artifacts;
      default: return [];
    }
  };

  const filteredData = getData().map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
          Tools & <span className="text-purple-600">Artifacts</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          A comprehensive library of models, methods, and artifacts to tailor your project approach.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex bg-slate-100 p-1 rounded-lg w-full overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 flex-1 min-w-0 ${
                activeTab === tab.id
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <tab.icon size={14} className="sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Content Grid */}
      <div className="space-y-6 sm:space-y-8">
        {filteredData.map((category, idx) => (
          <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
            <h3 className="flex items-center gap-2 text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {category.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-white p-4 sm:p-5 rounded-lg sm:rounded-xl border border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400">
                    <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 mb-1.5 sm:mb-2 group-hover:text-purple-700 transition-colors pr-6">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <Search className="text-slate-400" size={24} />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No results found</h3>
            <p className="text-slate-500">Try adjusting your search query</p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-xl sm:rounded-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="p-4 sm:p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50 shrink-0">
                <div className="pr-8">
                  <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">
                    {activeTab.slice(0, -1)} Detail
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{selectedItem.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors absolute top-4 right-4 sm:static"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">Description</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {selectedItem.details && (
                  <div className="bg-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-5 border border-purple-100">
                    <h3 className="text-sm font-semibold text-purple-900 mb-2 flex items-center gap-2">
                      <Box size={16} />
                      Key Details & Application
                    </h3>
                    <p className="text-purple-800/80 text-xs sm:text-sm leading-relaxed">
                      {selectedItem.details}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModelsMethodsView;
