import React from 'react';

/**
 * The running head for every view: a rule, a rubricated section number,
 * a small-caps kicker, then the title. Asymmetric — the title occupies
 * eight of twelve columns, the note sits in the remaining four.
 */
const PageHeader = ({ number, kicker, title, standfirst, note }) => (
  <header className="mb-10 sm:mb-14">
    <div className="flex items-baseline gap-4 border-t-2 border-ink pt-3 mb-6">
      {number && <span className="numeral text-sm font-semibold">{number}</span>}
      {kicker && <span className="label">{kicker}</span>}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-5 items-end">
      <div className="lg:col-span-8">
        <h1 className="page-title">{title}</h1>
        {standfirst && <p className="page-standfirst mt-4">{standfirst}</p>}
      </div>
      {note && (
        <div className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-6">
          <p className="font-text text-sm text-ink-muted leading-relaxed">{note}</p>
        </div>
      )}
    </div>
  </header>
);

export default PageHeader;
