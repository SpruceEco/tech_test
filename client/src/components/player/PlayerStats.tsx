import React from "react";
import { usePlayerContext } from "../../context/PlayerProvider";
import { useGameContext } from "../../context/GameProvider";

export const PlayerStats: React.FC = () => {
  const { players } = usePlayerContext();
  const { totalGames } = useGameContext();

  const calculateWinningPercentage = (wins: number): string => {
    return totalGames === 0 ? "0" : ((wins / totalGames) * 100).toFixed(1);
  };

  return (
    <div className="flex flex-col lg:items-start lg:justify-start lg:ml-20 mt-2 lg:mt-20 lg:py-4 ">
      <div className="hidden lg:block">
        <h2 className="text-2xl text-bold text-gray-700  dark:text-gray-400">
          Ready to Play?
        </h2>
        <h4 className="text-sm mt-2 text-bold text-gray-500  dark:text-gray-500">
          Click on any cell to place your symbol and begin the game.
        </h4>
      </div>
      <div
        className={`p-0 lg:mt-10 mt-2 mb-2 text-black
          dark:text-white `}
      >
        <h3 className="text-lg  text-gray-500">Total Games: {totalGames}</h3>
      </div>

      <div
        className={`lg:p-4 p-4 rounded-xl flex lg:flex-row items-center divide-x divide-gray-200 dark:divide-gray-600 bg-white text-black dark:bg-gray-700 dark:text-white`}
      >
        {players.map((player) => (
          <div
            className={`lg:px-10 px-5 py-2  flex items-center`}
            key={player.name}
          >
            <img
              src={player.avatar}
              alt={player.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg text-gray-500">{player.name}</h3>
              <p className="text-2xl font-bold">{player.wins}</p>
              <p className="text-sm text-blue-500">
                {calculateWinningPercentage(player.wins)}% wins
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
