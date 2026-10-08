"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

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
      "Desenvolvedor de software e profissional de Tecnologia da Informação, com experiência em suporte técnico, infraestrutura, desenvolvimento web e automação de processos. Busco criar soluções práticas, eficientes e que realmente façam diferença.",
  },
  {
    id: 2,
    label: "BACKGROUND",
    title: "MY JOURNEY",
    content:
      "meu nome é Pedro Henrique Faber, sou de Cabreúva-SP, e tenho construído minha trajetória em torno da tecnologia, da curiosidade e da vontade de aprender. Atuo na área de Tecnologia da Informação, onde desenvolvo experiência prática com suporte técnico, infraestrutura, redes, manutenção de equipamentos e resolução de problemas. Paralelamente, dedico meu tempo ao desenvolvimento de software, explorando aplicações web, projetos Full Stack e automação de processos. Gosto de entender como as coisas funcionam, encontrar maneiras de melhorá-las e transformar ideias em soluções úteis. Fora do ambiente profissional, também gosto de futebol e videogames, interesses que fazem parte da minha personalidade e que, de certa forma, inspiraram a criação deste portfólio interativo. Encaro cada novo projeto como uma oportunidade de aprender, experimentar tecnologias e evoluir tanto profissionalmente quanto pessoalmente.",
  },
  {
    id: 3,
    label: "OBJECTIVE",
    title: "NEXT LEVEL",
    content:
      "Meu objetivo é continuar evoluindo como desenvolvedor de software e profissional de tecnologia, aprofundando meus conhecimentos em desenvolvimento Full Stack, engenharia de software, arquitetura de sistemas, automação e Cybersegurança. Quero participar da construção de aplicações modernas, seguras e escaláveis, que resolvam problemas reais e proporcionem experiências de qualidade aos usuários. Também busco ampliar minha capacidade de analisar desafios, planejar soluções e integrar diferentes tecnologias de maneira eficiente. Mais do que dominar ferramentas ou linguagens, quero desenvolver uma visão cada vez mais completa sobre tecnologia, unindo criatividade, conhecimento técnico e responsabilidade. Minha meta é contribuir para projetos relevantes, aprender com profissionais experientes e, ao longo da minha trajetória, criar soluções próprias que possam gerar impacto positivo.",
  },
];


const profileSectionsEn: ProfileSection[] = [
  {
    id: 1,
    label: "PROFILE",
    title: "PEDRO FABER",
    content: "Software developer and Information Technology professional with experience in technical support, IT infrastructure, web development, and process automation. I aim to create practical, efficient solutions that make a meaningful difference.",
  },
  {
    id: 2,
    label: "BACKGROUND",
    title: "MY JOURNEY",
    content: "My name is Pedro Henrique Faber, and I am from Cabreúva, São Paulo, Brazil. My journey has been shaped by technology, curiosity, and a desire to keep learning. I work in Information Technology, gaining hands-on experience in technical support, infrastructure, networking, equipment maintenance, and troubleshooting. Alongside my professional work, I dedicate time to software development, exploring web applications, full-stack projects, and process automation. I enjoy understanding how things work, finding ways to improve them, and turning ideas into useful solutions. Outside work, I also enjoy soccer and video games—interests that are part of who I am and, in a way, inspired this interactive portfolio. I see every new project as an opportunity to learn, experiment with technologies, and grow both professionally and personally.",
  },
  {
    id: 3,
    label: "OBJECTIVE",
    title: "NEXT LEVEL",
    content: "My goal is to continue growing as a software developer and technology professional, deepening my knowledge of full-stack development, software engineering, system architecture, automation, and cybersecurity. I want to help build modern, secure, scalable applications that solve real problems and deliver high-quality user experiences. I also seek to strengthen my ability to analyze challenges, design solutions, and integrate different technologies effectively. Beyond mastering tools and programming languages, I want to develop a broader understanding of technology by combining creativity, technical expertise, and responsibility. I hope to contribute to meaningful projects, learn from experienced professionals, and eventually build solutions of my own that make a positive impact.",
  },
];

export function AboutMenu({
  onClose,
}: AboutMenuProps) {
  const { language } = useLanguage();
  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const selectedSection =
    (language === "pt" ? profileSections : profileSectionsEn)[selectedIndex];

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
              PEDRO FABER // {language === "pt" ? "PORTFÓLIO INTERATIVO" : "INTERACTIVE PORTFOLIO"}
            </p>

            <h1 className="mt-2 font-arcade text-[16px]">
              {language === "pt" ? "PERFIL DO JOGADOR" : "PLAYER PROFILE"}
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
                {language === "pt" ? "Desenvolvimento de Software • TI • Automação" : "Software Development • IT • Automation"}
              </p>

            </div>

            {/* MENU */}
            <div className="mt-5">

              <p className="font-arcade text-[8px] text-cyan-400">
                {language === "pt" ? "DADOS DO PERFIL" : "PROFILE DATA"}
              </p>

              <div className="mt-3 flex gap-2">

                {(language === "pt" ? profileSections : profileSectionsEn).map(
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

            
{/* CONTEÚDO COM ROLAGEM */}
<div className="mt-5 flex min-h-0 flex-1 flex-col overflow-hidden border-t-2 border-slate-600 pt-5">

  <p className="shrink-0 font-arcade text-[8px] text-cyan-400">
    {selectedSection.label}
  </p>

  <h3 className="mt-4 shrink-0 font-arcade text-[13px]">
    {selectedSection.title}
  </h3>

  <div
    key={selectedSection.id}
    className="mt-4 min-h-0 flex-1 overflow-y-auto overscroll-contain pr-3"
  >
    <p className="max-w-xl pb-4 text-sm leading-7 text-slate-300">
      {selectedSection.content}
    </p>
  </div>

</div>

            {/* CONTROLES */}
            <div className="mt-auto border-t border-slate-700 pt-4">

              <p className="font-arcade text-[7px] text-slate-400">
                [↑ ↓] {language === "pt" ? "SELECIONAR" : "SELECT"}
                &nbsp;&nbsp;&nbsp;
                [ESC] {language === "pt" ? "VOLTAR" : "BACK"}
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
   <source
  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/about-loop.mp4`}
  type="video/mp4"
/>
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
            PF SYSTEM // {language === "pt" ? "PERFIL DO JOGADOR" : "PLAYER PROFILE"}
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
