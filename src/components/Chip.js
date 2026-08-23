export default function Chip({ children, className = "" }) {
  return (
    <span className={`chip font-mono ${className}`}>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full pulse-soft shrink-0"
        style={{ background: "var(--accent)" }}
      />
      {children}
    </span>
  );
}
