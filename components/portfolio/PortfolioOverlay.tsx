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
  switch (section) {
    case "projects":
      return <ProjectsMenu onClose={onClose} />;

    case "about":
      return <AboutMenu onClose={onClose} />;

    case "experience":
      return <ExperienceMenu onClose={onClose} />;

    case "skills":
      return <SkillsMenu onClose={onClose} />;

    case "education":
      return <EducationMenu onClose={onClose} />;
  }
}