import Game from "../Game";
import { render, fireEvent, waitForElement } from "@testing-library/react";

describe("Game integration tests", () => {
  it("should let the computer win all the time if the computer is cheating", () => {
    const { queryByText, getByText, queryByTestId } = render(<Game />);

    const waiting = queryByText("Waiting for your choice!");
    expect(waiting).toBeInTheDocument();

    const button = queryByTestId("moai-statue");
    fireEvent.click(button);

    waitForElement(() =>
      queryByText("You have been exterminated! GLORY TO THE DALEKS :D Master bot wins!!")
    ).then(() => {
      const result = queryByText(
        "You have been exterminated! GLORY TO THE DALEKS :D Master bot wins!!"
      );
      expect(result).toBeInTheDocument();
    });
  });
  it("should have a random result if the computer is not cheating", () => {
    const { queryByText, getByText, queryByTestId } = render(<Game />);

    const waiting = queryByText("Waiting for your choice!");
    expect(waiting).toBeInTheDocument();

    const robot = queryByTestId("robot");

    expect(robot).toHaveClass("cheating");
    fireEvent.click(robot);
    expect(robot).not.toHaveClass("cheating");

    const button = queryByTestId("moai-statue");
    fireEvent.click(button);

    const waitingAgain = queryByText("Waiting for your choice!");

    expect(waitingAgain).not.toBeInTheDocument();
  });
});
