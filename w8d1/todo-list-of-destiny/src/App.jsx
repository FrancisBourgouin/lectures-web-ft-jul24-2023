import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { todoObj } from "./data/todoData";

function App() {
  const [todos, setTodos] = useState(todoObj);
  const [completedTodos, setCompletedTodos] = useState([1]);

  useEffect(() => {
    const report = () => console.log("You clicked!");
    document.addEventListener("click", report);
    console.log("Component rerendered");

    return () => document.removeEventListener("click", report);
  }, []);

  const todoList = Object.values(todos);

  const addTodo = (task) => {
    const today = new Date();
    const newTodo = {
      id: todoList.length + 1,
      task,
      dateCreated: today.toUTCString(),
      isCompleted: false,
    };

    setTodos({ ...todos, [newTodo.id]: newTodo });
  };

  const toggleCompletion = (todoId) => {
    const newTodos = { ...todos };
    const newTodo = { ...todos[todoId] };

    newTodo.isCompleted = !newTodo.isCompleted;

    newTodos[todoId] = newTodo;

    setTodos(newTodos);
  };

  const toggleCompletionWithArray = (todoId) => {
    const isCompleted = completedTodos.includes(todoId);

    if (isCompleted) {
      const newCompletedTodos = completedTodos.filter(
        (todo) => todo !== todoId
      );
      setCompletedTodos(newCompletedTodos);
    } else {
      const newCompletedTodos = [...completedTodos, todoId];
      setCompletedTodos(newCompletedTodos);
    }
  };

  const toggleCompletionPartay = (todoId) => {
    toggleCompletion(todoId);
    toggleCompletionWithArray(todoId);
  };

  // const completedTodos =
  //   Array.isArray(todoList) &&
  //   todoList.filter((todo) => todo.isCompleted).length;

  return (
    <>
      <Header completedTodos={completedTodos.length} />
      <main>
        <TodoList
          todos={todoList}
          completedTodos={completedTodos}
          toggleComplete={toggleCompletionPartay}
        />
        <TodoForm onSubmit={addTodo} />
      </main>
    </>
  );
}

export default App;
