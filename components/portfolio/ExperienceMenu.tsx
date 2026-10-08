
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

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
  status: "ACTIVE" | "ARCHIVED";
};

const experiencesByLanguage: Record<"pt" | "en", Experience[]> = {
  pt: [
    {
      id: 1,
      role: "ANALISTA DE TI",
      company: "COLÉGIO DIVINO SALVADOR",
      period: "ATUAL",
      description: "Atuação na área de Tecnologia da Informação, contribuindo para o funcionamento, a manutenção e a melhoria contínua do ambiente tecnológico da instituição. As atividades envolvem suporte técnico a usuários, diagnóstico e resolução de problemas em computadores, softwares, periféricos e equipamentos de rede, além de instalação, configuração e manutenção de sistemas e dispositivos. A rotina também inclui acompanhamento da infraestrutura de TI, suporte à conectividade, configuração de equipamentos de rede e apoio à administração dos recursos tecnológicos utilizados nos setores administrativos e educacionais. O trabalho exige organização, capacidade de investigação, comunicação com usuários e agilidade na identificação de falhas, buscando reduzir interrupções e garantir a disponibilidade dos serviços. Essa experiência fortalece conhecimentos práticos em infraestrutura, redes, hardware, sistemas operacionais, segurança e atendimento técnico, além de desenvolver uma visão mais ampla sobre a importância da tecnologia no funcionamento de uma organização.",
      technologies: ["Infraestrutura de TI", "Redes de Computadores", "Suporte Técnico", "Hardware", "Windows", "Diagnóstico de Falhas", "Manutenção", "Segurança de Redes"],
      status: "ACTIVE",
    },
    {
      id: 2,
      role: "OPERADOR LOGÍSTICO",
      company: "RENNER",
      period: "ANTERIOR",
      description: "Experiência profissional na área de operações logísticas, participando de atividades relacionadas à organização de processos, movimentação e controle de produtos e apoio às rotinas operacionais. A atuação em um ambiente dinâmico contribuiu para o desenvolvimento de disciplina, atenção aos detalhes, organização e responsabilidade no cumprimento de procedimentos e prazos. O trabalho em equipe foi parte importante dessa experiência, exigindo comunicação, colaboração e adaptação às necessidades das operações. Além das competências operacionais, essa trajetória ajudou a fortalecer habilidades que continuam presentes na minha atuação em tecnologia, como resolução de problemas, comprometimento com resultados, gestão de prioridades e melhoria contínua dos processos.",
      technologies: ["Operações Logísticas", "Organização de Processos", "Trabalho em Equipe", "Gestão de Prioridades", "Comunicação", "Controle Operacional"],
      status: "ARCHIVED",
    },
  ],
  en: [
    {
      id: 1,
      role: "IT ANALYST",
      company: "COLÉGIO DIVINO SALVADOR",
      period: "CURRENT",
      description: "I work in Information Technology, helping maintain and continuously improve the institution's technology environment. My responsibilities include providing technical support to users; diagnosing and resolving issues involving computers, software, peripherals, and networking equipment; and installing, configuring, and maintaining systems and devices. My day-to-day work also includes monitoring IT infrastructure, supporting network connectivity, configuring networking equipment, and assisting with the management of technology resources used across administrative and educational departments. The role requires organization, troubleshooting skills, clear communication with users, and a quick response to incidents to minimize downtime and keep services available. This experience strengthens my practical knowledge of infrastructure, networks, hardware, operating systems, security, and technical support, while giving me a broader understanding of technology's role within an organization.",
      technologies: ["IT Infrastructure", "Computer Networks", "Technical Support", "Hardware", "Windows", "Troubleshooting", "Maintenance", "Network Security"],
      status: "ACTIVE",
    },
    {
      id: 2,
      role: "LOGISTICS OPERATOR",
      company: "RENNER",
      period: "PREVIOUS",
      description: "I gained professional experience in logistics operations, taking part in process organization, product handling and inventory control, and day-to-day operational support. Working in a fast-paced environment helped me develop discipline, attention to detail, organization, and accountability when following procedures and meeting deadlines. Teamwork was essential to this role, requiring communication, collaboration, and adaptability to operational needs. Beyond operational skills, this experience helped me build abilities I continue to use in technology, including problem-solving, commitment to results, prioritization, and continuous process improvement.",
      technologies: ["Logistics Operations", "Process Organization", "Teamwork", "Prioritization", "Communication", "Operational Control"],
      status: "ARCHIVED",
    },
  ],
};

