export function ReadyScreen() {
  return (
    <div className="mt-14 flex min-h-[190px] flex-col items-center justify-center">
      <p className="font-arcade mb-5 text-[8px] tracking-[0.2em] text-cyan-500">
  * CLINK! *
</p>
      <p className="font-arcade text-[10px] tracking-[0.25em] text-cyan-400">
        PLAYER 1
      </p>

      <h2 className="font-arcade mt-7 animate-pulse text-2xl text-white sm:text-3xl">
        READY!
      </h2>

      <p className="font-arcade mt-8 text-[8px] tracking-[0.15em] text-zinc-500">
        LOADING WORLD...
      </p>
    </div>
  );
}