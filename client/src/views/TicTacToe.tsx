import React from "react";
import { Game } from "../components/game/Game";
import { PlayerStats } from "../components/player/PlayerStats";
import { PlayerProvider } from "../context/PlayerProvider";
import { GameProvider } from "../context/GameProvider";

export const TicTacToe: React.FC = () => {
  return (
    <PlayerProvider>
      <GameProvider>
        <div
          className={`h-screen flex flex-col items-center justify-center p-4 text-black dark:text-white`}
        >
          <div className="flex flex-col lg:flex-row ">
            <Game />
            <PlayerStats />
          </div>
        </div>
      </GameProvider>
    </PlayerProvider>
  );
};
