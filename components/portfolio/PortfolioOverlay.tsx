"use client";

import { AboutMenu } from "./AboutMenu";
import { ProjectsMenu } from "./ProjectsMenu";
import { ExperienceMenu } from "./ExperienceMenu";
import { SkillsMenu } from "./SkillsMenu";
import { EducationMenu } from "./EducationMenu";

type PortfolioSection =
  | "projects"
  | "about"
  | "experience"
  | "skills"
  | "education";

type PortfolioOverlayProps = {
  section: PortfolioSection;
  onClose: () => void;
};

export function PortfolioOverlay({
  section,
  onClose,
}: PortfolioOverlayProps) {
  if (section === "projects") {
    return (
      <ProjectsMenu
        onClose={onClose}
      />
    );
  }

  if (section === "about") {
    return (
      <AboutMenu
        onClose={onClose}
      />
    );
  }
if (section === "experience") {
  return (
    <ExperienceMenu
      onClose={onClose}
    />
  );
}
if (section === "skills") {
  return (
    <SkillsMenu
      onClose={onClose}
    />
  );
}
if (section === "education") {
  return (
    <EducationMenu
      onClose={onClose}
    />
  );
}

  // TEMPORÁRIO:
  // Experience, Skills e Education
  // ainda usam este painel.
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/75 p-8">
      <div className="relative h-[80%] w-[85%] max-w-5xl border-2 border-cyan-400 bg-slate-950 p-8 text-white">

        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-5 text-xl text-slate-400 hover:text-white"
        >
          ✕
        </button>

        <p className="font-mono text-xs tracking-[0.3em] text-cyan-400">
          PEDRO FABER // PORTFOLIO
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          {section.toUpperCase()}
        </h2>

        <p className="mt-8 text-slate-400">
          Esta interface será construída em seguida.
        </p>

      </div>
    </div>
  );
}