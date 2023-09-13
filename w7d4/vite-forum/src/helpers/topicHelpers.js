export const extractTopicInfo = (topic, usersObj) => {
  const userInfo = usersObj[topic.userId];

  const upgradedTopic = { ...userInfo, ...topic };

  const upgradedReplies = upgradedTopic.replies.map((reply) => ({
    ...reply,
    ...usersObj[reply.userId],
  }));

  upgradedTopic.replies = upgradedReplies;

  console.log(upgradedTopic);
  return upgradedTopic;
};

// const bob = { a: 5, a: 1, a: "highlander" };
