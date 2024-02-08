import { useState } from 'react'
import { Instructions } from './Instructions'
import { Square } from './Square'
import { Turns } from './Turns'
import { WinnerDialog } from './WinnerDialog'
import { PLAYERS, TEXTS } from './constants'
import {
  checkDraw,
  checkWinner,
  clearGame,
  loadBoard,
  loadPlayer,
  loadWinner,
  saveGame,
  saveWinner
} from './logic/board'

function App () {
  // useState is asynchronous, so local storage is accessed asynchronously
  const [player, setPlayer] = useState(loadPlayer)
  const [board, setBoard] = useState(loadBoard)
  const [winner, setWinner] = useState(loadWinner)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)

    const nextPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(nextPlayer)

    saveGame(newBoard, nextPlayer)

    if (checkWinner(newBoard)) {
      setWinner(player)
      saveWinner(player)
      return
    }

    if (checkDraw(newBoard)) {
      setWinner(TEXTS.DRAW)
      saveWinner(TEXTS.DRAW)
    }
  }

  const restartGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setPlayer(PLAYERS.X)
    clearGame()
  }

  return (
    <main className='container'>
      <h1>Tic-tac-toe</h1>
      <Instructions restartGame={restartGame} />
      <section className='board'>
        {board.map((player, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {player}
            </Square>
          )
        })}
      </section>
      <Turns player={player} />
      <WinnerDialog
        winner={winner}
        restartGame={restartGame}
      />
    </main>
  )
}

export default App
