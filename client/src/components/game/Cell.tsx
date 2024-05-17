import React from "react";
import { SquareType } from "../../types";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

interface SquareProps {
  value: SquareType;
  onClick: () => void;
}

export const Cell: React.FC<SquareProps> = ({ value, onClick }) => {
  const renderIcon = () => {
    if (value === "X") {
      return <IoIosRadioButtonOff color="yellow" />;
    } else if (value === "O") {
      return <IoCloseOutline />;
    }
    return null;
  };

  return (
    <button
      className={`w-32 h-32 flex items-center justify-center text-6xl font-bold shadow-lg rounded-xl bg-blue-200 hover:bg-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700`}
      onClick={onClick}
    >
      {renderIcon()}
    </button>
  );
};
