import "./App.css";
import Header from "./components/Header";
import NewQuestionForm from "./components/NewQuestionForm";
import QuestionForm from "./components/QuestionForm";
import Result from "./components/Result";

import { questionData } from "./data/questionData";
import useQuiz from "./hooks/useQuiz";

function App() {
  const {
    score,
    currentQuestion,
    validateAnswer,
    createQuestion,
    mode,
    setViewMode,
  } = useQuiz(questionData);
  return (
    <>
      <Header />
      <main>
        <Result score={score} setViewMode={setViewMode} />
        {mode === "VIEW" && (
          <QuestionForm {...currentQuestion} onSubmit={validateAnswer} />
        )}
        {mode === "CREATE" && <NewQuestionForm onSubmit={createQuestion} />}
      </main>
    </>
  );
}

export default App;
