"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type CreditsScreenProps = {
  onFinish: () => void;
};

type CreditsStage = "journey" | "contact";

export function CreditsScreen({
  onFinish,
}: CreditsScreenProps) {
  const { language } = useLanguage();
  const [stage, setStage] =
    useState<CreditsStage>("journey");

  useEffect(() => {

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const contactTimer = window.setTimeout(() => {
      setStage("contact");
    }, 5500);

    return () => {
      window.clearTimeout(contactTimer);
      document.body.style.overflow =
        previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-black text-white">

      {/* VÍDEO DE FUNDO — SEM CORTES */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block h-full w-full"
          style={{ objectFit: "contain" }}
        >
          <source
  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/credits-loop.mp4`}
  type="video/mp4"
/>
        </video>
      </div>

      {/* GRADIENTE CINEMATOGRÁFICO */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/65" />

      {/* ETAPA 1 — {language === "pt" ? "MINHA JORNADA" : "MY JOURNEY"} */}
      <div
        className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ${
          stage === "journey"
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0"
        }`}
        aria-hidden={stage !== "journey"}
      >

        {/* IDENTIFICAÇÃO */}
        <div className="border-b border-cyan-400/50 pb-4">
          <p className="font-arcade text-[8px] tracking-[0.2em] text-cyan-300 sm:text-[10px]">
            PEDRO FABER
          </p>
        </div>

        {/* TÍTULO */}
        <h1 className="mt-7 font-arcade text-[clamp(22px,5vw,48px)] leading-relaxed text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          {language === "pt" ? "MINHA JORNADA" : "MY JOURNEY"}
        </h1>

        {/* FRASE PRINCIPAL */}
        <p className="mt-6 font-mono text-base font-medium tracking-wide text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] sm:text-lg">
          {language === "pt" ? "Da curiosidade à criação." : "From curiosity to creation."}
        </p>

        {/* FRASE SECUNDÁRIA */}
        <p className="mt-3 font-mono text-sm text-zinc-200 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
          {language === "pt" ? "E este é apenas o começo." : "And this is just the beginning."}
        </p>

        {/* INDICADOR DO PRÓXIMO CAPÍTULO */}
        <div className="mt-10 flex flex-col items-center gap-3">

          <div className="h-px w-16 bg-cyan-400/60" />

          <p className="font-arcade text-[7px] tracking-wider text-cyan-300 drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)] sm:text-[8px]">
            {language === "pt" ? "PRÓXIMO CAPÍTULO: VAMOS CONVERSAR" : "NEXT CHAPTER: LET’S CONNECT"}
          </p>

          <span className="animate-bounce font-mono text-xl text-cyan-300">
            ↓
          </span>

        </div>

      </div>

      {/* ETAPA 2 — CONTATO */}
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-y-auto px-5 py-8 transition-all duration-1000 ${
          stage === "contact"
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-8 opacity-0"
        }`}
        aria-hidden={stage !== "contact"}
      >
        <div className="w-full max-w-xl border border-cyan-500/40 bg-[#08111f]/90 p-6 shadow-[0_0_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-10">

          <p className="font-mono text-[10px] tracking-[0.35em] text-cyan-400">
            07 / {language === "pt" ? "CAPÍTULO FINAL" : "FINAL CHAPTER"}
          </p>

          <h2 className="mt-5 font-arcade text-[clamp(22px,5vw,38px)]">
            {language === "pt" ? "CONTATO" : "CONTACT"}
          </h2>

          <p className="mt-5 font-mono text-sm leading-7 text-zinc-300">
            {language === "pt" ? "A jornada não precisa terminar aqui. Vamos construir algo juntos?" : "The journey doesn’t have to end here. Shall we build something together?"}
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm">

            {/* E-MAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pedrohfaber%40gmail.com&su=Contato%20pelo%20Portf%C3%B3lio%20-%20Pedro%20Faber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400 hover:bg-cyan-400/10"
              tabIndex={stage === "contact" ? 0 : -1}
            >
              <span>E-MAIL</span>
              <span className="text-cyan-400">↗</span>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/pedrohfaber-design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400 hover:bg-cyan-400/10"
              tabIndex={stage === "contact" ? 0 : -1}
            >
              <span>GITHUB</span>
              <span className="text-cyan-400">↗</span>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/pedrohenriquefaber"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400 hover:bg-cyan-400/10"
              tabIndex={stage === "contact" ? 0 : -1}
            >
              <span>LINKEDIN</span>
              <span className="text-cyan-400">↗</span>
            </a>

            {/* CURRÍCULO */}
            <a
               href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Pedro Henrique Faber.pdf`}
  download
              className="flex items-center justify-between bg-cyan-400 px-4 py-4 font-bold text-black transition hover:bg-cyan-300"
              tabIndex={stage === "contact" ? 0 : -1}
            >
              <span>↓ {language === "pt" ? "BAIXAR CURRÍCULO.PDF" : "DOWNLOAD RESUME.PDF"}</span>
              <span>↗</span>
            </a>

          </div>

          {/* VOLTAR AO QUARTO */}
          <button
            type="button"
            onClick={onFinish}
            className="mt-8 w-full border border-cyan-400/50 px-5 py-4 font-arcade text-[9px] text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            tabIndex={stage === "contact" ? 0 : -1}
          >
            ↻ {language === "pt" ? "VOLTAR AO QUARTO" : "BACK TO ROOM"}
          </button>

          <p className="mt-6 text-center font-mono text-[10px] tracking-widest text-zinc-500">
            © 2026 PEDRO FABER
          </p>

        </div>
      </div>

    </div>,
    document.body
  );
}
