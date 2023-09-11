// - Header (Number of completed tasks)
// - Header (State: initial amount of completed tasks)

import { useState } from "react";

export default function Header(props) {
  const { completedTodos } = props;
  const [initialCompleted, setInitialCompleted] = useState(completedTodos);

  const newCompleted = completedTodos - initialCompleted;
  return (
    <header>
      <h1>Super Todo Of Destiny</h1>
      {!!newCompleted && <h2>{newCompleted} new tasks completed</h2>}
    </header>
  );
}
