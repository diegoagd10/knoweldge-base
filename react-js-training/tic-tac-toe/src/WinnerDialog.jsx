import PropTypes from 'prop-types'

export function WinnerDialog ({ winner, restartGame }) {
  if (winner === null) return null

  const message = winner === 'Draw' ? "It's a Draw!" : `Player ${winner} wins`

  const handleClick = () => restartGame()

  return (
    <section className='winner'>
      <article className='winner-dialog'>
        <header className='winner-message'>
          <h2>{message}</h2>
        </header>
        <footer>
          <button
            className='button'
            onClick={handleClick}
          >
            New Game
          </button>
        </footer>
      </article>
    </section>
  )
}

WinnerDialog.propTypes = {
  winner: PropTypes.string,
  restartGame: PropTypes.func
}
