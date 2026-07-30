import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Ornament from '../components/Ornament';

/* A different motif per view, anchored to a different corner. */
const ORNAMENTS = {
  '/':               { motif: 'khatam',  corner: 'top-right' },     // 8-fold
  '/principles':     { motif: 'twelve',  corner: 'bottom-right' },  // 12-fold
  '/domains':        { motif: 'girih',   corner: 'top-right' },     // octagon strapwork
  '/process-grid':   { motif: 'band',    corner: 'bottom-left' },   // running band
  '/models-methods': { motif: 'zellij',  corner: 'bottom-right' },  // zellij field
  '/agile':          { motif: 'rosette', corner: 'top-right' },     // 16-fold rosette
  '/exam-prep':      { motif: 'decagon', corner: 'bottom-left' },   // 10-fold decagram
};

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const ornament = ORNAMENTS[pathname] || ORNAMENTS['/'];

  return (
    <div className="min-h-screen flex flex-col">
      <Ornament key={pathname} {...ornament} />
      <Navbar />

      <main className="relative z-10 flex-1 w-full max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <Outlet />
      </main>

      {/* Colophon */}
      <footer className="relative z-10 border-t border-rule-strong mt-16">
        <div className="max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-10 py-8
                        flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
          <p className="font-display text-sm italic text-ink-muted">
            Set in Bodoni&nbsp;Moda and Archivo. Ornament after Persian girih.
          </p>
          <p className="label text-ink-faint">
            After the PMBOK<span className="align-super text-[8px]">®</span> Guide, Seventh Edition
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
