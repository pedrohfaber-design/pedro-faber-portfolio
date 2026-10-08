"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type EducationMenuProps = {
  onClose: () => void;
};

type RecordType = "EDUCATION" | "CERTIFICATION";
type FilterType = "ALL" | RecordType;
type RecordStatus = "COMPLETED" | "IN PROGRESS" | "PLANNED";

type EducationRecord = {
  id: number;
  type: RecordType;
  title: string;
  institution: string;
  status: RecordStatus;
  description: string;
  titleEn: string;
  descriptionEn: string;
};

const records: EducationRecord[] = [
  {
    id: 1,
    type: "EDUCATION",
    title: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    institution: "UNIBF",
    status: "COMPLETED",
    description:
      "Formação superior concluída na área de Análise e Desenvolvimento de Sistemas, com foco na compreensão, no planejamento e na construção de soluções de software. A graduação aborda fundamentos de programação, desenvolvimento de aplicações, modelagem e gerenciamento de bancos de dados, engenharia de software, análise de requisitos e arquitetura de sistemas. Essa formação contribuiu para a construção de uma base técnica voltada à resolução de problemas, ao raciocínio lógico e à aplicação de boas práticas no desenvolvimento de soluções tecnológicas.",
    titleEn: "SYSTEMS ANALYSIS AND DEVELOPMENT",
    descriptionEn: "Completed undergraduate degree in Systems Analysis and Development, focused on understanding, planning, and building software solutions. The program covered programming fundamentals, application development, database modeling and management, software engineering, requirements analysis, and systems architecture. It helped establish a technical foundation in problem-solving, logical reasoning, and best practices for developing technology solutions.",
  },
  {
    id: 2,
    type: "EDUCATION",
    title: "GESTÃO DA TECNOLOGIA DA INFORMAÇÃO",
    institution: "FATEC",
    status: "IN PROGRESS",
    description:
      "Graduação em andamento voltada à gestão estratégica e operacional da Tecnologia da Informação nas organizações. A formação amplia conhecimentos relacionados à infraestrutura tecnológica, governança de TI, gerenciamento de projetos, processos corporativos, segurança da informação e administração de recursos tecnológicos. O curso complementa a formação em desenvolvimento de sistemas, proporcionando uma visão mais abrangente sobre como alinhar soluções tecnológicas às necessidades de negócios, organizar processos e apoiar a tomada de decisões.",
    titleEn: "INFORMATION TECHNOLOGY MANAGEMENT",
    descriptionEn: "Ongoing undergraduate degree focused on strategic and operational IT management in organizations. The program expands knowledge of technology infrastructure, IT governance, project management, business processes, information security, and technology resource administration. It complements my software development background with a broader perspective on aligning technology with business needs, organizing processes, and supporting decision-making.",
  },
  {
    id: 3,
    type: "EDUCATION",
    title: "MBA EM CYBERSEGURANÇA",
    institution: "USP",
    status: "PLANNED",
    description:
      "Especialização planejada na área de Cybersegurança, com o objetivo de aprofundar conhecimentos sobre proteção de sistemas, segurança da informação, gerenciamento de riscos e estratégias de defesa de ambientes tecnológicos. O interesse nessa formação está relacionado à busca por uma atuação cada vez mais completa em tecnologia, integrando desenvolvimento de software, infraestrutura e segurança. A matrícula ainda não foi confirmada; esta formação representa uma próxima etapa planejada de desenvolvimento acadêmico e profissional.",
    titleEn: "MBA IN CYBERSECURITY",
    descriptionEn: "Planned postgraduate studies in cybersecurity, aimed at deepening my knowledge of system protection, information security, risk management, and defense strategies for technology environments. This goal reflects my interest in integrating software development, infrastructure, and security. Enrollment has not yet been confirmed; this is a planned next step in my academic and professional development.",
  },
  {
    id: 4,
    type: "CERTIFICATION",
    title: "RUST AI DEVELOPER",
    institution: "SANTANDER / DIO",
    status: "COMPLETED",
    description:
      "Bootcamp de desenvolvimento com Rust e fundamentos relacionados à Inteligência Artificial, proporcionando contato com conceitos da linguagem, estruturação de aplicações e resolução de problemas por meio da programação. A formação também envolveu práticas de desenvolvimento de software e atividades voltadas à construção de soluções, incluindo conhecimentos de desenvolvimento Full Stack. A experiência contribuiu para ampliar o repertório técnico e explorar uma linguagem reconhecida por seu foco em desempenho, segurança de memória e confiabilidade.",
    titleEn: "RUST AI DEVELOPER",
    descriptionEn: "Development bootcamp covering Rust and artificial intelligence fundamentals, including language concepts, application structure, and programming-based problem-solving. The program also involved software development practices and hands-on activities, including Full Stack development. It broadened my technical experience with a language known for performance, memory safety, and reliability.",
  },
  {
    id: 5,
    type: "CERTIFICATION",
    title: "MICROSOFT POWER BI",
    institution: "MICROSOFT / SENAI Ítalo Bologna ",
    status: "COMPLETED",
    description:
      "Formação voltada à análise e à visualização de dados utilizando o Microsoft Power BI. Os conhecimentos abordados incluem organização de informações, preparação de dados, elaboração de relatórios e construção de dashboards interativos. O aprendizado reforça a capacidade de transformar conjuntos de dados em indicadores visuais e informações úteis para o acompanhamento de resultados e o apoio à tomada de decisões.",
    titleEn: "MICROSOFT POWER BI",
    descriptionEn: "Training in data analysis and visualization using Microsoft Power BI. Topics included organizing information, preparing data, creating reports, and building interactive dashboards. The training strengthened my ability to turn datasets into visual indicators and useful information for monitoring results and supporting decisions.",
  },
  {
    id: 6,
    type: "CERTIFICATION",
    title: "PYTHON ADVANCED",
    institution: "HUAWEI",
    status: "COMPLETED",
    description:
      "Formação avançada em Python, voltada ao aprofundamento dos conhecimentos de programação e ao desenvolvimento de soluções utilizando a linguagem. O curso contribuiu para fortalecer o raciocínio lógico, a organização de código e a compreensão de recursos mais avançados da linguagem. Esses conhecimentos podem ser aplicados em diferentes contextos, incluindo desenvolvimento de aplicações, manipulação de dados e automação de tarefas.",
    titleEn: "PYTHON ADVANCED",
    descriptionEn: "Advanced Python training focused on deepening programming knowledge and building solutions with the language. The course strengthened logical thinking, code organization, and understanding of more advanced language features. These skills can be applied to application development, data manipulation, and task automation.",
  },
  {
    id: 7,
    type: "CERTIFICATION",
    title: "JAVASCRIPT DEVELOPER",
    institution: "DIO",
    status: "COMPLETED",
    description:
      "Formação em desenvolvimento JavaScript, abrangendo fundamentos da linguagem, manipulação de elementos de páginas web, programação assíncrona, consumo de APIs e construção de aplicações interativas. O aprendizado foi aplicado em atividades práticas de desenvolvimento frontend, contribuindo para o fortalecimento das habilidades em HTML, CSS e JavaScript. A formação também apoiou o desenvolvimento de projetos próprios, como uma Pokédex integrada à PokéAPI.",
    titleEn: "JAVASCRIPT DEVELOPER",
    descriptionEn: "JavaScript development training covering language fundamentals, web page element manipulation, asynchronous programming, API integration, and interactive applications. Practical frontend activities reinforced my HTML, CSS, and JavaScript skills. The program also supported personal projects, including a Pokédex integrated with PokéAPI.",
  },
  {
    id: 8,
    type: "CERTIFICATION",
    title: "MONTAGEM E MANUTENÇÃO DE COMPUTADORES",
    institution: "ESCOLA ELEVAR",
    status: "COMPLETED",
    description:
      "Formação prática voltada à montagem, à manutenção e ao diagnóstico de computadores. O conteúdo contempla identificação de componentes de hardware, instalação e substituição de peças, investigação de falhas e procedimentos de manutenção de equipamentos. Os conhecimentos adquiridos oferecem uma base importante para atividades de suporte técnico, manutenção preventiva e corretiva e resolução de problemas relacionados à infraestrutura de computadores.",
    titleEn: "COMPUTER ASSEMBLY AND MAINTENANCE",
    descriptionEn: "Practical training in computer assembly, maintenance, and troubleshooting. Topics included identifying hardware components, installing and replacing parts, diagnosing faults, and equipment maintenance procedures. This knowledge provides an important foundation for technical support, preventive and corrective maintenance, and computer infrastructure troubleshooting.",
  },
];

