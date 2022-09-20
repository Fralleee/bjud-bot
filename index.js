import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits } from "discord.js";

import { gameMatching } from "./game.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent],
});

const gotta = ["öl", "kebab", "pizza", "taco"];

client.on("messageCreate", async message => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();
  const game = gameMatching(content);
  if (game) {
    message.channel.send(game);
  } else if (content === "?öl") {
    message.channel.send("När får man hämta öl egentligen?");
  } else if (content === "!öl") {
    message.channel.send("Nu får man hämta öl!!!");
  } else if (content.includes("bjuds det") || content.includes("om det bjuds")) {
    message.channel.send("Klart det bjuds");
  } else if (gotta.some(val => content.includes(val))) {
    message.channel.send("Ååh va gott!");
  }
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);
