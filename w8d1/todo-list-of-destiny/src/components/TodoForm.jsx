// App will give TodoForm a fct `addTodo(task)`
// TodoForm (State: formdata)

import { useState } from "react";

export default function TodoForm(props) {
  const { onSubmit } = props;

  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(task);
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}
