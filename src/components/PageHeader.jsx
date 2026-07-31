import React from 'react';

import Droplets from './canvasui/Droplets';

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
    <Droplets
      className="chapter-hero-art"
      intensity={0.58}
      speed={0.42}
      scale={0.7}
      dropWidth={0.8}
      dropLength={1.02}
      refraction={0.22}
      blur={0.14}
      fallSpeed={0.5}
      wiggle={0.44}
      staticDrops={0.56}
      interactive
      interactionRadius={0.18}
      interactionStrength={0.68}
      interactionDistortion={2.1}
      tint={[0.76, 0.86, 0.94]}
      tintStrength={0.16}
    >
      <img
        src={image}
        alt={imageAlt}
        className="chapter-hero-image"
        style={{ objectPosition: imagePosition }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </Droplets>

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
