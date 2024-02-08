import PropTypes from 'prop-types'

export function Square ({ index, updateBoard, children }) {
  const handleClick = () => updateBoard(index)

  return (
    <article
      className='square'
      onClick={handleClick}
    >
      {children}
    </article>
  )
}

Square.propTypes = {
  index: PropTypes.number,
  updateBoard: PropTypes.func,
  children: PropTypes.string
}
