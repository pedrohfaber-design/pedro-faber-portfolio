"use client";

import { useEffect, useState } from "react";

type ExperienceMenuProps = {
  onClose: () => void;
};

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  status: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    role: "ANALISTA DE TI",
    company: "COLÉGIO DIVINO SALVADOR",
    period: "CURRENT",
    description:
      "Atuação em suporte, infraestrutura, redes, manutenção de equipamentos e administração do ambiente de tecnologia.",
    technologies: [
      "Networks",
      "Hardware",
      "Windows",
      "IT Support",
    ],
    status: "ACTIVE",
  },
  {
    id: 2,
    role: "OPERADOR LOGÍSTICO",
    company: "RENNER",
    period: "PREVIOUS",
    description:
      "Experiência profissional em ambiente operacional, organização de processos e trabalho em equipe.",
    technologies: [
      "Operations",
      "Logistics",
      "Processes",
      "Teamwork",
    ],
    status: "ARCHIVED",
  },
];

export function ExperienceMenu({
  onClose,
}: ExperienceMenuProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedExperience =
    experiences[selectedIndex];

  function previousExperience() {
    setSelectedIndex((current) => {
      if (current === 0) {
        return experiences.length - 1;
        
      }

      return current - 1;
    });
  }

  function nextExperience() {
    setSelectedIndex((current) => {
      if (
        current ===
        experiences.length - 1
      ) {
        return 0;
      }

      return current + 1;
    });
  }

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          previousExperience();
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          nextExperience();
          break;

        case "Escape":
          event.preventDefault();
          onClose();
          break;
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
        
      );
    };
  }, [onClose]);

  return (
    
    <div className="absolute inset-0 z-50 overflow-hidden bg-[#07111f] p-5 text-white">

      {/* JANELA PRINCIPAL */}
      <div className="flex h-full flex-col border-4 border-white bg-[#0b1728] shadow-[6px_6px_0_#000]">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b-4 border-white bg-[#101e32] px-5 py-4">

          <div>
            <p className="font-arcade text-[8px] tracking-wider text-cyan-400">
              PEDRO FABER // INTERACTIVE PORTFOLIO
            </p>

            <h1 className="mt-2 font-arcade text-[16px]">
              CAREER LOG
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            SERVER // EXPERIENCE
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ===================== */}
          {/* EXPERIENCE */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col border-r-4 border-white p-5">

            {/* STATUS */}
            <div className="flex items-center justify-between border-2 border-slate-600 bg-[#08101c] p-4">

              <div>
                <p className="font-arcade text-[7px] text-cyan-400">
                  CAREER DATABASE
                </p>

                <p className="mt-3 font-arcade text-[11px]">
                  EMPLOYMENT RECORDS
                </p>
              </div>

              <div className="text-right">
                <p className="font-arcade text-[7px] text-emerald-400">
                  ● SYSTEM ONLINE
                </p>

                <p className="mt-2 font-arcade text-[6px] text-slate-500">
                  RECORDS: {experiences.length}
                </p>
              </div>

            </div>

            {/* LISTA */}
            <div className="mt-5">

              <p className="font-arcade text-[8px] text-cyan-400">
                SELECT RECORD
              </p>

              <div className="mt-3 space-y-2">

                {experiences.map(
                  (experience, index) => {
                    const isSelected =
                      index === selectedIndex;

                    return (
                      <button
                        key={experience.id}
                        type="button"
                        onClick={() =>
                          setSelectedIndex(index)
                        }
                        className={`flex w-full items-center gap-3 border-2 px-4 py-3 text-left font-arcade text-[8px] transition ${
                          isSelected
                            ? "border-white bg-white text-black"
                            : "border-transparent text-white hover:border-slate-500 hover:bg-slate-800"
                        }`}
                      >
                        <span
                          className={
                            isSelected
                              ? ""
                              : "opacity-0"
                          }
                        >
                          ▶
                        </span>

                        <span>
                          LOG-
                          {String(
                            experience.id
                          ).padStart(3, "0")}{" "}
                          {experience.role}
                        </span>
                      </button>
                    );
                    
                  }
                )}

              </div>
            </div>

            {/* DETALHES */}
            <div className="mt-5 border-t-2 border-slate-600 pt-5">

              <div className="flex items-center justify-between">

                <p className="font-arcade text-[7px] text-cyan-400">
                  LOG-
                  {String(
                    selectedExperience.id
                  ).padStart(3, "0")}
                </p>

                <p
                  className={`font-arcade text-[7px] ${
                    selectedExperience.status ===
                    "ACTIVE"
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  ● {selectedExperience.status}
                </p>

              </div>

              <h2 className="mt-4 font-arcade text-[12px]">
                {selectedExperience.role}
              </h2>

              <p className="mt-3 font-arcade text-[7px] text-slate-400">
                {selectedExperience.company}
                {" // "}
                {selectedExperience.period}
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                {selectedExperience.description}
              </p>

              <div className="mt-4">

                <p className="font-arcade text-[7px] text-cyan-400">
                  KNOWLEDGE / ENVIRONMENT
                </p>

                <p className="mt-3 text-sm text-slate-300">
                  {selectedExperience.technologies.join(
                    " • "
                  )}
                </p>

              </div>

            </div>

            {/* CONTROLES */}
            <div className="mt-auto border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] text-slate-400">
                [↑ ↓] SELECT
                &nbsp;&nbsp;&nbsp;
                [ESC] BACK
              </p>

            </div>

          </section>

          {/* ===================== */}
          {/* VÍDEO */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                SERVER SCENE
              </p>

              <p className="font-arcade text-[7px] text-emerald-400">
                ● ONLINE
              </p>

            </div>

            <div className="relative h-full w-full overflow-hidden bg-black">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="h-full w-full object-cover"
  >
    <source src="/videos/experience-loop.mp4" type="video/mp4" />
  </video>

  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      CAREER SCENE
    </p>
  </div>
            </div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              CAREER.LOG // RUNNING
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // CAREER DATABASE
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white bg-black px-4 py-2 font-arcade text-[8px] transition hover:bg-white hover:text-black"
          >
            ESC BACK
          </button>

        </footer>

      </div>
    </div>
  );
}