export function WinnerDialog({ winner, restartGame }) {
  const message = winner === "Draw" ? "It's a Draw!" : `Player ${winner} wins`;

  const handleClick = () => restartGame();

  return (
    <section className="winner">
      <article className="winner-dialog">
        <header className="winner-message">
          <h2>{message}</h2>
        </header>
        <footer>
          <button className="winner-restart-btn" onClick={handleClick}>
            New Game
          </button>
        </footer>
      </article>
    </section>
  );
}
