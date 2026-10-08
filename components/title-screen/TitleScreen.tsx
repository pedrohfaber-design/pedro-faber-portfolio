"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { PFCoin } from "./PFCoin";
import { ReadyScreen } from "./ReadyScreen";

type IntroState =
  | "idle"
  | "inserting"
  | "ready"
  | "entering";

export function TitleScreen() {
  const router = useRouter();
const { language } = useLanguage();
  const [introState, setIntroState] =
    useState<IntroState>("idle");

  const timersRef =
    useRef<ReturnType<typeof setTimeout>[]>([]);

  // =====================================================
  // LIMPEZA DOS TIMERS
  // =====================================================

  useEffect(() => {
  const timers = timersRef.current;

  return () => {
    timers.forEach((timer) => {
      clearTimeout(timer);
    });
  };
}, []);

  // =====================================================
  // INSERT COIN
  // =====================================================

  function handleInsertCoin() {
    // Impede clique duplicado.
    if (introState !== "idle") {
      return;
    }

    setIntroState("inserting");

    // COIN → READY
    const readyTimer = setTimeout(() => {
      setIntroState("ready");
    }, 800);

    // READY → FADE
    const enteringTimer = setTimeout(() => {
      setIntroState("entering");
    }, 2600);

    // FADE → ROOM
    const roomTimer = setTimeout(() => {
      router.push("/room");
    }, 3400);

    timersRef.current.push(
      readyTimer,
      enteringTimer,
      roomTimer
    );
  }

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#05070d] text-white">
      <LanguageSwitcher />
      {/* ================================= */}
      {/* FUNDO */}
      {/* ================================= */}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#080b18_0%,#0b1023_55%,#111827_100%)]" />

      {/* ================================= */}
      {/* ESTRELAS */}
      {/* ================================= */}

      <div className="absolute left-[12%] top-[18%] h-1 w-1 bg-white opacity-70" />

      <div className="absolute left-[24%] top-[31%] h-1 w-1 bg-cyan-200 opacity-50" />

      <div className="absolute right-[20%] top-[20%] h-1 w-1 bg-white opacity-60" />

      <div className="absolute right-[34%] top-[38%] h-1 w-1 bg-cyan-200 opacity-40" />

      {/* ================================= */}
      {/* GRID */}
      {/* ================================= */}

      <div className="absolute inset-x-0 bottom-0 h-[38%] opacity-20 [background-image:linear-gradient(rgba(34,211,238,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* ================================= */}
      {/* CONTEÚDO */}
      {/* ================================= */}

      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">

        <p className="mb-5 font-mono text-xs tracking-[0.4em] text-cyan-400">
          {language === "pt"
  ? "PORTFÓLIO INTERATIVO"
  : "INTERACTIVE PORTFOLIO"}
        </p>

        {/* ================================= */}
        {/* LOGO */}
        {/* ================================= */}

        <div className="relative mt-2">

          {/* Sombra */}
          <h1
            aria-hidden="true"
            className="font-arcade absolute left-[5px] top-[5px] whitespace-nowrap text-3xl tracking-[-0.08em] text-cyan-950 sm:text-5xl md:text-6xl"
          >
            PEDRO FABER
          </h1>

          {/* Principal */}
          <h1 className="font-arcade relative whitespace-nowrap text-3xl tracking-[-0.08em] text-white sm:text-5xl md:text-6xl">
            PEDRO{" "}
            <span className="text-cyan-400">
              FABER
            </span>
          </h1>

        </div>

        {/* ================================= */}
        {/* SUBTÍTULO */}
        {/* ================================= */}

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm">
          {language === "pt"
  ? "Desenvolvimento de Software • TI • Automação"
  : "Software Development • IT • Automation"}
        </p>

        {/* ================================= */}
        {/* INSERT COIN */}
        {/* ================================= */}

        {introState === "idle" && (
          <PFCoin
            onInsert={handleInsertCoin}
          />
        )}

        {/* ================================= */}
        {/* MOEDA ENTRANDO */}
        {/* ================================= */}

        {introState === "inserting" && (
          <PFCoin inserting />
        )}

        {/* ================================= */}
        {/* READY */}
        {/* ================================= */}

        {introState === "ready" && (
          <ReadyScreen />
        )}

        {/* ================================= */}
        {/* QUICK VIEW */}
        {/* ================================= */}

        <button
          type="button"
          className="mt-8 border-b border-transparent pb-1 font-mono text-[10px] tracking-[0.3em] text-zinc-500 transition hover:border-cyan-400 hover:text-cyan-400"
        >
          QUICK VIEW
        </button>

        {/* ================================= */}
        {/* COPYRIGHT */}
        {/* ================================= */}

        <p className="absolute bottom-8 font-mono text-[9px] tracking-[0.25em] text-zinc-700">
          © 2026 PEDRO FABER
        </p>

      </section>

      {/* ================================= */}
      {/* SCANLINES */}
      {/* ================================= */}

      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.035] [background-image:repeating-linear-gradient(to_bottom,white_0px,white_1px,transparent_1px,transparent_4px)]" />

      {/* ================================= */}
      {/* FADE PARA O QUARTO */}
      {/* ================================= */}

      {introState === "entering" && (
        <div className="fixed inset-0 z-50 animate-screen-fade bg-black" />
      )}

    </main>
  );
}