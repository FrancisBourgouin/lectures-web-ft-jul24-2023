import ReplyList from "./ReplyList";
import ReplyForm from "./ReplyForm";

export default function TopicListItem(props) {
  const { question, replies, username, profile_url, addReplyToTopic, id } =
    props;
  return (
    <article className="TopicListItem">
      <header>
        <h1>{question}</h1>
        <div
          className="profile"
          style={{ backgroundImage: `url(${profile_url})` }}
        ></div>
        <h2>Question by: {username}</h2>
      </header>
      <ReplyList replies={replies} />
      <ReplyForm onSubmit={(answer) => addReplyToTopic(id, answer)} />
    </article>
  );
}
