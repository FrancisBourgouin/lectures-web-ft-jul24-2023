export default function ReplyListItem(props) {
  const { profile_url, username, content } = props;
  return (
    <li className="ReplyListItem">
      <div
        className="profile"
        style={{ backgroundImage: `url(${profile_url})` }}
      ></div>
      <h2>{username}</h2>
      <p>{content}</p>
    </li>
  );
}
