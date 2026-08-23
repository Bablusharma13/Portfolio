const ITEMS = [
  { method: "React", path: "components/ui" },
  { method: "Next.js", path: "app/router" },
  { method: "Node", path: "api/rest" },
  { method: "MongoDB", path: "db/collections" },
  { method: "Redis", path: "cache/sessions" },
  { method: "TypeScript", path: "src/types" },
  { method: "Tailwind", path: "styles/theme" },
  { method: "Express", path: "middleware/auth" },
  { method: "Docker", path: "deploy/containers" },
  { method: "Elasticsearch", path: "search/index" },
];

function Track() {
  return (
    <span className="inline-flex items-center gap-10">
      {ITEMS.map((item) => (
        <span key={item.path} className="inline-flex items-center gap-3">
          <span className="text-ink font-semibold">{item.method}</span>
          <span className="text-muted-2">{item.path}</span>
          <span className="text-faint">/</span>
        </span>
      ))}
    </span>
  );
}

export default function TechMarquee() {
  return (
    <div className="relative mt-16 sm:mt-24 border-y border-line bg-marquee overflow-hidden">
      <div className="py-4">
        <div className="marquee-track text-[12px] font-mono text-muted-2">
          <Track />
          <Track />
        </div>
      </div>
    </div>
  );
}
