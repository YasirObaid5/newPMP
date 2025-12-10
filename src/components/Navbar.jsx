
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, LayoutDashboard, UserCircle } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { path: '/', name: 'Dashboard' },
    { path: '/domains', name: 'Domains' },
    { path: '/principles', name: 'Principles' },
    { path: '/process-grid', name: 'Process Grid' },
    { path: '/models-methods', name: 'Tools' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-xl text-slate-900">PMP Study Guide</span>
            </div>
            
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                      isActive
                        ? 'border-purple-600 text-slate-900'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://tegnum.edu.pe/wp-content/uploads/2023/09/Project-Management-Institute-A-Guide-to-the-Project-Management-Body-of-Knowledge-PMBOK-R-Guide-PMBOK%C2%AE%EF%B8%8F-Guide-Project-Management-Institute-2021.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors"
            >
              PMBOK PDF
            </a>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Study Mode
            </div>
            <button className="text-slate-400 hover:text-slate-600">
              <UserCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
