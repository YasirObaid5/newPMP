import React from 'react';

/**
 * The thin illuminated rule that sits under the masthead — a running
 * interlace of octagons and turned squares, the border a manuscript page
 * would carry between its heading and its text block.
 */
const IlluminatedBand = ({ className = '' }) => (
  <svg
    className={`block w-full ${className}`}
    height="10"
    viewBox="0 0 60 10"
    preserveAspectRatio="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <pattern id="illuminated-band" width="20" height="10" patternUnits="userSpaceOnUse">
        <g fill="none" stroke="currentColor" strokeWidth="0.9">
          {/* turned square */}
          <path d="M10 0.9 L14.1 5 L10 9.1 L5.9 5 Z" />
          {/* the interlace passing through it */}
          <path d="M0 5 L5.9 5 M14.1 5 L20 5" />
          <path d="M0 0.9 L4.1 5 L0 9.1" />
          <path d="M20 0.9 L15.9 5 L20 9.1" />
        </g>
      </pattern>
    </defs>
    <rect width="60" height="10" fill="url(#illuminated-band)" />
  </svg>
);

export default IlluminatedBand;
