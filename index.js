import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { gameMatching } from "./game.js";
import { wordMatching } from "./word.js";
import { pleaseNoMatching } from "./pleaseno.js";
import { targetedMessage } from "./targeted.js";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.MessageContent],
});

const matchers = [gameMatching, wordMatching, pleaseNoMatching];

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

  const targetMessage = targetedMessage(message, client.user.id);
  if (targetMessage) {
    message.channel.send(targetMessage);
    return;
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
