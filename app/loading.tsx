export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f5f5]/70 dark:bg-[#0d1117]/70">
      <div className="relative font-bold leading-none rounded-full uppercase px-4 py-3 overflow-hidden border border-theme bg-[var(--bg-color)]">
        <small className="relative z-10">Loading</small>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-300/70 dark:via-slate-700/70 to-transparent w-full h-full animate-shine" />
      </div>
    </div>
  );
}

