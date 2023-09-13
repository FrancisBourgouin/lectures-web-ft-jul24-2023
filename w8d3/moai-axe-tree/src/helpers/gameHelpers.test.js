// - pickOppositeChoice
// - pickRandomEmoji (maybe too easy!)
// - pickWinner
import { pickOppositeChoice, pickRandomEmoji } from "./gameHelpers";

describe("pickOppositeChoice", () => {
  it("should return a choice + a judgy message if we receive a choice that is not valid", () => {
    const invalidChoice = "🥔";

    const result = pickOppositeChoice(invalidChoice);
    const expectedResult = "I am sooooOOOooOoOoOooo judging you.";

    // expect(result).toBe(expectedResult);
    expect(result).toMatch(/sooooOOOooOoOoOooo/);
  });
  it("should throw an error if we don't receive a choice", () => {
    const throwyFunction = () => pickOppositeChoice();

    expect(throwyFunction).toThrow();
    expect(throwyFunction).toThrow("WHAT IS WRONG WITH YOU! WHERE IS MY EMOJI");
  });
  it("should return the opposite if we receive a valid choice", () => {
    const list = ["🗿", "🪓", "🌳"];
    const winnerChoices = {
      "🗿": "🌳",
      "🪓": "🗿",
      "🌳": "🪓",
    };

    for (const choice of list) {
      const result = pickOppositeChoice(choice);
      const expectedResult = winnerChoices[choice];
      expect(result).toBe(expectedResult);
    }
  });
});
describe("pickRandomEmoji", () => {
  it("should return a valid value", () => {
    const matchs = {
      2: "🗿",
      60: "🪓",
      61: "🌳",
    };

    for (const seed in matchs) {
      const result = pickRandomEmoji(seed);
      const expectedResult = matchs[seed];

      expect(result).toEqual(expectedResult);
    }
  });
});
describe("pickWinner", () => {
  xit("should return the winner when we have two valid inputs", () => {
    //
  });
  xit("should return a special message when we have two identical inputs", () => {
    //
  });
  xit("should throw an error if we don't receive a or all choices", () => {
    //
  });
});
