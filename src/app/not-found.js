import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg fade-radial opacity-50 pointer-events-none" />
      <div className="relative max-w-md">
        <p className="chip font-mono mb-6">404 · not found</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl uppercase tracking-tight text-ink">
          Page missing
        </h1>
        <p className="mt-4 text-muted-fg">This route doesn&apos;t exist. Head back to the portfolio.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold btn-primary transition"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
