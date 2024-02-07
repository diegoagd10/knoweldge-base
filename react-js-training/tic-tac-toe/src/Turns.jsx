import { PLAYERS } from "./Constants";

export function Turns({ player }) {
  return (
    <section className="turns">
      <section className={player === PLAYERS.X ? "is_active" : ""}>
        {PLAYERS.X}
      </section>
      <section className={player === PLAYERS.O ? "is_active" : ""}>
        {PLAYERS.O}
      </section>
    </section>
  );
}