const labels = {
  pt: {
    title: "HISTÓRICO PROFISSIONAL", database: "BANCO DE CARREIRAS", records: "EXPERIÊNCIAS PROFISSIONAIS", online: "● SISTEMA ONLINE", select: "SELECIONAR REGISTRO", knowledge: "CONHECIMENTOS / AMBIENTE", end: "FIM DO REGISTRO PROFISSIONAL", scene: "CENÁRIO PROFISSIONAL", statusActive: "ATIVO", statusArchived: "ARQUIVADO", selectControl: "SELECIONAR", readControl: "LER", backControl: "VOLTAR", footer: "PF SYSTEM // HISTÓRICO PROFISSIONAL", back: "ESC VOLTAR",
  },
  en: {
    title: "CAREER LOG", database: "CAREER DATABASE", records: "EMPLOYMENT RECORDS", online: "● SYSTEM ONLINE", select: "SELECT RECORD", knowledge: "KNOWLEDGE / ENVIRONMENT", end: "END OF CAREER RECORD", scene: "CAREER SCENE", statusActive: "ACTIVE", statusArchived: "ARCHIVED", selectControl: "SELECT", readControl: "READ", backControl: "BACK", footer: "PF SYSTEM // CAREER DATABASE", back: "ESC BACK",
  },
} as const;

export function ExperienceMenu({
  onClose,
}: ExperienceMenuProps) {
  const { language } = useLanguage();
  const experiences = experiencesByLanguage[language];
  const t = labels[language];

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedExperience =
    experiences[selectedIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();

          setSelectedIndex((current) =>
            current === 0
              ? experiences.length - 1
              : current - 1
          );
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();

          setSelectedIndex((current) =>
            current === experiences.length - 1
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
 }, [onClose, experiences.length]);

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
              {t.title}
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            SERVER // EXPERIENCE
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* EXPERIÊNCIAS */}
          <section className="flex min-h-0 flex-col overflow-hidden border-r-4 border-white p-5">

            {/* STATUS */}
            <div className="flex shrink-0 items-center justify-between border-2 border-slate-600 bg-[#08101c] p-4">

              <div>
                <p className="font-arcade text-[7px] text-cyan-400">
                  {t.database}
                </p>

                <p className="mt-3 font-arcade text-[11px]">
                  {t.records}
                </p>
              </div>

              <div className="text-right">
                <p className="font-arcade text-[7px] text-emerald-400">
                  {t.online}
                </p>

                <p className="mt-2 font-arcade text-[6px] text-slate-500">
                  RECORDS: {experiences.length}
                </p>
              </div>

            </div>

            {/* LISTA */}
            <div className="mt-4 shrink-0">

              <p className="font-arcade text-[8px] text-cyan-400">
                {t.select}
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
                        aria-pressed={isSelected}
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
                          {String(experience.id).padStart(
                            3,
                            "0"
                          )}{" "}
                          {experience.role}
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

                <p className="font-arcade text-[7px] text-cyan-400">
                  LOG-
                  {String(selectedExperience.id).padStart(
                    3,
                    "0"
                  )}
                </p>

                <p
                  className={`font-arcade text-[7px] ${
                    selectedExperience.status === "ACTIVE"
                      ? "text-emerald-400"
                      : "text-slate-500"
                  }`}
                >
                  ● {selectedExperience.status === "ACTIVE" ? t.statusActive : t.statusArchived}
                </p>

              </div>

              <h2 className="mt-3 shrink-0 font-arcade text-[12px]">
                {selectedExperience.role}
              </h2>

              <p className="mt-3 shrink-0 font-arcade text-[7px] text-slate-400">
                {selectedExperience.company}
                {" // "}
                {selectedExperience.period}
              </p>

              <div
                key={selectedExperience.id}
                className="mt-4 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-3"
              >

                <p className="text-sm leading-6 text-slate-300">
                  {selectedExperience.description}
                </p>

                <div className="mt-5 border-t border-slate-700 pt-4">

                  <p className="font-arcade text-[7px] text-cyan-400">
                    {t.knowledge}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedExperience.technologies.map(
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
                  {t.end}
                </p>

              </div>

            </div>

            {/* CONTROLES */}
            <div className="mt-3 shrink-0 border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] leading-5 text-slate-400">
                [↑ ↓] {t.selectControl}
                &nbsp;&nbsp;&nbsp;
                [SCROLL] {t.readControl}
                &nbsp;&nbsp;&nbsp;
                [ESC] {t.backControl}
              </p>

            </div>

          </section>

          {/* VÍDEO */}
          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                SERVER SCENE
              </p>

              <p className="font-arcade text-[7px] text-emerald-400">
                ● ONLINE
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
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}//videos/experience-loop.mp4`}
  type="video/mp4"
                />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
                <p className="text-[8px] text-cyan-300">
                  {t.scene}
                </p>
              </div>

            </div>

            <p className="mt-4 shrink-0 text-center font-arcade text-[7px] text-slate-500">
              CAREER.LOG // RUNNING
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex shrink-0 items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            {t.footer}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white bg-black px-4 py-2 font-arcade text-[8px] transition hover:bg-white hover:text-black"
          >
            {t.back}
          </button>

        </footer>

      </div>
    </div>
  );
}

