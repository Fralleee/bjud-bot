import { Message } from "discord.js"

export function botMention(message: Message, clientId: string | undefined): string | undefined {
  if (!clientId) {
    return
  }

  const isMessageForBot = message.mentions.users.find(user => user.id === clientId)
  if (isMessageForBot) {
    return "Mjaa, det är väl sådär på en höft."
  }
}
