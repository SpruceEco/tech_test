export type XorO = 'X' | 'O'
export type SquareType = XorO | null;

export interface Player {
  name: string;
  symbol: XorO;
  wins: number;
  avatar: string;
}