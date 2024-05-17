import React, { useState, useEffect } from "react";
import { TicTacToe } from "./views/TicTacToe";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export const Main = () => {
  const [dark, setDark] = useState(true); // Default to dark mode

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    document.body.style.backgroundColor = dark ? "#2d3748" : "#f7fafc";
  }, [dark]);

  return (
    <>
      <div
        className="absolute top-4 right-4 cursor-pointer text-2xl"
        onClick={toggleDarkMode}
      >
        {dark ? <IoIosSunny color="grey" /> : <IoIosMoon color="grey" />}
      </div>

      <TicTacToe />
    </>
  );
};
