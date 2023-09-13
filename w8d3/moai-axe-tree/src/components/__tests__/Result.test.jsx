import Result from "../Result";
import { render } from "@testing-library/react";

describe("Result component", () => {
  it("should show the waiting message when there is no result", () => {
    //
    const { getByText } = render(<Result />);
    const expectedMessage = "Waiting for your choice!";

    const element = getByText(expectedMessage);

    // console.log(element);

    expect(element).toBeInTheDocument();
    // expect(result).toBe(expectedResult);
  });
  it("should show the player winning message if the player wins", () => {
    const { getByText, queryByText } = render(<Result winner="player" />);
    const waitingMessage = "Waiting for your choice!";
    const expectedMessage = "Winner! Gagnant! Victor of the destiny test!";

    const waiting = queryByText(waitingMessage);
    const winner = getByText(expectedMessage);

    // console.log(element);

    expect(waiting).not.toBeInTheDocument();
    expect(winner).toBeInTheDocument();
  });
  it("should show the computer winning message if the computer wins", () => {
    const { getByText, queryByText } = render(<Result winner="computer" />);
    const waitingMessage = "Waiting for your choice!";
    const expectedMessage =
      "You have been exterminated! GLORY TO THE DALEKS :D Master bot wins!!";

    const waiting = queryByText(waitingMessage);
    const winner = getByText(expectedMessage);

    // console.log(element);

    expect(waiting).not.toBeInTheDocument();
    expect(winner).toBeInTheDocument();
  });
  it("should show the tie message if the player and computer ties", () => {
    const { getByText, queryByText } = render(<Result winner="tie" />);
    const waitingMessage = "Waiting for your choice!";
    const expectedMessage = "Do you prefer a single windsor or a double ?";

    const waiting = queryByText(waitingMessage);
    const winner = getByText(expectedMessage);

    // console.log(element);

    expect(waiting).not.toBeInTheDocument();
    expect(winner).toBeInTheDocument();
  });
});
