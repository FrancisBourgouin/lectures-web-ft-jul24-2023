import useForm from "../hooks/useForm";

export default function NewQuestionForm(props) {
  const { onSubmit } = props;
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");

  const initialValues = { question: "", answer: "" };

  const { formData, handleChange, handleSubmit } = useForm(
    initialValues,
    onSubmit
  );

  return (
    <section className="NewQuestionForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          placeholder="Enter the question"
          onChange={(event) => handleChange(event)}
          value={formData.question}
        />
        <input
          type="text"
          name="answer"
          placeholder="Enter the answer"
          onChange={handleChange}
          value={formData.answer}
        />
        <button>Add Question!</button>
      </form>
    </section>
  );
}
