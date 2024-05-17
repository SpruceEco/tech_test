import React from "react";
import { Player } from "../../types";

interface StatusProps {
  winner: Player | null;
  currentPlayer: Player;
}

export const Status: React.FC<StatusProps> = ({ winner, currentPlayer }) => {
  const status = winner
    ? `Winner: ${winner.name}`
    : `${currentPlayer.name}'s turn`;
  return (
    <div className="text-xl mb-4 flex items-center">
      <img
        src={currentPlayer.avatar}
        alt={currentPlayer.name}
        className={`w-12 h-12 rounded-full mr-4 ${
          winner ? "" : "border-4 border-yellow-500"
        }`}
      />
      {status}
    </div>
  );
};
