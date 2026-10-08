export function CoinSlot() {
  return (
    <div className="relative mt-5 flex flex-col items-center">
      {/* Corpo */}
      <div className="relative flex h-10 w-24 items-center justify-center border-4 border-cyan-950 bg-[#101827] shadow-[4px_4px_0_#083344]">
        {/* Slot */}
        <div className="h-2 w-14 bg-[#020617] shadow-[inset_0_2px_0_#164e63]" />

        {/* Luz */}
        <div className="absolute right-2 top-2 h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
      </div>

      <span className="font-arcade mt-3 text-[6px] tracking-[0.15em] text-cyan-900">
        PF SYSTEM
      </span>
    </div>
  );
}