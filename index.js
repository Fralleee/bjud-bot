import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();
  if (content.includes("bjuds det") || content.includes("om det bjuds")) {
    message.channel.send("Klart det bjuds");
  } else if (content.includes("öl")) {
    message.channel.send("Gärna, om det bjuds.");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
