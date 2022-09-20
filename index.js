import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(
    JSON.stringify({
      subject: "Leetcode Rank",
      status: "leetcode",
      color: "orange",
    })
  );

  res.json({
    subject: "leetcode",
    status: "814,050",
    color: "orange",
  });
});
// app.use('/leetcode', leetcode);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages],
});

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  if (message.content === "bjuds det?") {
    message.channel.send("Jadå! 1");
  } else {
    message.channel.send("Najj! 1");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: "online",
    activity: {
      name: "with my code",
      type: "WATCHING",
    },
  });
});

client.login(process.env.DISCORD_TOKEN);
