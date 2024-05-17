import React from "react";
import { Cell } from "./Cell";
import { Status } from "./Status";
import { useGameContext } from "../../context/GameProvider";
import { usePlayerContext } from "../../context/PlayerProvider";
import { calculateWinner } from "../../utils/calculateWinner";

export const Board: React.FC = () => {
  const {
    squares,
    setSquares,
    currentPlayerIndex,
    setCurrentPlayerIndex,
    winner,
    setWinner,
    isTie,
    setIsTie,
    incrementTotalGames,
  } = useGameContext();

  const { players, setPlayers } = usePlayerContext();

  const currentPlayer = players[currentPlayerIndex];

  const handleClick = (index: number): void => {
    if (squares[index] || winner) return;

    setSquares((prevSquares) => {
      const newSquares = prevSquares.map((square, i) =>
        i === index ? currentPlayer.symbol : square
      );

      const winnerSymbol = calculateWinner(newSquares);
      if (winnerSymbol) {
        setWinner((prevWinner) => {
          const winningPlayer = players.find(
            (player) => player.symbol === winnerSymbol
          )!;
          setPlayers((prevPlayers) =>
            prevPlayers.map((player) =>
              player.symbol === winnerSymbol
                ? { ...player, wins: player.wins + 1 }
                : player
            )
          );
          incrementTotalGames();
          return winningPlayer;
        });
      } else if (newSquares.every((square) => square !== null)) {
        setIsTie(true);
        incrementTotalGames();
      } else {
        setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % 2);
      }

      return newSquares;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full flex justify-start">
        <Status winner={winner} currentPlayer={currentPlayer} />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {squares.map((square, index) => (
          <Cell key={index} value={square} onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};
