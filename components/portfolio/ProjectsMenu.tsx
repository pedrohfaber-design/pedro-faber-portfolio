"use client";

import { useEffect, useState } from "react";

type ProjectsMenuProps = {
  onClose: () => void;
};

type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "AESYNTRA",
    description:
      "Plataforma de tecnologia voltada para Automation, Cybersecurity e Secure Automation.",
    technologies: [
      "Rust",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
    ],
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "FABER TECH",
    description:
      "Projeto de tecnologia e desenvolvimento de soluções digitais.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "POKÉDEX",
    description:
      "Aplicação web desenvolvida para consulta e visualização de Pokémon.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "PokéAPI",
    ],
    status: "COMPLETE",
  },
];

export function ProjectsMenu({
  onClose,
}: ProjectsMenuProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedProject =
    projects[selectedIndex];

  function previousProject() {
    setSelectedIndex((current) => {
      if (current === 0) {
        return projects.length - 1;
      }

      return current - 1;
    });
  }

  function nextProject() {
    setSelectedIndex((current) => {
      if (current === projects.length - 1) {
        return 0;
      }

      return current + 1;
    });
  }

  function openProject() {
    console.log(
      `Abrindo projeto: ${selectedProject.name}`
    );

    // Depois vamos abrir a tela detalhada
    // do projeto aqui.
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
        previousProject();
        break;

      case "ArrowDown":
      case "s":
      case "S":
        event.preventDefault();
        nextProject();
        break;

      case "Enter":
      case "e":
      case "E":
        event.preventDefault();

        console.log(
          `Abrindo projeto: ${selectedProject.name}`
        );

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
}, [onClose, selectedProject]);

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
              PROJECT DATABASE
            </h1>
          </div>

          <div className="font-arcade text-[8px] text-slate-400">
            COMPUTER //{" "}
            {String(
              selectedProject.id
            ).padStart(2, "0")}
          </div>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ============================ */}
          {/* CONTEÚDO */}
          {/* ============================ */}

          <section className="flex min-h-0 flex-col border-r-4 border-white p-5">

            <div>
              <p className="font-arcade text-[9px] text-cyan-400">
                SELECT PROJECT
              </p>

              <div className="mt-4 space-y-2">

                {projects.map(
                  (project, index) => {
                    const isSelected =
                      index ===
                      selectedIndex;

                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() =>
                          setSelectedIndex(
                            index
                          )
                        }
                        onDoubleClick={
                          openProject
                        }
                        className={`flex w-full items-center gap-3 border-2 px-4 py-3 text-left font-arcade text-[9px] transition ${
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
                          {String(
                            project.id
                          ).padStart(
                            3,
                            "0"
                          )}{" "}
                          {project.name}
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

                <p className="font-arcade text-[8px] text-cyan-400">
                  PROJECT{" "}
                  {String(
                    selectedProject.id
                  ).padStart(3, "0")}
                </p>

                <p className="font-arcade text-[7px] text-emerald-400">
                  ●{" "}
                  {
                    selectedProject.status
                  }
                </p>

              </div>

              <h2 className="mt-4 font-arcade text-[14px]">
                {selectedProject.name}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                {
                  selectedProject.description
                }
              </p>

              <div className="mt-5">

                <p className="font-arcade text-[8px] text-cyan-400">
                  TECHNOLOGIES
                </p>

                <p className="mt-3 text-sm text-slate-300">
                  {selectedProject.technologies.join(
                    " • "
                  )}
                </p>

              </div>

            </div>

            {/* CONTROLES */}
            <div className="mt-auto border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] leading-5 text-slate-400">
                [↑ ↓] SELECT
                &nbsp;&nbsp;&nbsp;
                [E] OPEN
                &nbsp;&nbsp;&nbsp;
                [ESC] BACK
              </p>

            </div>

          </section>

          {/* ============================ */}
          {/* VÍDEO */}
          {/* ============================ */}

          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                LIVE SCENE
              </p>

              <p className="font-arcade text-[7px] text-slate-500">
                LOOP // ON
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
    <source src="/videos/projects-loop.mp4" type="video/mp4" />
  </video>

  {/* leve acabamento sobre o vídeo */}
  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  {/* identificação */}
  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      PROJECT SCENE
    </p>
  </div>
</div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              PEDRO.EXE // CODING
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // PROJECT DATABASE
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