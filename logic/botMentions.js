export function botMention(message, clientId) {
  const isMessageForBot = message.mentions.users.find(user => user.id === clientId);
  if (isMessageForBot) {
    return "Mjaa, det är väl sådär på en höft.";
  }
}
