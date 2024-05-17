import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Player } from "../types";

interface PlayerContextType {
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayerContext = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
};

interface PlayerProviderProps {
  children: ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const initialPlayers: Player[] = [
    {
      name: "Player X",
      symbol: "X",
      wins: 0,
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    },
    {
      name: "Player O",
      symbol: "O",
      wins: 0,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    },
  ];

  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  return (
    <PlayerContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayerContext.Provider>
  );
};
