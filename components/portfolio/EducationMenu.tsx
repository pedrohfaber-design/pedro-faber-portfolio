"use client";

import { useEffect, useState } from "react";

type EducationMenuProps = {
  onClose: () => void;
};

type EducationRecord = {
  id: number;
  type: "EDUCATION" | "CERTIFICATION";
  title: string;
  institution: string;
  status: string;
  description: string;
};

const records: EducationRecord[] = [
  {
    id: 1,
    type: "EDUCATION",
    title: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
    institution: "UNIBF",
    status: "COMPLETED",
    description:
      "Formação superior voltada ao desenvolvimento de sistemas, programação, banco de dados, engenharia de software e tecnologia.",
  },
  {
    id: 2,
    type: "EDUCATION",
    title: "GESTÃO DA TECNOLOGIA DA INFORMAÇÃO",
    institution: "FATEC",
    status: "IN PROGRESS",
    description:
      "Formação voltada à gestão de tecnologia, infraestrutura, processos, projetos e ambientes corporativos de TI.",
  },
  {
    id: 3,
    type: "CERTIFICATION",
    title: "RUST AI DEVELOPER",
    institution: "SANTANDER / DIO",
    status: "COMPLETED",
    description:
      "Bootcamp com foco em desenvolvimento utilizando Rust, fundamentos de inteligência artificial e desenvolvimento de aplicações.",
  },
  {
    id: 4,
    type: "CERTIFICATION",
    title: "MICROSOFT POWER BI",
    institution: "MICROSOFT / DIO",
    status: "COMPLETED",
    description:
      "Formação focada em análise de dados, construção de dashboards e visualização de informações utilizando Power BI.",
  },
  {
    id: 5,
    type: "CERTIFICATION",
    title: "PYTHON ADVANCED",
    institution: "HUAWEI",
    status: "COMPLETED",
    description:
      "Formação avançada em Python, aprofundando conceitos da linguagem e desenvolvimento de soluções.",
  },
  {
  id: 6,
  type: "CERTIFICATION",
  title: "JAVASCRIPT DEVELOPER",
  institution: "DIO",
  status: "COMPLETED",
  description:
    "Formação em desenvolvimento JavaScript, abordando fundamentos da linguagem, desenvolvimento web, consumo de APIs e construção de aplicações práticas.",
},
{
  id: 7,
  type: "CERTIFICATION",
  title: "MONTAGEM E MANUTENÇÃO DE COMPUTADORES",
  institution: "ESCOLA ELEVAR",
  status: "COMPLETED",
  description:
    "Formação prática em montagem, manutenção e diagnóstico de computadores, incluindo componentes de hardware, identificação de falhas e manutenção de equipamentos.",
},
];

