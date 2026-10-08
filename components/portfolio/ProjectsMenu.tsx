"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type ProjectsMenuProps = {
  onClose: () => void;
};

type Project = {
  id: number;
  name: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  status: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "AESYNTRA",
    description:
      "A Aesyntra é uma plataforma de tecnologia em desenvolvimento, criada com foco em Automation, Cybersecurity e Secure Automation. A proposta é explorar a integração entre automação de processos, desenvolvimento de software e práticas de segurança da informação, buscando soluções que sejam eficientes, confiáveis e seguras desde sua concepção. O projeto também representa um espaço de aprofundamento técnico em arquitetura de sistemas, desenvolvimento de APIs, organização de serviços e construção de aplicações modernas. Mais do que automatizar tarefas, a visão da Aesyntra é aproximar produtividade e segurança, considerando a proteção de dados, a confiabilidade dos processos e a evolução contínua das soluções desenvolvidas.",
    descriptionEn: "Aesyntra is a technology platform under development focused on Automation, Cybersecurity, and Secure Automation. Its goal is to explore the integration of process automation, software development, and information security practices to create solutions that are efficient, reliable, and secure by design. The project also provides an opportunity to deepen technical knowledge in system architecture, API development, service organization, and modern application development. Beyond automating tasks, Aesyntra aims to bring productivity and security together, with an emphasis on data protection, process reliability, and the continuous improvement of its solutions.",
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
      "A Faber Tech é um projeto voltado à prestação de serviços de tecnologia e à criação de soluções digitais para diferentes necessidades. Sua atuação envolve manutenção e suporte de computadores, diagnóstico de problemas, melhorias de equipamentos e desenvolvimento de websites. O projeto busca oferecer soluções práticas e acessíveis, combinando conhecimento técnico com atenção às necessidades de cada cliente. No desenvolvimento da presença digital da Faber Tech, o foco está na construção de uma interface moderna, responsiva e organizada, capaz de apresentar os serviços de maneira clara e profissional. A iniciativa também representa a aplicação de conhecimentos em desenvolvimento web, experiência do usuário e organização de projetos reais.",
    descriptionEn: "Faber Tech is a project dedicated to providing technology services and digital solutions for different needs. Its work includes computer maintenance and technical support, troubleshooting, hardware upgrades, and website development. The project aims to deliver practical and accessible solutions by combining technical expertise with attention to each client’s needs. In developing Faber Tech’s online presence, the focus is on building a modern, responsive, and well-structured interface that presents its services clearly and professionally. This initiative also puts web development, user experience, and real-world project organization skills into practice.",
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
      "Aplicação web desenvolvida para permitir a consulta e a visualização de informações sobre Pokémon de maneira organizada e interativa. O projeto utiliza a PokéAPI para obter dados e apresentá-los em uma interface construída com HTML, CSS e JavaScript. Durante o desenvolvimento, foram trabalhados conceitos de consumo de APIs REST, requisições assíncronas, manipulação do DOM, tratamento e apresentação de dados e organização de componentes visuais. Além de reunir informações sobre os Pokémon, a aplicação foi uma oportunidade de consolidar conhecimentos fundamentais do desenvolvimento frontend e transformar dados externos em uma experiência de navegação prática e agradável.",
    descriptionEn: "A web application designed to help users browse and explore Pokémon information through an organized, interactive interface. The project uses PokéAPI to retrieve data and display it in an interface built with HTML, CSS, and JavaScript. Development involved REST API integration, asynchronous requests, DOM manipulation, data handling and presentation, and the organization of visual components. Beyond providing Pokémon information, the application helped consolidate essential frontend development skills and turn external data into a practical and enjoyable browsing experience.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "PokéAPI",
    ],
    status: "COMPLETE",
  },
  {
    id: 4,
    name: "ECOPOINT",
    description:
      "O EcoPoint é uma aplicação Full Stack desenvolvida com o objetivo de facilitar o acesso aos ecopontos e contribuir para a destinação adequada de resíduos eletrônicos. A solução parte de um problema ambiental real: a dificuldade de encontrar alternativas acessíveis e responsáveis para o descarte de equipamentos e componentes eletrônicos. Sua proposta é utilizar a tecnologia para aproximar as pessoas de opções de descarte consciente, tornando esse processo mais simples, organizado e acessível. O projeto une desenvolvimento de software e sustentabilidade, demonstrando como uma aplicação digital pode apoiar práticas ambientalmente responsáveis e incentivar a redução dos impactos causados pelo descarte inadequado. Por envolver uma solução Full Stack, também representa a aplicação de conhecimentos relacionados à integração entre frontend, backend e gerenciamento de dados.",
    descriptionEn: "EcoPoint is a full-stack application designed to make recycling drop-off locations easier to find and encourage proper electronic waste disposal. The solution addresses a real environmental challenge: the difficulty of finding accessible and responsible ways to dispose of electronic devices and components. Its goal is to use technology to connect people with responsible disposal options, making the process simpler, more organized, and more accessible. The project combines software development and sustainability, demonstrating how digital applications can support environmentally responsible practices and help reduce the impact of improper disposal. As a full-stack solution, it also applies knowledge of frontend and backend integration and data management.",
    technologies: [
      "Full Stack",
      "Frontend",
      "Backend",
      "Banco de Dados",
    ],
    status: "PROJECT",
  },
];

