"use client";

import { useEffect, useState } from "react";

type SkillsMenuProps = {
  onClose: () => void;
};

type SkillCategory = {
  id: number;
  name: string;
  description: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "DEVELOPMENT",
    description:
      "Tecnologias utilizadas no desenvolvimento de aplicações web, APIs e sistemas.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Rust",
      "Python",
      "C++",
    ],
  },
  {
    id: 2,
    name: "DATABASE",
    description:
      "Tecnologias e conceitos utilizados para armazenamento, consulta e gerenciamento de dados.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Data Modeling",
    ],
  },
  {
    id: 3,
    name: "AUTOMATION",
    description:
      "Ferramentas e conhecimentos utilizados para automação de processos e criação de fluxos de trabalho.",
    skills: [
      "Power Automate",
      "Power Apps",
      "Python",
      "Process Automation",
    ],
  },
  {
    id: 4,
    name: "IT & NETWORKS",
    description:
      "Conhecimentos relacionados a suporte, infraestrutura, redes e administração de ambientes de TI.",
    skills: [
      "Networking",
      "Hardware",
      "Windows",
      "IT Support",
      "Firewall",
      "Troubleshooting",
    ],
  },
  {
    id: 5,
    name: "TOOLS",
    description:
      "Ferramentas utilizadas no desenvolvimento, versionamento e organização de projetos.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Power BI",
    ],
  },
];

export function SkillsMenu({
  onClose,
}: SkillsMenuProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedCategory =
    skillCategories[selectedIndex];

  function previousCategory() {
    setSelectedIndex((current) => {
      if (current === 0) {
        return skillCategories.length - 1;
      }

      return current - 1;
    });
  }

  function nextCategory() {
    setSelectedIndex((current) => {
      if (
        current ===
        skillCategories.length - 1
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
          previousCategory();
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          nextCategory();
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
              SKILL INVENTORY
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            WORKBENCH // SKILLS
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ===================== */}
          {/* INVENTÁRIO */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col border-r-4 border-white p-5">

            <div className="flex min-h-0 flex-1 gap-5">

              {/* CATEGORIAS */}
              <div className="w-[42%] border-2 border-slate-600 bg-[#08101c] p-3">

                <p className="font-arcade text-[8px] text-cyan-400">
                  CATEGORIES
                </p>

                <div className="mt-4 space-y-2">

                  {skillCategories.map(
                    (category, index) => {
                      const isSelected =
                        index === selectedIndex;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() =>
                            setSelectedIndex(
                              index
                            )
                          }
                          className={`flex w-full items-center gap-2 border-2 px-3 py-3 text-left font-arcade text-[7px] transition ${
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

                          {category.name}
                        </button>
                      );
                    }
                  )}

                </div>

              </div>

              {/* ITENS */}
              <div className="flex-1 border-2 border-slate-600 bg-[#08101c] p-4">

                <div className="flex items-center justify-between">

                  <p className="font-arcade text-[8px] text-cyan-400">
                    {selectedCategory.name}
                  </p>

                  <p className="font-arcade text-[6px] text-slate-500">
                    ITEMS{" "}
                    {String(
                      selectedCategory.skills.length
                    ).padStart(2, "0")}
                  </p>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">

                  {selectedCategory.skills.map(
                    (skill, index) => (
                      <div
                        key={skill}
                        className="border-2 border-slate-700 bg-slate-900 px-3 py-3"
                      >
                        <p className="font-arcade text-[7px] leading-4 text-white">
                          <span className="text-cyan-400">
                            {String(
                              index + 1
                            ).padStart(2, "0")}
                            .
                          </span>{" "}
                          {skill}
                        </p>
                      </div>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* DESCRIÇÃO */}
            <div className="mt-4 border-2 border-slate-600 bg-[#08101c] p-4">

              <p className="font-arcade text-[7px] text-cyan-400">
                ITEM DESCRIPTION
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {selectedCategory.description}
              </p>

            </div>

            {/* CONTROLES */}
            <div className="mt-4 border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] text-slate-400">
                [↑ ↓] CATEGORY
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
                WORKBENCH SCENE
              </p>

              <p className="font-arcade text-[7px] text-emerald-400">
                ● ACTIVE
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
    <source src="/videos/skills-loop.mp4" type="video/mp4" />
  </video>

  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      WORKBENCH SCENE
    </p>
  </div>
</div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              SKILLS.DB // LOADED
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // SKILL INVENTORY
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