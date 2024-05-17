import { SquareType, XorO } from '../types';

export const calculateWinner = (squares: SquareType[]): XorO | null => {
  
  const lines =generateRowColumnPairs(3)

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};


function generateRowColumnPairs(n: number): number[][] {
  const result: number[][] = [];
  const mainDiagonal: number[] = [];
  const antiDiagonal: number[] = [];

  for (let i = 0; i < n; i++) {
      const row: number[] = [];
      const col: number[] = [];

      for (let j = 0; j < n; j++) {
          row.push(i * n + j); 
          col.push(j * n + i); 
      }

      result.push(row);
      result.push(col);

      mainDiagonal.push(i * n + i); 
      antiDiagonal.push(i * n + (n - 1 - i)); // anti-diagonal index
  }

  result.push(mainDiagonal);
  result.push(antiDiagonal);

  return result;
}
