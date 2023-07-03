import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { gameActions } from "./logic/gameActions.js";
import { wordMatches } from "./logic/wordMatches.js";
import { botMention } from "./logic/botMentions.js";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent],
});

const matchers = [gameActions, wordActions, wordMatches];

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();
  for (const matcher of matchers) {
    const result = matcher(content);
    if (result) {
      message.channel.send(result);
      return;
    }
  }

  const botMentionMessage = botMention(message, client.user.id);
  if (botMentionMessage) {
    message.channel.send(botMentionMessage);
    return;
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
