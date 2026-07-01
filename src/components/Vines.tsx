interface VinesProps {
  grow: boolean;
}

/**
 * Botanical vine frames for the left and right borders of the invitation card.
 * Hand-balanced paths to ensure absolute symmetry on both vertical flanks.
 */
export default function Vines({ grow }: VinesProps) {
  return (
    <>
      {/* LEFT VINE */}
      <div
        className={`absolute -left-6 top-0 h-full w-24 pointer-events-none origin-top z-0 ${grow ? 'animate-sway' : ''}`}
        style={{ animationDelay: '2.2s', opacity: 0.75 }}
      >
        <svg
          viewBox="0 0 96 600"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
          fill="none"
        >
          <defs>
            <linearGradient id="vineGradL" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <filter id="glow-left" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Stem */}
          <path
            className={`vine-path ${grow ? 'grow' : ''}`}
            d="M70 0 C 50 80, 80 140, 55 220 C 30 300, 75 360, 50 440 C 30 510, 65 560, 55 600"
            stroke="url(#vineGradL)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-left)"
          />

          {/* Leaves */}
          {leftLeafPositions.map((pos, i) => (
            <g
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: grow ? 1 : 0,
                transitionDelay: `${0.4 + i * 0.12}s`,
                transformOrigin: `${pos.x}px ${pos.y}px`,
              }}
              filter="url(#glow-left)"
            >
              <path
                d={pos.leaf}
                fill="#10b981"
                opacity="0.9"
                transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}
              />
              <path
                d="M0 0 Q 4 -3 8 0"
                stroke="#047857"
                strokeWidth="0.8"
                fill="none"
                transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* RIGHT VINE (Independent path structure matching left baseline perfectly) */}
      <div
        className={`absolute -right-6 top-0 h-full w-24 pointer-events-none origin-top z-0 ${grow ? 'animate-sway' : ''}`}
        style={{ animationDelay: '2.2s', opacity: 0.75 }}
      >
        <svg
          viewBox="0 0 96 600"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
          fill="none"
        >
          <defs>
            <linearGradient id="vineGradR" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            <filter id="glow-right" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Symmetrically inverted stem curve (96 - X values of Left Stem) */}
          <path
            className={`vine-path ${grow ? 'grow' : ''}`}
            d="M26 0 C 46 80, 16 140, 41 220 C 66 300, 21 360, 46 440 C 66 510, 31 560, 41 600"
            stroke="url(#vineGradR)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-right)"
          />

          {/* Symmetrically balanced right leaf sets */}
          {rightLeafPositions.map((pos, i) => (
            <g
              key={i}
              className="transition-all duration-700"
              style={{
                opacity: grow ? 1 : 0,
                transitionDelay: `${0.4 + i * 0.12}s`,
                transformOrigin: `${pos.x}px ${pos.y}px`,
              }}
              filter="url(#glow-right)"
            >
              <path
                d={pos.leaf}
                fill="#10b981"
                opacity="0.9"
                transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}
              />
              <path
                d="M0 0 Q -4 -3 -8 0"
                stroke="#047857"
                strokeWidth="0.8"
                fill="none"
                transform={`translate(${pos.x}, ${pos.y}) rotate(${pos.rot})`}
              />
            </g>
          ))}
        </svg>
      </div>
    </>
  );
}

/* Explicit data arrays map coordinates directly to clean coordinates */
const leftLeafPositions = [
  { x: 55, y: 90, rot: -35, leaf: 'M0 0 C -8 -4, -16 -2, -18 6 C -14 10, -6 10, 0 0 Z' },
  { x: 62, y: 170, rot: 40, leaf: 'M0 0 C 8 -4, 16 -2, 18 6 C 14 10, 6 10, 0 0 Z' },
  { x: 48, y: 250, rot: -25, leaf: 'M0 0 C -9 -5, -18 -3, -20 7 C -15 11, -7 11, 0 0 Z' },
  { x: 60, y: 330, rot: 45, leaf: 'M0 0 C 9 -5, 18 -3, 20 7 C 15 11, 7 11, 0 0 Z' },
  { x: 52, y: 410, rot: -30, leaf: 'M0 0 C -8 -4, -16 -2, -18 6 C -14 10, -6 10, 0 0 Z' },
  { x: 58, y: 490, rot: 35, leaf: 'M0 0 C 8 -4, 16 -2, 18 6 C 14 10, 6 10, 0 0 Z' },
  { x: 55, y: 560, rot: -40, leaf: 'M0 0 C -7 -3, -14 -2, -16 5 C -12 9, -5 9, 0 0 Z' },
];

const rightLeafPositions = [
  { x: 41, y: 90, rot: 35, leaf: 'M0 0 C 8 -4, 16 -2, 18 6 C 14 10, 6 10, 0 0 Z' },
  { x: 34, y: 170, rot: -40, leaf: 'M0 0 C -8 -4, -16 -2, -18 6 C -14 10, -6 10, 0 0 Z' },
  { x: 48, y: 250, rot: 25, leaf: 'M0 0 C 9 -5, 18 -3, 20 7 C 15 11, 7 11, 0 0 Z' },
  { x: 36, y: 330, rot: -45, leaf: 'M0 0 C -9 -5, -18 -3, -20 7 C -15 11, -7 11, 0 0 Z' },
  { x: 44, y: 410, rot: 30, leaf: 'M0 0 C 8 -4, 16 -2, 18 6 C 14 10, 6 10, 0 0 Z' },
  { x: 38, y: 490, rot: -35, leaf: 'M0 0 C -8 -4, -16 -2, -18 6 C -14 10, -6 10, 0 0 Z' },
  { x: 41, y: 560, rot: 40, leaf: 'M0 0 C 7 -3, 14 -2, 16 5 C 12 9, 5 9, 0 0 Z' },
];