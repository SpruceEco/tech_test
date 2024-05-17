import React from "react";
import { useGameContext } from "../../context/GameProvider";

export const GameOver: React.FC = () => {
  const { winner, isTie, handleReset } = useGameContext();

  if (!winner && !isTie) return null;

  return (
    <div className="fixed inset-0 bg-black text-white-900 bg-opacity-90 flex flex-col items-center justify-center">
      <h2 className="text-4xl mb-4 text-white">
        {winner ? `${winner.name} wins!  🎉` : isTie ? "It's a tie!  🤝" : ""}
      </h2>
      <button
        className="bg-white text-blue-800 hover:bg-blue-800 hover:text-white px-4 py-2 rounded"
        onClick={handleReset}
      >
        Play Again
      </button>
    </div>
  );
};
