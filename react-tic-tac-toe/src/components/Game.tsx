import { Board } from "./Board";
import "./../styles/Game.scss";
import { useEffect, useState } from "react";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [winner, setWinner] = useState("");
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  useEffect(() => {
    handleWinner();
  }, [history, stepNumber]);

  const calculateWinner = (boardSquares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        boardSquares[a] &&
        boardSquares[a] === boardSquares[b] &&
        boardSquares[a] === boardSquares[c]
      ) {
        return boardSquares[a];
      }
    }
    return null;
  };

  const handleWinner = () => {
    let winner = calculateWinner(history[stepNumber]);
    if (winner) {
      setWinner(winner);
    } else {
      setWinner("");
    }
  };

  const handleClick = (i: number) => {
    let currentHistory = history.slice(0, stepNumber + 1);
    let current = currentHistory[currentHistory.length - 1];
    let squares = current.slice();

    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? "X" : "O";

    setHistory(currentHistory.concat([squares]));
    setXIsNext(!xIsNext);
    setStepNumber(currentHistory.length);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={history[stepNumber]} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>
          {winner !== "" ? (
            <>Winner is {winner}</>
          ) : (
            <>Next player: {xIsNext ? "X" : "O"}</>
          )}
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
