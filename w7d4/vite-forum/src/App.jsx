import "./App.scss";
import Header from "./components/Header";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";
import ReplyListItem from "./components/ReplyListItem";
import TopicList from "./components/TopicList";
import TopicListItem from "./components/TopicListItem";

import { extractTopicInfo } from "./helpers/topicHelpers";

import { topicsArr } from "./data/topics";
import { usersObj } from "./data/users";
import { useState } from "react";
function App() {
  // const topic = extractTopicInfo(topicsArr[1], usersObj);

  const [topics, setTopics] = useState(topicsArr);
  const [users, setUsers] = useState(usersObj);

  const addReplyToTopicButObj = (topicId, answer) => {
    const newReply = {
      content: answer,
      userId: Math.ceil(Math.round() * 35),
    };

    const updatedTopic = {
      ...topics[topicId],
      replies: [...topics[topicId].replies, newReply],
    };

    setTopics({ ...topics, [topicId]: updatedTopic });
  };

  const addReplyToTopic = (topicId, answer) => {
    const newReply = {
      content: answer,
      userId: Math.ceil(Math.random() * 35),
    };
    const updatedTopics = [...topics];
    const updatedTopic = updatedTopics.find((topic) => topicId === topic.id);
    const updatedTopicId = updatedTopics.findIndex(
      (topic) => topicId === topic.id
    );
    const updatedReplies = [...updatedTopic.replies, newReply];

    updatedTopic.replies = updatedReplies;
    updatedTopics[updatedTopicId] = updatedTopic;

    setTopics(updatedTopics);
  };

  return (
    <>
      <Header />
      <TopicList
        topics={topics}
        users={users}
        addReplyToTopic={addReplyToTopic}
      />
    </>
  );

  // return <ReplyForm onSubmit={(answer) => console.log(answer)} />;
  // return <ReplyListItem {...topic.replies[0]} />;
  // return <ReplyList replies={topic.replies} />;
  // return <TopicListItem {...topic} />;
}

export default App;
