import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import { pickRandomEmoji } from "../helpers/gameHelpers";

export default function Game(props) {
  const [computerCheating, setComputerCheating] = useState(true);
  const [winner, setWinner] = useState(undefined);

  const getGameResult = (playerChoice) => {
    setTimeout(() => {
      if (computerCheating) {
        setWinner("computer");
      }

      const computerChoice = pickRandomEmoji(Math.random());

      const winnerChoices = {
        "🗿": "🌳",
        "🪓": "🗿",
        "🌳": "🪓",
      };

      if (playerChoice === computerChoice) {
        setWinner("tie");
      } else if (winnerChoices[playerChoice] === computerChoice) {
        setWinner("computer");
      } else {
        setWinner("player");
      }
    }, 2000);
  };

  const toggleCheating = () => setComputerCheating(!computerCheating);

  return (
    <div>
      <main className="game">
        <Computer computerCheating={computerCheating} toggleCheating={toggleCheating} />
        <Player getGameResult={getGameResult} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
