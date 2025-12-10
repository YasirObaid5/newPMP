
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  Activity, 
  Box, 
  FileText, 
  Menu, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: '/', name: 'Dashboard', icon: LayoutDashboard },
    { path: '/principles', name: '12 Principles', icon: BookOpen },
    { path: '/domains', name: 'Performance Domains', icon: Activity },
    { path: '/models-methods', name: 'Models & Methods', icon: Box },
    { path: '/artifacts', name: 'Artifacts', icon: FileText },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        className={`fixed top-0 left-0 h-full bg-slate-900/95 border-r border-slate-800 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            PMP Pro
          </h1>
          <button onClick={toggleSidebar} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-indigo-600/20 text-cyan-400 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
              onClick={() => window.innerWidth < 768 && toggleSidebar()}
            >
              <item.icon size={20} className="group-hover:scale-110 transition-transform" />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/20">
            <p className="text-xs text-indigo-300 font-semibold mb-1">STUDY PROGRESS</p>
            <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full w-[35%]"></div>
            </div>
            <p className="text-xs text-slate-400 text-right">35% Complete</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
