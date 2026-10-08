"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { EventBus } from "@/game/events/EventBus";
import { PortfolioOverlay } from "@/components/portfolio/PortfolioOverlay";
import { CreditsScreen } from "@/components/credits/CreditsScreen";

type PortfolioSection =
  | "projects"
  | "about"
  | "experience"
  | "skills"
  | "education";

const validSections: PortfolioSection[] = [
  "projects",
  "about",
  "experience",
  "skills",
  "education",
];

export function GameCanvas() {
  const gameRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] =
    useState<PortfolioSection | null>(null);

  const [showCredits, setShowCredits] =
    useState(false);

  useEffect(() => {
    const container = gameRef.current;

    if (!container) return;

    let game: import("phaser").Game | undefined;
    let cancelled = false;

    async function startGame() {
      const Phaser = await import("phaser");

      const { RoomScene } = await import(
        "@/game/scenes/RoomScene"
      );

      if (cancelled) return;

      container!.innerHTML = "";

      game = new Phaser.Game({
        type: Phaser.AUTO,

        width: 960,
        height: 540,

        parent: container!,

        backgroundColor: "#08111f",

        scene: [RoomScene],

        physics: {
          default: "arcade",

          arcade: {
            debug: false,
          },
        },

        scale: {
          mode: Phaser.Scale.FIT,

          autoCenter:
            Phaser.Scale.CENTER_BOTH,

          width: 960,
          height: 540,
        },
      });
    }

    const handleInteraction = (action: string) => {
      if (
        validSections.includes(
          action as PortfolioSection
        )
      ) {
        setActiveSection(
          action as PortfolioSection
        );

        EventBus.emit("portfolio-open");
      }
    };

    const handleEndingStart = () => {
      setActiveSection(null);
      setShowCredits(true);
    };

    EventBus.on("interaction", handleInteraction);
    EventBus.on("ending-start", handleEndingStart);

    void startGame();

    return () => {
      cancelled = true;

      EventBus.off("interaction", handleInteraction);
      EventBus.off("ending-start", handleEndingStart);

      if (game) {
        game.destroy(true);
        game = undefined;
      }

      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-black">

      {/* PHASER */}
      <div
        ref={gameRef}
        className="absolute inset-0 overflow-hidden"
      />

      {/* PORTFÓLIO */}
      {activeSection && !showCredits && (
        <PortfolioOverlay
          section={activeSection}
          onClose={() => {
            setActiveSection(null);
            EventBus.emit("portfolio-close");
          }}
        />
      )}

      {/* CRÉDITOS */}
      {showCredits && (
        <CreditsScreen
          onFinish={() => {
            setShowCredits(false);
            setActiveSection(null);
            EventBus.emit("ending-finish");
          }}
        />
      )}

    </div>
  );
}