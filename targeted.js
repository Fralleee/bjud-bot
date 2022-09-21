export function targetedMessage(message) {
  const isMessageForBot = message.mentions.users.find(user => user.id === client.user.id);
  if (isMessageForBot) {
    return "Mjaa, det är väl sådär på en höft.";
  }
}
