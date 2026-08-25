import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiRedis,
  SiDocker,
} from "react-icons/si";

const CENTER_X = 300;
const CENTER_Y = 210;
const RADIUS_X = 255;
const RADIUS_Y = 155;
const ICON_SIZE = 32;

const TECHS = [
  { label: "Next.js", Icon: SiNextdotjs, iconColor: "#ffffff", accent: true },
  { label: "Node.js", Icon: SiNodedotjs, iconColor: "#5fa04e", accent: false },
  { label: "Express.js", Icon: SiExpress, iconColor: "#ffffff", accent: false },
  { label: "MongoDB", Icon: SiMongodb, iconColor: "#47a248", accent: true },
  { label: "TypeScript", Icon: SiTypescript, iconColor: "#3178c6", accent: false },
  { label: "Redis", Icon: SiRedis, iconColor: "#dc382d", accent: false },
  { label: "Tailwind CSS", Icon: SiTailwindcss, iconColor: "#38bdf8", accent: false },
  { label: "Docker", Icon: SiDocker, iconColor: "#2496ed", accent: false },
  { label: "JavaScript", Icon: SiJavascript, iconColor: "#f7df1e", accent: false },
  { label: "React", Icon: SiReact, iconColor: "#61dafb", accent: false },
];

const STEP = 360 / TECHS.length;

const NODES = TECHS.map((tech, i) => {
  const angleDeg = -90 + i * STEP;
  const angleRad = (angleDeg * Math.PI) / 180;
  const cx = Math.round(CENTER_X + RADIUS_X * Math.cos(angleRad));
  const cy = Math.round(CENTER_Y + RADIUS_Y * Math.sin(angleRad));
  return { ...tech, cx, cy };
});

const PATHS = NODES.map((node) => {
  const midX = (node.cx + CENTER_X) / 2;
  const midY = (node.cy + CENTER_Y) / 2 - 30;
  return `M${node.cx},${node.cy} Q${midX},${midY} ${CENTER_X},${CENTER_Y}`;
});

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
        const dur = 3.2 + i * 0.3;
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
        const labelW = node.label.length * 7 + 24;
        const tx = node.cx > 300 ? node.cx - labelW - 14 : node.cx + 32;
        const anchor = node.cx > 300 ? "end" : "start";
        const textX = node.cx > 300 ? labelW - 7 : 7;
        const Icon = node.Icon;
        const half = ICON_SIZE / 2;
        return (
          <g key={node.label}>
            <g className="pulse-soft">
              <Icon x={node.cx - half} y={node.cy - half} size={ICON_SIZE} color={node.iconColor} />
            </g>
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
        <text
          x="300"
          y="205"
          textAnchor="middle"
          fill="#fafafa"
          fontSize="12.5"
          fontFamily="var(--font-mono)"
          fontWeight="700"
          letterSpacing="2"
        >
          MERN
        </text>
        <text x="300" y="221" textAnchor="middle" fill="#a8a29e" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1">
          full-stack
        </text>
      </g>
    </svg>
  );
}
