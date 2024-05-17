import React, { Dispatch, SetStateAction } from "react";
import { Board } from "./Board";
import { Controls } from "./Controls";
import { GameOver } from "./GameOver";

export const Game: React.FC = () => {
  return (
    <div className="flex flex-col items-center lg:justify-center lg:items-start mt-10">
      <div className="flex flex-col items-center">
        <Board />
        <div className="w-full flex justify-end mt-4">
          <Controls />
        </div>
      </div>
      <GameOver />
    </div>
  );
};
