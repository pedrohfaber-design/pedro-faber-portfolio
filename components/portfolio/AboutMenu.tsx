"use client";

import { useEffect, useState } from "react";

type AboutMenuProps = {
  onClose: () => void;
};

type ProfileSection = {
  id: number;
  label: string;
  title: string;
  content: string;
};

const profileSections: ProfileSection[] = [
  {
    id: 1,
    label: "PROFILE",
    title: "PEDRO FABER",
    content:
      "Desenvolvedor de software e profissional de TI, com foco em desenvolvimento, automação e criação de soluções tecnológicas.",
  },
  {
    id: 2,
    label: "BACKGROUND",
    title: "MY JOURNEY",
    content:
      "Formado em Análise e Desenvolvimento de Sistemas, construindo experiência prática em desenvolvimento de software, infraestrutura de TI e automação.",
  },
  {
    id: 3,
    label: "OBJECTIVE",
    title: "NEXT LEVEL",
    content:
      "Continuar evoluindo como profissional de tecnologia, participando de projetos que unam desenvolvimento, automação e resolução de problemas reais.",
  },
];

export function AboutMenu({
  onClose,
}: AboutMenuProps) {
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedSection =
    profileSections[selectedIndex];

  function previousSection() {
    setSelectedIndex((current) => {
      if (current === 0) {
        return profileSections.length - 1;
      }

      return current - 1;
    });
  }

  function nextSection() {
    setSelectedIndex((current) => {
      if (
        current ===
        profileSections.length - 1
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
          previousSection();
          break;

        case "ArrowDown":
        case "s":
        case "S":
          event.preventDefault();
          nextSection();
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
              PLAYER PROFILE
            </h1>
          </div>

          <p className="font-arcade text-[8px] text-slate-400">
            MIRROR // PROFILE
          </p>

        </header>

        {/* ÁREA PRINCIPAL */}
        <div className="grid min-h-0 flex-1 grid-cols-[55%_45%]">

          {/* ===================== */}
          {/* PERFIL */}
          {/* ===================== */}

          <section className="flex min-h-0 flex-col border-r-4 border-white p-5">

            {/* IDENTIDADE */}
            <div className="border-2 border-slate-600 bg-[#08101c] p-4">

              <p className="font-arcade text-[7px] text-cyan-400">
                PLAYER
              </p>

              <h2 className="mt-3 font-arcade text-[15px]">
                PEDRO FABER
              </h2>

              <p className="mt-3 text-sm text-slate-300">
                Software Developer • IT • Automation
              </p>

            </div>

            {/* MENU */}
            <div className="mt-5">

              <p className="font-arcade text-[8px] text-cyan-400">
                PROFILE DATA
              </p>

              <div className="mt-3 flex gap-2">

                {profileSections.map(
                  (item, index) => {
                    const isSelected =
                      selectedIndex === index;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setSelectedIndex(
                            index
                          )
                        }
                        className={`flex-1 border-2 px-2 py-3 font-arcade text-[7px] transition ${
                          isSelected
                            ? "border-white bg-white text-black"
                            : "border-slate-700 text-slate-400 hover:border-white hover:text-white"
                        }`}
                      >
                        {isSelected && "▶ "}
                        {item.label}
                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* CONTEÚDO */}
            <div className="mt-5 border-t-2 border-slate-600 pt-5">

              <p className="font-arcade text-[8px] text-cyan-400">
                {selectedSection.label}
              </p>

              <h3 className="mt-4 font-arcade text-[13px]">
                {selectedSection.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
                {selectedSection.content}
              </p>

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
                PLAYER SCENE
              </p>

              <p className="font-arcade text-[7px] text-slate-500">
                LOOP // ON
              </p>

            </div>

            {/* FUTURO VÍDEO */}
            <div className="relative h-full w-full overflow-hidden bg-black">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="h-full w-full object-cover"
  >
    <source src="/videos/about-loop.mp4" type="video/mp4" />
  </video>

  <div className="pointer-events-none absolute inset-0 bg-black/5" />

  <div className="absolute bottom-3 left-3 border-2 border-cyan-300 bg-slate-950/90 px-3 py-2">
    <p className="text-[8px] text-cyan-300">
      PLAYER SCENE
    </p>
  </div>
</div>

            <p className="mt-4 text-center font-arcade text-[7px] text-slate-500">
              PLAYER_01 // PEDRO FABER
            </p>

          </section>

        </div>

        {/* FOOTER */}
        <footer className="flex items-center justify-between border-t-4 border-white bg-[#101e32] px-5 py-3">

          <p className="font-arcade text-[7px] text-slate-500">
            PF SYSTEM // PLAYER PROFILE
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