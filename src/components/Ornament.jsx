import React, { useId } from 'react';

/**
 * A faint geometric watermark, anchored to one corner and fading diagonally
 * away from it. A different motif on every page.
 *
 * The motifs are drawn from their actual constructions rather than eyeballed.
 * An n-fold khatam is the union of several concentric regular polygons, each
 * rotated by an equal share of one vertex step. That puts the outer points at
 * the polygon corners and the inner vertices where the edges cross — at
 * (apothem / cos(half a step)) from the centre.
 *
 * Deliberately no 6-fold work here: an isolated six-point star lattice reads
 * as something it isn't.
 */

const rad = (deg) => (deg * Math.PI) / 180;

/**
 * Star outline formed by overlaying `copies` regular `sides`-gons of
 * circumradius R, each rotated by an equal share of one vertex step.
 *   4 sides x 2 copies -> 8-point khatam
 *   4 sides x 3 copies -> 12-point star
 *   5 sides x 2 copies -> 10-point decagram (the Persian girih rosette)
 */
function starPoints(sides, copies, R, cx = 0, cy = 0, phase = 0) {
  const points = sides * copies;
  const step = 360 / points;
  const apothem = R * Math.cos(rad(180 / sides));
  const inner = apothem / Math.cos(rad(step / 2));

  const out = [];
  for (let i = 0; i < points; i++) {
    const a = phase + step * i;
    const b = a + step / 2;
    out.push([cx + R * Math.cos(rad(a)), cy + R * Math.sin(rad(a))]);
    out.push([cx + inner * Math.cos(rad(b)), cy + inner * Math.sin(rad(b))]);
  }
  return out;
}

const toPath = (pts) =>
  pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' ') + ' Z';

/** Regular n-gon. */
function polyPath(n, R, cx = 0, cy = 0, rotate = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = rad(rotate + (360 / n) * i);
    pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
  }
  return toPath(pts);
}

const star = (...args) => toPath(starPoints(...args));

/* -------------------------------------------------------------------------- */

const T = 120;            // pattern tile
const C = T / 2;          // tile centre
const CORNERS_OF_TILE = [[0, 0], [T, 0], [0, T], [T, T]];
const EDGES_OF_TILE = [[0, C], [T, C], [C, 0], [C, T]];

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.1 };

/** I. 8-fold khatam lattice — stars on the lattice points, a square between. */
const Khatam = () => (
  <g {...stroke}>
    <path d={star(4, 2, 42, C, C)} />
    <path d={polyPath(4, 17, C, C, 45)} />
    {CORNERS_OF_TILE.map(([x, y], i) => <path key={i} d={star(4, 2, 42, x, y)} />)}
  </g>
);

/** II. 12-fold star, from three overlapping squares. */
const Twelve = () => (
  <g {...stroke}>
    <path d={star(4, 3, 46, C, C)} />
    <path d={polyPath(12, 22, C, C)} />
    <path d={polyPath(12, 11, C, C, 15)} />
  </g>
);

/** III. Octagon-and-square strapwork — the plainest girih tiling there is. */
const Girih = () => (
  <g {...stroke}>
    <path d={polyPath(8, 40, C, C, 22.5)} />
    <path d={polyPath(8, 26, C, C, 22.5)} />
    {CORNERS_OF_TILE.map(([x, y], i) => <path key={i} d={polyPath(4, 24, x, y, 45)} />)}
  </g>
);

/** IV. A running band — squares turned on the diagonal, over an octagon. */
const Band = () => (
  <g {...stroke}>
    <path d={polyPath(4, 40, C, C, 45)} />
    <path d={polyPath(4, 40, C, C, 0)} />
    <path d={polyPath(8, 18, C, C, 22.5)} />
  </g>
);

/** V. Zellij field — 8-fold stars knitted together by crosses. */
const Zellij = () => (
  <g {...stroke}>
    <path d={star(4, 2, 34, C, C)} />
    {EDGES_OF_TILE.map(([x, y], i) => <path key={i} d={polyPath(4, 20, x, y, 45)} />)}
    {CORNERS_OF_TILE.map(([x, y], i) => <path key={i} d={star(4, 2, 34, x, y)} />)}
  </g>
);

/** VI. 16-point rosette with its inner ring of rhombi. */
const Rosette = () => (
  <g {...stroke} strokeWidth="1" transform={`translate(${C} ${C})`}>
    <path d={star(4, 4, 48)} />
    <circle r="29" />
    <path d={polyPath(16, 29, 0, 0, 11.25)} />
    <path d={polyPath(8, 14, 0, 0, 22.5)} />
  </g>
);

/** VII. 10-fold decagram — two pentagons overlaid, ringed by its decagon. */
const Decagon = () => (
  <g {...stroke}>
    <path d={star(5, 2, 44, C, C, -90)} />
    <path d={polyPath(10, 25, C, C, -90)} />
    <path d={star(5, 2, 13, C, C, -90)} />
    {CORNERS_OF_TILE.map(([x, y], i) => <path key={i} d={polyPath(10, 16, x, y, -90)} />)}
  </g>
);

const MOTIFS = {
  khatam: Khatam,
  twelve: Twelve,
  girih: Girih,
  band: Band,
  zellij: Zellij,
  rosette: Rosette,
  decagon: Decagon,
};

const CORNERS = {
  'top-right':    { top: '-6rem',    right: '-8rem', fx: '88%', fy: '12%' },
  'top-left':     { top: '-6rem',    left: '-8rem',  fx: '12%', fy: '12%' },
  'bottom-right': { bottom: '-8rem', right: '-8rem', fx: '88%', fy: '88%' },
  'bottom-left':  { bottom: '-8rem', left: '-8rem',  fx: '12%', fy: '88%' },
};

const Ornament = ({ motif = 'khatam', corner = 'top-right' }) => {
  const id = useId().replace(/:/g, '');
  const Motif = MOTIFS[motif] || Khatam;
  const { fx, fy, ...position } = CORNERS[corner] || CORNERS['top-right'];

  return (
    <svg
      className="ornament w-[26rem] h-[26rem] md:w-[46rem] md:h-[46rem]"
      style={position}
      viewBox="0 0 600 600"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id={`p-${id}`} width={T} height={T} patternUnits="userSpaceOnUse">
          <Motif />
        </pattern>
        {/* Fades diagonally away from the anchored corner. */}
        <radialGradient id={`m-${id}`} cx={fx} cy={fy} r="82%">
          <stop offset="0%" stopColor="#fff" stopOpacity="1" />
          <stop offset="45%" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={`k-${id}`}>
          <rect width="600" height="600" fill={`url(#m-${id})`} />
        </mask>
      </defs>
      <rect width="600" height="600" fill={`url(#p-${id})`} mask={`url(#k-${id})`} />
    </svg>
  );
};

export default Ornament;
