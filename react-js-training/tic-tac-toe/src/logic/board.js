import { PLAYERS, WINNERS_COMBOS } from '../constants'

export function checkWinner (board) {
  for (const combo of WINNERS_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true
    }
  }
  return false
}

export function checkDraw (board) {
  return board.every((cell) => cell !== null)
}

export function saveGame (newBoard, player) {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('player', player)
}

export function saveWinner (winner) {
  window.localStorage.setItem('winner', winner)
}

export function loadBoard () {
  // Local stoage retrives the data asynchronusly
  const board = JSON.parse(window.localStorage.getItem('board'))
  return board || Array(9).fill(null)
}

export function loadPlayer () {
  const player = window.localStorage.getItem('player')
  return player || PLAYERS.X
}

export function loadWinner () {
  const winner = window.localStorage.getItem('winner')
  return winner || null
}

export function clearGame () {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('player')
  window.localStorage.removeItem('winner')
}
