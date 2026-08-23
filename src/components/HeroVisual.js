const NODES = [
  { cx: 80, cy: 70, label: "React", accent: false },
  { cx: 360, cy: 50, label: "Next.js", accent: true },
  { cx: 540, cy: 130, label: "Node.js", accent: false },
  { cx: 520, cy: 320, label: "MongoDB", accent: true },
  { cx: 300, cy: 380, label: "Redis", accent: false },
  { cx: 70, cy: 300, label: "Docker", accent: false },
];

const PATHS = [
  "M80,70 Q190,110 300,210",
  "M360,50 Q330,100 300,210",
  "M540,130 Q420,140 300,210",
  "M520,320 Q410,235 300,210",
  "M300,380 Q300,265 300,210",
  "M70,300 Q185,225 300,210",
];

export default function HeroVisual() {
  return (
    <svg viewBox="0 0 600 440" className="w-full h-auto" role="img" aria-hidden>
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#262626" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#262626" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="orbit-slow" style={{ transformOrigin: "300px 210px" }}>
        <circle cx="300" cy="210" r="170" fill="none" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 6" />
      </g>
      <g className="orbit-fast" style={{ transformOrigin: "300px 210px" }}>
        <circle cx="300" cy="210" r="120" fill="none" stroke="rgba(255,255,255,0.18)" strokeDasharray="1 7" />
      </g>
      <circle cx="300" cy="210" r="120" fill="url(#hub-glow)" />

      {PATHS.map((d, i) => {
        const accent = NODES[i]?.accent;
        const stroke = accent ? "#fbbf24" : "#e5e5e5";
        const dur = 3.2 + i * 0.4;
        return (
          <g key={d}>
            <path d={d} stroke="url(#line-grad)" strokeWidth="1.2" fill="none" opacity="0.7" />
            <path
              d={d}
              stroke={stroke}
              strokeWidth="1.4"
              fill="none"
              className="dash-flow"
              style={{ animationDuration: `${dur}s`, opacity: 0.85 }}
            />
            <circle r="3" fill={stroke} filter="url(#soft-glow)">
              <animateMotion dur={`${dur + 0.2}s`} repeatCount="indefinite" path={d} />
            </circle>
          </g>
        );
      })}

      {NODES.map((node) => {
        const stroke = node.accent ? "#fbbf24" : "#e5e5e5";
        const fill = node.accent ? "#fbbf24" : "#e5e5e5";
        const labelW = node.label.length * 7 + 24;
        const tx = node.cx > 300 ? node.cx - labelW - 8 : node.cx + 22;
        const anchor = node.cx > 300 ? "end" : "start";
        const textX = node.cx > 300 ? labelW - 7 : 7;
        return (
          <g key={node.label}>
            <circle cx={node.cx} cy={node.cy} r="18" fill="#141414" stroke={stroke} strokeWidth="1.6" />
            <circle cx={node.cx} cy={node.cy} r="5" fill={fill} className="pulse-soft" />
            <g transform={`translate(${tx}, ${node.cy + 4})`}>
              <rect x="0" y="-12" rx="6" ry="6" width={labelW} height="22" fill="#141414" stroke="rgba(255,255,255,0.15)" />
              <text x={textX} y="3" textAnchor={anchor} fill="#d4d4d8" fontSize="10.5" fontFamily="var(--font-mono)">
                {node.label}
              </text>
            </g>
          </g>
        );
      })}

      <g>
        <circle cx="300" cy="210" r="40" fill="#141414" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1.8" />
        <circle cx="300" cy="210" r="40" fill="none" stroke="#fbbf24" strokeOpacity="0.6">
          <animate attributeName="r" values="40;52;40" dur="3.4s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <text x="300" y="206" textAnchor="middle" fill="#fafafa" fontSize="13" fontFamily="var(--font-display)" fontWeight="700">
          MERN
        </text>
        <text x="300" y="221" textAnchor="middle" fill="#a8a29e" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1">
          full-stack
        </text>
      </g>
    </svg>
  );
}
