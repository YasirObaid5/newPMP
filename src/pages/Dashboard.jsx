
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, BookOpen, Users, Settings, Briefcase } from 'lucide-react';

const Dashboard = () => {
  const studyCards = [
    {
      title: 'People Domain',
      subtitle: 'Leadership, team management, and stakeholder engagement',
      weight: '42%',
      progress: 65,
      color: 'red',
      icon: Users,
      path: '/principles', // Mapping Principles to "People" roughly for now
      bg: 'bg-red-50',
      text: 'text-red-600',
      bar: 'bg-red-500'
    },
    {
      title: 'Process Domain',
      subtitle: 'Technical project management and methodologies',
      weight: '50%',
      progress: 45,
      color: 'blue',
      icon: Settings,
      path: '/domains',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      bar: 'bg-blue-500'
    },
    {
      title: 'Business Environment',
      subtitle: 'Strategic alignment and organizational context',
      weight: '8%',
      progress: 30,
      color: 'green',
      icon: Briefcase,
      path: '/models-methods',
      bg: 'bg-green-50',
      text: 'text-green-600',
      bar: 'bg-green-500'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="text-center py-16 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Master PMP <span className="text-purple-600">7th Edition</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Comprehensive study guide covering all three exam domains: People (42%), Process (50%), and Business Environment (8%)
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/domains" className="btn-primary">
            <Play size={20} fill="currentColor" />
            Start Studying
          </Link>
          <Link to="/domains" className="btn-secondary">
            <BookOpen size={20} />
            View Domains
          </Link>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="mt-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Your Study Dashboard</h2>
          <p className="text-slate-500 mt-2">Track your progress across all PMP exam domains</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studyCards.map((card, index) => (
            <Link to={card.path} key={index} className="group">
              <motion.div
                whileHover={{ y: -5 }}
                className={`h-full p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 w-full h-1 ${card.bg}`}></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl ${card.bg} ${card.text}`}>
                    <card.icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${card.text}`}>{card.weight}</span>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Exam Weight</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 min-h-[40px]">
                  {card.subtitle}
                </p>

                <div className="mt-auto">
                  <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${card.bar}`} 
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{card.progress}% Complete</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
