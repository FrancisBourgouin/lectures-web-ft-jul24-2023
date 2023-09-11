# Todo List

Full Stack Todo List

Have a list of todos, task, category (optional), is completed. Add new todos

## Data

### Todo

Should be an object

```jsx
const todo = {
  id: 1,
  task: "",
  isCompleted: true,
  dateCreated: "2023-09-11 10:56",
};
```

### CompletedTodos

```jsx
const completedTodos = [1, 2, 3];
```

### TodoList

Should be an object

```jsx
const todoList = {
  1: todo,
  2: todo,
};
```

## Mock Data

```jsx

```

## Structure

### HTML

- body
  - header
    - h1 title
    - h2 X tasks completed
  - main
    - ul
      - li
        h1 task
        h2 completed
        p date created
        button complete / incomplete
    - form
      input task
      button

### Components

- App
  - Header
  - TodoList
    - TodoListItem
  - TodoForm

## Component Data

### Props (Static)

- App (No props! EVAR)
  - Header (Number of completed tasks)
  - TodoList ([] of todoObj)
    - TodoListItem (task, if completed, date created)
  - TodoForm

### State

- App (State: Todos, completed[])
  - Header (State: initial amount of completed tasks)
  - TodoList
    - TodoListItem
  - TodoForm (State: formdata)

### Props (Data changes)

- App
  - Header
  - TodoList
    - TodoListItem (completion of a todo)
  - TodoForm (add a todo)

App will give TodoForm a fct `addTodo(task)`
App will give TodoListItem a fct `toggleCompletion(id)`
