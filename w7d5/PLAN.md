# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

# Data Structures

# questionIndex

```jsx
const index = 0;
```

# Points!

```jsx
const points = {
  good: 0,
  total: 0,
};
```

# Question

```jsx
const question = {
  id: 0,
  question: "...",
  answer: "...",
};
```

# Questions

```jsx
const questions = [question, question];
```

# HTML Structure

- body
  - header
    - h1 title
  - main
    - section
      - h1 score %
      - button do quiz
      - button add question
    - section
      - form
        - p question
        - input answer
        - button
    - section
      - form
        - input question
        - input answer
        - button

# Component Structure

- App
  - Header
  - Result
  - QuestionForm
  - NewQuestionForm
