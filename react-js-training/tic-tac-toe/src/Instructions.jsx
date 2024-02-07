import { PLAYERS } from "./Constants";

export function Instructions() {
  return (
    <section className="instructions-container">
      <h2>How to Play</h2>
      <ul className="instructions-description">
        <li>{PLAYERS.X} - First Player</li>
        <li>{PLAYERS.O} - Second Player</li>
      </ul>
    </section>
  );
}
