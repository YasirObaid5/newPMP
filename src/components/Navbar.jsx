
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, UserCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', name: 'Dashboard' },
    { path: '/domains', name: 'Domains' },
    { path: '/principles', name: 'Principles' },
    { path: '/process-grid', name: 'Process Grid' },
    { path: '/models-methods', name: 'Tools' },
    { path: '/agile', name: 'Agile' },
    { path: '/exam-prep', name: 'Exam Prep' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 mr-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                <BookOpen size={20} />
              </div>
              <span className="font-bold text-lg sm:text-xl text-slate-900">PMP Study Guide</span>
            </div>
<<<<<<< HEAD
            
            {/* Desktop Navigation */}
=======

>>>>>>> 180abd4f68bb766e7881cfc8d99b5c10541f64db
            <div className="hidden lg:ml-10 lg:flex lg:space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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

          <div className="flex items-center gap-2 lg:gap-4">
            <a
              href="https://tegnum.edu.pe/wp-content/uploads/2023/09/Project-Management-Institute-A-Guide-to-the-Project-Management-Body-of-Knowledge-PMBOK-R-Guide-PMBOK%C2%AE%EF%B8%8F-Guide-Project-Management-Institute-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
<<<<<<< HEAD
              className="hidden sm:block text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors"
            >
              PMBOK PDF
            </a>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100">
=======
              className="hidden lg:block text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors whitespace-nowrap"
            >
              PMBOK PDF
            </a>
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
>>>>>>> 180abd4f68bb766e7881cfc8d99b5c10541f64db
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">Study </span>Mode
            </div>
            <button className="hidden sm:block text-slate-400 hover:text-slate-600">
              <UserCircle size={24} />
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-600 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Navigation */}
=======
      {/* Mobile menu */}
>>>>>>> 180abd4f68bb766e7881cfc8d99b5c10541f64db
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
<<<<<<< HEAD
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
=======
                  `block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
>>>>>>> 180abd4f68bb766e7881cfc8d99b5c10541f64db
                    isActive
                      ? 'bg-purple-50 text-purple-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
<<<<<<< HEAD
            <a 
              href="https://tegnum.edu.pe/wp-content/uploads/2023/09/Project-Management-Institute-A-Guide-to-the-Project-Management-Body-of-Knowledge-PMBOK-R-Guide-PMBOK%C2%AE%EF%B8%8F-Guide-Project-Management-Institute-2021.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-purple-600"
=======
            <a
              href="https://tegnum.edu.pe/wp-content/uploads/2023/09/Project-Management-Institute-A-Guide-to-the-Project-Management-Body-of-Knowledge-PMBOK-R-Guide-PMBOK%C2%AE%EF%B8%8F-Guide-Project-Management-Institute-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-purple-600"
>>>>>>> 180abd4f68bb766e7881cfc8d99b5c10541f64db
            >
              PMBOK PDF
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