export function EducationMenu({
  onClose,
}: EducationMenuProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [filter, setFilter] = useState<
    "ALL" | "EDUCATION" | "CERTIFICATION"
  >("ALL");

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

  function previousRecord() {
    setSelectedIndex((current) => {
      if (current === 0) {
        return filteredRecords.length - 1;
      }

      return current - 1;
    });
  }

  function nextRecord() {
    setSelectedIndex((current) => {
      if (
        current ===
        filteredRecords.length - 1
      ) {
        return 0;
      }

      return current + 1;
    });
  }

  function changeFilter(
    newFilter:
      | "ALL"
      | "EDUCATION"
      | "CERTIFICATION"
  ) {
    setFilter(newFilter);
    setSelectedIndex(0);
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
          previousRecord();
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          nextRecord();
          break;

        case "1":
          changeFilter("ALL");
          break;

        case "2":
          changeFilter("EDUCATION");
          break;

        case "3":
          changeFilter("CERTIFICATION");
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
  }, [onClose, filteredRecords.length]);

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
              EDUCATION RECORDS
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            BOOKSHELF // ARCHIVE
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ===================== */}
          {/* ARQUIVO ACADÊMICO */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col border-r-4 border-white p-5">

            {/* FILTROS */}
            <div>
              <p className="font-arcade text-[8px] text-cyan-400">
                ARCHIVE TYPE
              </p>

              <div className="mt-3 grid grid-cols-3 gap-2">

                <button
                  type="button"
                  onClick={() =>
                    changeFilter("ALL")
                  }
                  className={`border-2 px-2 py-3 font-arcade text-[7px] transition ${
                    filter === "ALL"
                      ? "border-white bg-white text-black"
                      : "border-slate-700 text-slate-400 hover:border-white hover:text-white"
                  }`}
                >
                  [1] ALL
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeFilter("EDUCATION")
                  }
                  className={`border-2 px-2 py-3 font-arcade text-[7px] transition ${
                    filter === "EDUCATION"
                      ? "border-white bg-white text-black"
                      : "border-slate-700 text-slate-400 hover:border-white hover:text-white"
                  }`}
                >
                  [2] EDUCATION
                </button>

                <button
                  type="button"
                  onClick={() =>
                    changeFilter("CERTIFICATION")
                  }
                  className={`border-2 px-2 py-3 font-arcade text-[7px] transition ${
                    filter === "CERTIFICATION"
                      ? "border-white bg-white text-black"
                      : "border-slate-700 text-slate-400 hover:border-white hover:text-white"
                  }`}
                >
                  [3] CERTS
                </button>

              </div>
            </div>

            {/* LISTA */}
            <div className="mt-5">

              <div className="flex items-center justify-between">

                <p className="font-arcade text-[8px] text-cyan-400">
                  RECORDS
                </p>

                <p className="font-arcade text-[6px] text-slate-500">
                  FOUND{" "}
                  {String(
                    filteredRecords.length
                  ).padStart(2, "0")}
                </p>

              </div>

              <div className="mt-3 space-y-2">

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
                        className={`flex w-full items-center gap-3 border-2 px-4 py-3 text-left transition ${
                          isSelected
                            ? "border-white bg-white text-black"
                            : "border-transparent text-white hover:border-slate-500 hover:bg-slate-800"
                        }`}
                      >
                        <span
                          className={`font-arcade text-[7px] ${
                            isSelected
                              ? ""
                              : "opacity-0"
                          }`}
                        >
                          ▶
                        </span>

                        <div>
                          <p className="font-arcade text-[7px]">
                            {record.title}
                          </p>

                          <p
                            className={`mt-2 font-arcade text-[5px] ${
                              isSelected
                                ? "text-slate-600"
                                : "text-slate-500"
                            }`}
                          >
                            {record.type}
                          </p>
                        </div>

                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* DETALHES */}
            {selectedRecord && (
              <div className="mt-5 border-t-2 border-slate-600 pt-5">

                <div className="flex items-center justify-between">

                  <p className="font-arcade text-[7px] text-cyan-400">
                    RECORD-
                    {String(
                      selectedRecord.id
                    ).padStart(3, "0")}
                  </p>

                  <p
                    className={`font-arcade text-[6px] ${
                      selectedRecord.status ===
                      "COMPLETED"
                        ? "text-emerald-400"
                        : "text-amber-300"
                    }`}
                  >
                    ● {selectedRecord.status}
                  </p>

                </div>

                <h2 className="mt-4 font-arcade text-[10px] leading-5">
                  {selectedRecord.title}
                </h2>

                <p className="mt-3 font-arcade text-[6px] text-slate-400">
                  {
                    selectedRecord.institution
                  }
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {
                    selectedRecord.description
                  }
                </p>

              </div>
            )}

            {/* CONTROLES */}
            <div className="mt-auto border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] leading-5 text-slate-400">
                [↑ ↓] SELECT
                &nbsp;&nbsp;
                [1 2 3] FILTER
                &nbsp;&nbsp;
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
                LIBRARY SCENE
              </p>

              <p className="font-arcade text-[7px] text-slate-500">
                ARCHIVE // OPEN
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
    <source src="/videos/education-loop.mp4" type="video/mp4" />
  </video>

  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      STUDY SCENE
    </p>
  </div>
</div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              EDUCATION.DB // ARCHIVE
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // EDUCATION RECORDS
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