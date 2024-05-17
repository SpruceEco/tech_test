import React from "react";
import { FaRedo } from "react-icons/fa";
import { useGameContext } from "../../context/GameProvider";

export const Controls: React.FC = () => {
  const { handleReset } = useGameContext();

  return (
    <div
      className="cursor-pointer text-2xl text-blue-800 hover:text-blue-400 dark:text-gray-500 dark:hover:text-gray-800"
      onClick={handleReset}
    >
      <FaRedo />
    </div>
  );
};
