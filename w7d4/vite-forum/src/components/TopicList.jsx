import { extractTopicInfo } from "../helpers/topicHelpers";

import TopicListItem from "./TopicListItem";

export default function TopicList(props) {
  const { topics, users, addReplyToTopic } = props;

  const parsedTopics = topics.map((topic) => {
    const upgradedTopic = extractTopicInfo(topic, users);

    return (
      <TopicListItem
        {...upgradedTopic}
        key={topic.id}
        addReplyToTopic={addReplyToTopic}
      />
    );
  });
  return <main>{parsedTopics}</main>;
}
