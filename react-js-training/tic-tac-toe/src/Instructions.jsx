import PropTypes from 'prop-types'
import { PLAYERS } from './constants'

export function Instructions ({ restartGame }) {
  const handleClick = () => restartGame()

  return (
    <section className='instructions-container'>
      <h2>How to Play</h2>
      <ul className='instructions-description'>
        <li>{PLAYERS.X} - First Player</li>
        <li>{PLAYERS.O} - Second Player</li>
      </ul>
      <button
        className='button'
        onClick={handleClick}
      >
        New Game
      </button>
    </section>
  )
}

Instructions.propTypes = {
  restartGame: PropTypes.func
}
