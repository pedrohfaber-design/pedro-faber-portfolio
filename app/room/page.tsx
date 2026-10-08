import { GameCanvas } from "@/components/game/GameCanvas";

export default function RoomPage() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <div className="aspect-video w-full max-w-[1440px]">
        <GameCanvas />
      </div>
    </main>
  );
}