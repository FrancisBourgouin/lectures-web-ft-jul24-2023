import useForm from "../hooks/useForm";

export default function QuestionForm(props) {
  const { onSubmit, question } = props;
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  const initialValues = { answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(
    initialValues,
    onSubmit
  );

  return (
    <section className="QuestionForm">
      <form onSubmit={handleSubmit}>
        <p>{question}</p>
        <input
          type="text"
          name="answer"
          placeholder="Enter your answer"
          value={formData.answer}
          onChange={handleChange}
        />
        <button>Answer!</button>
      </form>
    </section>
  );
}
