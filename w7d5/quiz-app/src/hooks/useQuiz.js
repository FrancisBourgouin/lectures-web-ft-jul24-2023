import useWow from "./useWow";
import { useState } from "react";

export default function useQuiz(initialValues) {
  const [questions, setQuestions] = useState(initialValues);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState({ points: 0, total: 0 });
  const [mode, setMode] = useState("VIEW");

  const { sayWow } = useWow();

  const currentQuestion = questions[questionIndex];

  const validateAnswer = (formData) => {
    const { answer } = formData;

    const updatedScore = { ...score };
    updatedScore.total += 1;
    if (currentQuestion.answer === answer) {
      updatedScore.points += 1;
      sayWow();
    }

    setScore(updatedScore);
    setQuestionIndex((questionIndex + 1) % questions.length);
  };

  const createQuestion = (formData) => {
    const newQuestion = {
      id: questions.length,
      question: formData.question,
      answer: formData.answer,
    };

    const updatedQuestions = [...questions, newQuestion];

    setQuestions(updatedQuestions);
  };

  const setViewMode = (mode) => {
    sayWow();
    setMode(mode);
  };

  return {
    score,
    currentQuestion,
    validateAnswer,
    createQuestion,
    setViewMode,
    mode,
  };
}
