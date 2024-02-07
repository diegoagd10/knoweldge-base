export function Square({ index, updateBoard, children }) {
  const handleClick = () => updateBoard(index);

  return (
    <article className="square" onClick={handleClick}>
      {children}
    </article>
  );
}
