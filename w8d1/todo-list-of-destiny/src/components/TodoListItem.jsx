// TodoListItem (task, if completed, date created)
// TodoListItem (completion of a todo)

export default function TodoListItem(props) {
  const { task, isCompleted, dateCreated, toggleComplete } = props;

  const date = new Date(dateCreated);

  return (
    <li>
      <h1>{task}</h1>
      {isCompleted && <h2>Task successful!</h2>}
      {!isCompleted && <h2>Task pending!</h2>}
      <p>{date.toUTCString()}</p>
      {isCompleted && (
        <button onClick={toggleComplete}>Mark as incomplete</button>
      )}
      {!isCompleted && (
        <button onClick={toggleComplete}>Mark as complete</button>
      )}
    </li>
  );
}