export function ProjectsMenu({
  onClose,
}: ProjectsMenuProps) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedProject =
    projects[selectedIndex];

  useEffect(() => {
    function handleKeyDown(
      event: KeyboardEvent
    ) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();

          setSelectedIndex((current) =>
            current === 0
              ? projects.length - 1
              : current - 1
          );
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();

          setSelectedIndex((current) =>
            current === projects.length - 1
              ? 0
              : current + 1
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
  }, [onClose]);

  return (
    <div className="absolute inset-0 z-50 overflow-hidden bg-[#07111f] p-5 text-white">

      {/* JANELA PRINCIPAL */}
      <div className="flex h-full flex-col border-4 border-white bg-[#0b1728] shadow-[6px_6px_0_#000]">

        {/* HEADER */}
        <header className="flex shrink-0 items-center justify-between border-b-4 border-white bg-[#101e32] px-5 py-4">

          <div>
            <p className="font-arcade text-[8px] tracking-wider text-cyan-400">
              PEDRO FABER // INTERACTIVE PORTFOLIO
            </p>

            <h1 className="mt-2 font-arcade text-[16px]">
              {pt ? "BANCO DE PROJETOS" : "PROJECT DATABASE"}
            </h1>
          </div>

          <div className="font-arcade text-[8px] text-slate-400">
            COMPUTER //{" "}
            {String(selectedProject.id).padStart(
              2,
              "0"
            )}
          </div>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* CONTEÚDO */}
          <section className="flex min-h-0 flex-col overflow-hidden border-r-4 border-white p-5">

            {/* LISTA DE PROJETOS */}
            <div className="shrink-0">

              <p className="font-arcade text-[9px] text-cyan-400">
                {pt ? "SELECIONAR PROJETO" : "SELECT PROJECT"}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">

                {projects.map(
                  (project, index) => {
                    const isSelected =
                      index === selectedIndex;

                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() =>
                          setSelectedIndex(index)
                        }
                        aria-pressed={isSelected}
                        className={`flex min-w-0 items-center gap-2 border-2 px-3 py-3 text-left font-arcade text-[8px] transition ${
                          isSelected
                            ? "border-white bg-white text-black"
                            : "border-slate-700 text-white hover:border-slate-400 hover:bg-slate-800"
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

                        <span className="min-w-0">
                          {String(project.id).padStart(
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

            {/* DETALHES COM ROLAGEM */}
            <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden border-t-2 border-slate-600 pt-4">

              <div className="flex shrink-0 items-center justify-between gap-3">

                <p className="font-arcade text-[8px] text-cyan-400">
                  PROJECT{" "}
                  {String(selectedProject.id).padStart(
                    3,
                    "0"
                  )}
                </p>

                <p className="font-arcade text-[7px] text-emerald-400">
                  ● {pt ? ({ ACTIVE: "ATIVO", COMPLETE: "CONCLUÍDO", PROJECT: "PROJETO" } as Record<string, string>)[selectedProject.status] ?? selectedProject.status : selectedProject.status}
                </p>

              </div>

              <h2 className="mt-3 shrink-0 font-arcade text-[13px]">
                {selectedProject.name}
              </h2>

              <div
                key={selectedProject.id}
                className="mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-3"
              >

                <p className="max-w-xl text-sm leading-6 text-slate-300">
                  {pt ? selectedProject.description : selectedProject.descriptionEn}
                </p>

                <div className="mt-5 border-t border-slate-700 pt-4">

                  <p className="font-arcade text-[8px] text-cyan-400">
                    {pt ? "TECNOLOGIAS" : "TECHNOLOGIES"}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="border border-slate-600 bg-[#101e32] px-2 py-2 font-mono text-[11px] text-slate-300"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>

                </div>

                <p className="mt-5 pb-3 font-mono text-[10px] tracking-wider text-slate-500">
                  {pt ? "FIM DOS DADOS DO PROJETO" : "END OF PROJECT DATA"}
                </p>

              </div>

            </div>

            {/* CONTROLES */}
            <div className="mt-3 shrink-0 border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] leading-5 text-slate-400">
                [↑ ↓] {pt ? "SELECIONAR" : "SELECT"}
                &nbsp;&nbsp;&nbsp;
                [SCROLL] {pt ? "LER" : "READ"}
                &nbsp;&nbsp;&nbsp;
                [ESC] {pt ? "VOLTAR" : "BACK"}
              </p>

            </div>

          </section>

          {/* VÍDEO */}
          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                {pt ? "CENA AO VIVO" : "LIVE SCENE"}
              </p>

              <p className="font-arcade text-[7px] text-slate-500">
                {pt ? "LOOP // ATIVO" : "LOOP // ON"}
              </p>

            </div>

            <div className="relative mt-3 min-h-0 flex-1 overflow-hidden bg-black">

              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/projects-loop.mp4`}
                />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
                <p className="text-[8px] text-cyan-300">
                  {pt ? "CENA DO PROJETO" : "PROJECT SCENE"}
                </p>
              </div>

            </div>

            <p className="mt-4 shrink-0 text-center font-arcade text-[7px] text-slate-500">
              PEDRO.EXE // CODING
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex shrink-0 items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // {pt ? "BANCO DE PROJETOS" : "PROJECT DATABASE"}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white bg-black px-4 py-2 font-arcade text-[8px] transition hover:bg-white hover:text-black"
          >
            {pt ? "ESC VOLTAR" : "ESC BACK"}
          </button>

        </footer>

      </div>
    </div>
  );
}
