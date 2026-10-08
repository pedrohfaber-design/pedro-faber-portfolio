"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type SkillsMenuProps = {
  onClose: () => void;
};

type SkillCategory = {
  id: number;
  name: string;
  description: string;
  skills: string[];
};

const skillCategories: Record<"pt" | "en", SkillCategory[]> = {
  pt: [
  {
    id: 1,
    name: "DESENVOLVIMENTO",
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
    name: "BANCO DE DADOS",
    description:
      "Tecnologias e conceitos utilizados para armazenamento, consulta e gerenciamento de dados.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Projeto de Banco de Dados",
      "Modelagem de Dados",
    ],
  },
  {
    id: 3,
    name: "AUTOMAÇÃO",
    description:
      "Ferramentas e conhecimentos utilizados para automação de processos e criação de fluxos de trabalho.",
    skills: [
      "Power Automate",
      "Power Apps",
      "Python",
      "Automação de Processos",
    ],
  },
  {
    id: 4,
    name: "TI E REDES",
    description:
      "Conhecimentos relacionados a suporte, infraestrutura, redes e administração de ambientes de TI.",
    skills: [
      "Redes de Computadores",
      "Hardware",
      "Windows",
      "Suporte de TI",
      "Firewall",
      "Diagnóstico de Falhas",
    ],
  },
  {
    id: 5,
    name: "FERRAMENTAS",
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
  ],
  en: [
    { id: 1, name: "DEVELOPMENT", description: "Technologies used to develop web applications, APIs, and software systems.", skills: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Rust", "Python", "C++"] },
    { id: 2, name: "DATABASE", description: "Technologies and concepts for storing, querying, and managing data.", skills: ["PostgreSQL", "SQL", "Database Design", "Data Modeling"] },
    { id: 3, name: "AUTOMATION", description: "Tools and knowledge used to automate processes and build workflows.", skills: ["Power Automate", "Power Apps", "Python", "Process Automation"] },
    { id: 4, name: "IT & NETWORKS", description: "Knowledge of technical support, infrastructure, networking, and IT environment administration.", skills: ["Networking", "Hardware", "Windows", "IT Support", "Firewall", "Troubleshooting"] },
    { id: 5, name: "TOOLS", description: "Tools used for software development, version control, and project organization.", skills: ["Git", "GitHub", "Docker", "VS Code", "Power BI"] },
  ],
};

export function SkillsMenu({
  onClose,
}: SkillsMenuProps) {
  const { language } = useLanguage();
  const categories = skillCategories[language];
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedCategory =
    categories[selectedIndex];

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();
          setSelectedIndex((current) => current === 0 ? categories.length - 1 : current - 1);
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          setSelectedIndex((current) => current === categories.length - 1 ? 0 : current + 1);
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
  }, [onClose, categories.length]);

  return (
    <div className="absolute inset-0 z-50 overflow-hidden bg-[#07111f] p-5 text-white">

      {/* JANELA PRINCIPAL */}
      <div className="flex h-full flex-col border-4 border-white bg-[#0b1728] shadow-[6px_6px_0_#000]">

        {/* HEADER */}
        <header className="flex items-center justify-between border-b-4 border-white bg-[#101e32] px-5 py-4">

          <div>
            <p className="font-arcade text-[8px] tracking-wider text-cyan-400">
              {language === "pt" ? "PEDRO FABER // PORTFÓLIO INTERATIVO" : "PEDRO FABER // INTERACTIVE PORTFOLIO"}
            </p>

            <h1 className="mt-2 font-arcade text-[16px]">
              {language === "pt" ? "INVENTÁRIO DE HABILIDADES" : "SKILL INVENTORY"}
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            {language === "pt" ? "BANCADA // HABILIDADES" : "WORKBENCH // SKILLS"}
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
                  {language === "pt" ? "CATEGORIAS" : "CATEGORIES"}
                </p>

                <div className="mt-4 space-y-2">

                  {categories.map(
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
                    {language === "pt" ? "ITENS" : "ITEMS"}{" "}
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
                {language === "pt" ? "DESCRIÇÃO DA CATEGORIA" : "CATEGORY DESCRIPTION"}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {selectedCategory.description}
              </p>

            </div>

            {/* CONTROLES */}
            <div className="mt-4 border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] text-slate-400">
                {language === "pt" ? "[↑ ↓] CATEGORIA" : "[↑ ↓] CATEGORY"}
                &nbsp;&nbsp;&nbsp;
                {language === "pt" ? "[ESC] VOLTAR" : "[ESC] BACK"}
              </p>

            </div>

          </section>

          {/* ===================== */}
          {/* VÍDEO */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                {language === "pt" ? "CENA DA BANCADA" : "WORKBENCH SCENE"}
              </p>

              <p className="font-arcade text-[7px] text-emerald-400">
                {language === "pt" ? "● ATIVO" : "● ACTIVE"}
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
    <source
  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/skills-loop.mp4`}
  type="video/mp4"
/>
  </video>

  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      {language === "pt" ? "CENA DA BANCADA" : "WORKBENCH SCENE"}
    </p>
  </div>
</div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              {language === "pt" ? "SKILLS.DB // CARREGADO" : "SKILLS.DB // LOADED"}
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
           <p className="font-arcade text-[7px] text-slate-500">
  {"PF SYSTEM // "}
  {language === "pt" ? "INVENTÁRIO DE HABILIDADES" : "SKILLS INVENTORY"}
</p>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white bg-black px-4 py-2 font-arcade text-[8px] transition hover:bg-white hover:text-black"
          >
            {language === "pt" ? "ESC VOLTAR" : "ESC BACK"}
          </button>

        </footer>

      </div>
    </div>
  );
}
