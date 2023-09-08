import { useState } from "react";

export default function ReplyForm(props) {
  const { onSubmit } = props;

  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (answer.length > 0) {
      onSubmit(answer);
      setAnswer("");
    }
  };

  return (
    <form className="ReplyForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="answer"
        placeholder="Enter your answer"
        onChange={handleChange}
        value={answer}
      />
      <button>Add an answer</button>
    </form>
  );
}
