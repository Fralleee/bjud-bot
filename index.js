import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
import { gameMatching } from "./game.js";
import { wordMatching } from "./word.js";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  const content = message.content.toLowerCase();
  const game = gameMatching(content);
  if (game) {
    message.channel.send(game);
    return;
  }

  const word = wordMatching(content);
  if (word) {
    message.channel.send(word);
    return;
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
