import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", async message => {
  console.log(message);

  if (message.content === "bjuds det?") {
    message.author.send("Jadå!");
  } else {
    message.author.send("???");
  }
});

// bjud

// bjudsdet

//
