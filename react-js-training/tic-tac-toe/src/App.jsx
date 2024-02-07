import { useState } from "react";
import { Instructions } from "./Instructions";
import { Square } from "./Square";
import { Turns } from "./Turns";
import { WinnerDialog } from "./WinnerDialog";
import { PLAYERS, WINNERS_COMBOS } from "./Constants";

function checkWinner(board) {
  for (const combo of WINNERS_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function App() {
  const [moves, setMoves] = useState(0);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(PLAYERS.X);
  const [board, setBoard] = useState(Array(9).fill(null));

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newMove = moves + 1;
    setMoves(newMove);

    if (checkWinner(newBoard)) {
      setWinner(player);
      return;
    }

    if (newMove === 9) {
      setWinner("Draw");
      return;
    }

    const nextPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
    setPlayer(nextPlayer);
  };

  const restartGame = () => {
    setMoves(0);
    setWinner(null);
    setBoard(Array(9).fill(null));
    setPlayer(PLAYERS.X);
  };

  return (
    <main className="container">
      <h1>Tic-tac-toe</h1>
      <Instructions />
      <section className="board">
        {board.map((player, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {player}
            </Square>
          );
        })}
      </section>
      <Turns player={player} />
      {winner && <WinnerDialog winner={winner} restartGame={restartGame} />}
    </main>
  );
}

export default App;
