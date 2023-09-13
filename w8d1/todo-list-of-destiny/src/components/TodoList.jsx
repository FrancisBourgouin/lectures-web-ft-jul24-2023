// TodoList ([] of todoObj)
// App will give TodoListItem a fct `toggleCompletion(id)`
import TodoListItem from "./TodoListItem";

export default function TodoList(props) {
  const { todos, completedTodos, toggleComplete } = props;

  const parsedTodos =
    Array.isArray(todos) &&
    todos.map((todo) => (
      <TodoListItem
        task={todo.task}
        isCompleted={completedTodos.includes(todo.id)}
        dateCreated={todo.dateCreated}
        key={todo.id}
        toggleComplete={() => toggleComplete(todo.id)}
      />
      // <TodoListItem {...todo} key={todo.id} />
    ));

  return <ul>{parsedTodos}</ul>;
}
