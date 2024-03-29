const PLAYERS = {
  X: '❌',
  O: '🟡'
}

const WINNERS_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
]

const TEXTS = {
  DRAW: 'Draw'
}

export { PLAYERS, WINNERS_COMBOS, TEXTS }
