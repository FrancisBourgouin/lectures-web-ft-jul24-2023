export default function Result(props) {
  const { winner } = props;
  return (
    <footer>
      {!winner && <h2>Waiting for your choice!</h2>}
      {winner === "player" && <h2>Winner! Gagnant! Victor of the destiny test!</h2>}
      {winner === "tie" && <h2>Do you prefer a single windsor or a double ?</h2>}
      {winner === "computer" && (
        <h2>You have been exterminated! GLORY TO THE DALEKS :D Master bot wins!!</h2>
      )}
    </footer>
  );
}
