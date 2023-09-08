export default function Result(props) {
  const { score, setViewMode } = props;

  const setModeToCreate = () => setViewMode("CREATE");
  return (
    <section className="Result">
      {!!score.total && (
        <h1>Your score is {Math.round((score.points / score.total) * 100)}%</h1>
      )}
      <button onClick={setModeToCreate}>Create a question</button>
      <button onClick={() => setViewMode("VIEW")}>Answer the questions</button>
    </section>
  );
}