const filters: {
  value: FilterType;
  label: string;
}[] = [
  { value: "ALL", label: "[1] ALL" },
  { value: "EDUCATION", label: "[2] EDUCATION" },
  { value: "CERTIFICATION", label: "[3] CERTS" },
];

export function EducationMenu({
  onClose,
}: EducationMenuProps) {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [filter, setFilter] =
    useState<FilterType>("ALL");

  const filteredRecords =
    filter === "ALL"
      ? records
      : records.filter(
          (record) => record.type === filter
        );

  const safeIndex =
    selectedIndex >= filteredRecords.length
      ? 0
      : selectedIndex;

  const selectedRecord =
    filteredRecords[safeIndex];

  function changeFilter(newFilter: FilterType) {
    setFilter(newFilter);
    setSelectedIndex(0);
  }

  useEffect(() => {
    const recordCount =
      filter === "ALL"
        ? records.length
        : records.filter(
            (record) => record.type === filter
          ).length;

    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
          event.preventDefault();

          setSelectedIndex((current) =>
            current <= 0
              ? recordCount - 1
              : current - 1
          );
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();

          setSelectedIndex((current) =>
            current >= recordCount - 1
              ? 0
              : current + 1
          );
          break;

        case "1":
          setFilter("ALL");
          setSelectedIndex(0);
          break;

        case "2":
          setFilter("EDUCATION");
          setSelectedIndex(0);
          break;

        case "3":
          setFilter("CERTIFICATION");
          setSelectedIndex(0);
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
  }, [filter, onClose]);

  function statusColor(status: RecordStatus) {
    if (status === "COMPLETED") {
      return "text-emerald-400";
    }

    if (status === "IN PROGRESS") {
      return "text-cyan-400";
    }

    return "text-amber-300";
  }

  return (
    <div className="absolute inset-0 z-50 overflow-hidden bg-[#07111f] p-5 text-white">

      {/* JANELA PRINCIPAL */}
      <div className="flex h-full flex-col border-4 border-white bg-[#0b1728] shadow-[6px_6px_0_#000]">

        {/* HEADER */}
        <header className="flex shrink-0 items-center justify-between border-b-4 border-white bg-[#101e32] px-5 py-4">

          <div>
            <p className="font-arcade text-[8px] tracking-wider text-cyan-400">
              PEDRO FABER // {language === "pt" ? "PORTFÓLIO INTERATIVO" : "INTERACTIVE PORTFOLIO"}
            </p>

            <h1 className="mt-2 font-arcade text-[16px]">
              {language === "pt" ? "REGISTROS ACADÊMICOS" : "EDUCATION RECORDS"}
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            BOOKSHELF // ARCHIVE
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ARQUIVO ACADÊMICO */}
          <section className="flex min-h-0 flex-col overflow-hidden border-r-4 border-white p-5">

            {/* FILTROS */}
            <div className="shrink-0">

              <p className="font-arcade text-[8px] text-cyan-400">
                ARCHIVE TYPE
              </p>

              <div className="mt-3 grid grid-cols-3 gap-2">

                {filters.map((item) => {
                  const isSelected =
                    filter === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        changeFilter(item.value)
                      }
                      aria-pressed={isSelected}
                      className={`border-2 px-2 py-3 font-arcade text-[7px] transition ${
                        isSelected
                          ? "border-white bg-white text-black"
                          : "border-slate-700 text-slate-400 hover:border-white hover:text-white"
                      }`}
                    >
                      {language === "pt" ? ({ ALL: "[1] TODOS", EDUCATION: "[2] FORMAÇÃO", CERTIFICATION: "[3] CERTS" }[item.value]) : item.label}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* LISTA DE REGISTROS */}
            <div className="mt-4 flex min-h-0 max-h-[38%] shrink-0 flex-col">

              <div className="flex shrink-0 items-center justify-between">

                <p className="font-arcade text-[8px] text-cyan-400">
                  {language === "pt" ? "REGISTROS" : "RECORDS"}
                </p>

                <p className="font-arcade text-[6px] text-slate-500">
                  FOUND{" "}
                  {String(
                    filteredRecords.length
                  ).padStart(2, "0")}
                </p>

              </div>

              <div className="mt-3 min-h-0 space-y-2 overflow-y-auto overscroll-contain pr-2">

                {filteredRecords.map(
                  (record, index) => {
                    const isSelected =
                      index === safeIndex;

                    return (
                      <button
                        key={record.id}
                        type="button"
                        onClick={() =>
                          setSelectedIndex(index)
                        }
                        aria-pressed={isSelected}
                        className={`flex w-full items-center gap-3 border-2 px-4 py-3 text-left transition ${
                          isSelected
                            ? "border-white bg-white text-black"
                            : "border-transparent text-white hover:border-slate-500 hover:bg-slate-800"
                        }`}
                      >
                        <span
                          className={`shrink-0 font-arcade text-[7px] ${
                            isSelected
                              ? ""
                              : "opacity-0"
                          }`}
                        >
                          ▶
                        </span>

                        <div className="min-w-0">

                          <p className="font-arcade text-[7px] leading-4">
                            {language === "pt" ? record.title : record.titleEn}
                          </p>

                          <p
                            className={`mt-2 font-arcade text-[5px] ${
                              isSelected
                                ? "text-slate-600"
                                : "text-slate-500"
                            }`}
                          >
                            {language === "pt" ? (record.type === "EDUCATION" ? "FORMAÇÃO" : "CERTIFICAÇÃO") : record.type}
                          </p>

                        </div>

                      </button>
                    );
                  }
                )}

              </div>
            </div>

            {/* DETALHES COM ROLAGEM */}
            {selectedRecord && (
              <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden border-t-2 border-slate-600 pt-4">

                <div className="flex shrink-0 items-center justify-between gap-3">

                  <p className="font-arcade text-[7px] text-cyan-400">
                    RECORD-
                    {String(selectedRecord.id).padStart(
                      3,
                      "0"
                    )}
                  </p>

                  <p
                    className={`font-arcade text-[6px] ${statusColor(
                      selectedRecord.status
                    )}`}
                  >
                    ● {language === "pt" ? ({ COMPLETED: "CONCLUÍDO", "IN PROGRESS": "EM ANDAMENTO", PLANNED: "PLANEJADO" }[selectedRecord.status]) : selectedRecord.status}
                  </p>

                </div>

                <h2 className="mt-3 shrink-0 font-arcade text-[10px] leading-5">
                  {language === "pt" ? selectedRecord.title : selectedRecord.titleEn}
                </h2>

                <p className="mt-3 shrink-0 font-arcade text-[6px] text-slate-400">
                  {selectedRecord.institution}
                </p>

                <div
                  key={selectedRecord.id}
                  className="mt-4 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-3"
                >

                  <p className="pb-4 text-sm leading-6 text-slate-300">
                    {language === "pt" ? selectedRecord.description : selectedRecord.descriptionEn}
                  </p>

                  <p className="pb-3 font-mono text-[10px] tracking-wider text-slate-500">
                    {language === "pt" ? "FIM DO REGISTRO" : "END OF EDUCATION RECORD"}
                  </p>

                </div>

              </div>
            )}

            {/* CONTROLES */}
            <div className="mt-3 shrink-0 border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] leading-5 text-slate-400">
                [↑ ↓] {language === "pt" ? "SELECIONAR" : "SELECT"}
                &nbsp;&nbsp;
                [1 2 3] {language === "pt" ? "FILTRAR" : "FILTER"}
                &nbsp;&nbsp;
                [SCROLL] {language === "pt" ? "LER" : "READ"}
                &nbsp;&nbsp;
                [ESC] {language === "pt" ? "VOLTAR" : "BACK"}
              </p>

            </div>

          </section>

          {/* VÍDEO */}
          <section className="flex min-h-0 flex-col bg-[#08101c] p-5">

            <div className="flex items-center justify-between">

              <p className="font-arcade text-[8px] text-cyan-400">
                {language === "pt" ? "CENA DA BIBLIOTECA" : "LIBRARY SCENE"}
              </p>

              <p className="font-arcade text-[7px] text-slate-500">
                {language === "pt" ? "ARQUIVO // ABERTO" : "ARCHIVE // OPEN"}
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
                  src="/videos/education-loop.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="pointer-events-none absolute inset-0 bg-black/5" />

              <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
                <p className="text-[8px] text-cyan-300">
                  {language === "pt" ? "CENA DE ESTUDOS" : "STUDY SCENE"}
                </p>
              </div>

            </div>

            <p className="mt-4 shrink-0 text-center font-arcade text-[7px] text-slate-500">
              EDUCATION.DB // ARCHIVE
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex shrink-0 items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            {"PF SYSTEM // "}{language === "pt" ? "REGISTROS ACADÊMICOS" : "EDUCATION RECORDS"}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-2 border-white bg-black px-4 py-2 font-arcade text-[8px] transition hover:bg-white hover:text-black"
          >
            ESC {language === "pt" ? "VOLTAR" : "BACK"}
          </button>

        </footer>

      </div>
    </div>
  );
}
