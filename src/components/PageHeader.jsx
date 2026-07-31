import React from 'react';

const PageHeader = ({
  number,
  kicker,
  title,
  standfirst,
  note,
  image,
  imageAlt,
  maxim,
  imagePosition = 'center',
}) => (
  <header className="chapter-hero mb-10 sm:mb-14">
    <img
      src={image}
      alt={imageAlt}
      className="chapter-hero-image"
      style={{ objectPosition: imagePosition }}
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />

    <div className="chapter-hero-content">
      <div>
        <div className="chapter-hero-meta">
          {number && <span className="numeral text-sm font-semibold">{number}</span>}
          {kicker && <span className="label">{kicker}</span>}
        </div>

        <h1 className="chapter-hero-title">{title}</h1>
        {standfirst && <p className="chapter-hero-standfirst">{standfirst}</p>}
      </div>

      {note && <p className="chapter-hero-note">{note}</p>}
      {maxim && <blockquote className="chapter-hero-maxim">{maxim}</blockquote>}
    </div>
  </header>
);

export default PageHeader;
