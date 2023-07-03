import dotenv from "dotenv"
import { Client, GatewayIntentBits, Message } from "discord.js"
import { wordMatches } from "./logic/wordMatches"
import { botMention } from "./logic/botMentions"

dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ]
})

type Matcher = (content: string) => string | undefined

const matchers: Matcher[] = [wordMatches]

client.on("messageCreate", async (message: Message) => {
  if (message.author.bot) return

  const content = message.content.toLowerCase()
  for (const matcher of matchers) {
    const result = matcher(content)
    if (result) {
      await message.channel.send(result)
      return
    }
  }

  const botMentionMessage = botMention(message, client?.user?.id)
  if (botMentionMessage) {
    await message.channel.send(botMentionMessage)
    return
  }
})

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`)
})

client.login(process.env.DISCORD_TOKEN)
