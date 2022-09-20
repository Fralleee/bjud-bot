import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages],
});

client.on("messageCreate", async message => {
  console.log(message);

  if (message.content === "bjuds det?") {
    message.channel.send("Jadå! 1");
  } else {
    message.channel.send("Najj! 1");
  }
});

client.on("message", async message => {
  console.log(message);

  if (message.content === "bjuds det?") {
    message.channel.send("Jadå! 2");
  } else {
    message.channel.send("Najj! 2");
  }
});

client.login(process.env.DISCORD_TOKEN);
