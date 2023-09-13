import ReplyListItem from "./ReplyListItem";

export default function ReplyList(props) {
  const { replies } = props;

  const parsedReplies =
    Array.isArray(replies) &&
    replies.map((reply, index) => <ReplyListItem key={index} {...reply} />);

  return <ul>{parsedReplies}</ul>;
}
