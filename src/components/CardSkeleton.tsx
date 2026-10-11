function CardSkeleton() {
  return (
    <div className="relative group w-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-2xl overflow-hidden flex flex-col justify-between animate-pulse">
      {/* Mock Browser Header */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800" />
        <div className="mx-auto w-32 h-3.5 rounded bg-zinc-200 dark:bg-zinc-800/60" />
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        {/* Preview image skeleton */}
        <div className="w-full h-44 sm:h-48 rounded-xl bg-zinc-100 dark:bg-zinc-800/50" />

        {/* Title & description skeleton */}
        <div className="space-y-2">
          <div className="w-3/5 h-5 rounded bg-zinc-200 dark:bg-zinc-800/80" />
          <div className="w-full h-3.5 rounded bg-zinc-100 dark:bg-zinc-800/40" />
          <div className="w-4/5 h-3.5 rounded bg-zinc-100 dark:bg-zinc-800/40" />
        </div>

        {/* Tech tags skeleton */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="w-14 h-6 rounded bg-zinc-100 dark:bg-zinc-800/50" />
          <div className="w-16 h-6 rounded bg-zinc-100 dark:bg-zinc-800/50" />
          <div className="w-12 h-6 rounded bg-zinc-100 dark:bg-zinc-800/50" />
          <div className="w-14 h-6 rounded bg-zinc-100 dark:bg-zinc-800/50" />
        </div>

        {/* Links skeleton */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
          <div className="flex gap-2">
            <div className="w-20 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800/60" />
            <div className="w-20 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800/60" />
          </div>
          <div className="w-24 h-3.5 rounded bg-zinc-100 dark:bg-zinc-800/40" />
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;

