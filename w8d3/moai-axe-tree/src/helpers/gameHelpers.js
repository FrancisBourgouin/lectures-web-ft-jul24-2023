export const pickOppositeChoice = (playerChoice) => {
  const list = ["🪓", "🗿", "🌳", "🪓"];
  const emojis = ["😭", "😎", "🙃", "🤯", "🍿", "🥔", "🥶", "🙈"];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  if (!playerChoice && typeof playerChoice !== "number") {
    throw new Error("WHAT IS WRONG WITH YOU! WHERE IS MY EMOJI");
  }

  if (list.indexOf(playerChoice) === -1) {
    return `I am sooooOOOooOoOoOooo judging you. Almost as much as if you coded on master. ${randomEmoji}`;
  }

  // const winnerChoices = {
  //   "🗿": "🌳",
  //   "🪓": "🗿",
  //   "🌳": "🪓",
  // };

  // return winnerChoices[playerChoice];
  const playerIndex = list.indexOf(playerChoice);

  return list[playerIndex + 1];
};

export const pickRandomEmoji = (seed) => {
  const list = ["🪓", "🗿", "🌳"];

  const randomIndex = Math.round(seed * 13348631613713 + 55 / 1337) % 3;

  return list[randomIndex];
};
