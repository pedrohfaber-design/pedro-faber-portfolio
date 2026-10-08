import { CoinSlot } from "./CoinSlot";

type PFCoinProps = {
  onInsert?: () => void;
  inserting?: boolean;
};

export function PFCoin({
  onInsert,
  inserting = false,
}: PFCoinProps) {

  function handleClick() {
    if (inserting) {
      return;
    }

    onInsert?.();
  }

  return (
    <div className="mt-14 flex min-h-[190px] flex-col items-center">

      <button
        type="button"
        aria-label="Insert coin to start"
        onClick={handleClick}
        disabled={inserting}
        className={`group flex flex-col items-center ${
          inserting
            ? "pointer-events-none"
            : "cursor-pointer"
        }`}
      >

        {/* ================================= */}
        {/* MOEDA */}
        {/* ================================= */}

        <div
          className={`relative h-28 w-28 sm:h-32 sm:w-32 ${
            inserting
              ? "animate-coin-insert"
              : ""
          }`}
        >

          {/* Glow */}
          <div className="absolute inset-3 rounded-full bg-cyan-400/20 blur-xl transition-all duration-300 group-hover:bg-cyan-400/30" />

          {/* Sombra */}
          <div className="absolute left-[8px] top-[8px] h-full w-full rounded-full bg-cyan-950" />

          {/* Corpo */}
          <div
            className="
              relative
              flex
              h-full
              w-full
              items-center
              justify-center
              rounded-full
              border-[6px]
              border-cyan-200
              bg-cyan-500
              shadow-[inset_0_0_0_6px_#155e75,inset_0_0_0_10px_#22d3ee,0_0_20px_rgba(34,211,238,0.25)]
              transition-transform
              duration-200
              group-hover:-translate-y-1
            "
          >

            {/* Centro */}
            <div className="flex h-[68%] w-[68%] items-center justify-center rounded-full border-4 border-cyan-800 bg-[#07111d]">

              <span className="font-arcade translate-x-[1px] text-xl text-cyan-200 sm:text-2xl">
                PF
              </span>

            </div>

            {/* Reflexos */}
            <span className="absolute left-[20%] top-[13%] h-2 w-4 bg-white/80" />

            <span className="absolute left-[13%] top-[22%] h-4 w-2 bg-cyan-100/80" />

            {/* Sombras */}
            <span className="absolute bottom-[12%] right-[20%] h-2 w-4 bg-cyan-800" />

            <span className="absolute bottom-[20%] right-[12%] h-4 w-2 bg-cyan-900" />

          </div>
        </div>

        {/* ================================= */}
        {/* INSERT COIN */}
        {/* ================================= */}

        {!inserting && (
          <span className="font-arcade mt-8 animate-pulse text-[9px] tracking-[0.18em] text-white sm:text-[10px]">
            INSERT COIN TO START
          </span>
        )}

      </button>

      {/* ================================= */}
      {/* SLOT */}
      {/* ================================= */}

      {inserting && (
        <CoinSlot />
      )}

    </div>
  );
}