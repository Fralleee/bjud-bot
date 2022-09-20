import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent],
});

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content.includes("bjuds det") || message.content.includes("om det bjuds")) {
    message.channel.send("Klart det bjuds");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
