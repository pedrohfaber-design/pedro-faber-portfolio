"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type CreditsScreenProps = {
  onFinish: () => void;
};

export function CreditsScreen({
  onFinish,
}: CreditsScreenProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[99999] bg-black">

      {/* ================================= */}
      {/* VÍDEO COMPLETO */}
      {/* ================================= */}

      <div className="absolute inset-0 flex items-center justify-center">

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block max-h-full max-w-full"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          <source
            src="/videos/credits-loop.mp4"
            type="video/mp4"
          />
        </video>

      </div>

      {/* ================================= */}
      {/* CRÉDITOS */}
      {/* ================================= */}

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white">

        <p className="font-arcade text-[10px] tracking-wider text-cyan-400">
          PEDRO FABER
        </p>

        <h1 className="mt-6 font-arcade text-[34px]">
          MY JOURNEY
        </h1>

        <p className="mt-8 text-[15px]">
          Every project started with learning.
        </p>

        <button
          type="button"
          onClick={onFinish}
          className="pointer-events-auto mt-12 border border-cyan-400 bg-black/70 px-6 py-4 font-arcade text-[9px] text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
        >
          SKIP
        </button>

      </div>

    </div>,
    document.body
  );
}