const Discord = require("discord.js");
const fetch = require("node-fetch");

// Create a new Discord client
const client = new Discord.Client();

// Set the bot's token
const token = "YOUR_BOT_TOKEN_HERE";

// Set the prefix for the bot's commands
const prefix = "!";

// Define the bot's command handler
client.on("message", async message => {
  // Ignore messages that don't start with the prefix
  if (!message.content.startsWith(prefix)) return;

  // Split the message into a command and its arguments
  const [command, ...args] = message.content.slice(prefix.length).split(" ");

  // Handle the "joke" command
  if (command === "joke") {
    // Check if the user is in a voice channel
    if (!message.member.voice.channel) {
      return message.channel.send("You must be in a voice channel to use this command.");
    }

    // Get a list of the members in the user's voice channel
    const members = message.member.voice.channel.members;

    // Check if the voice channel has at least one member
    if (members.size === 0) {
      return message.channel.send("There are no members in your voice channel.");
    }

    // Choose a random member from the voice channel
    const member = members.random();

    // Fetch a random joke from the Joke API
    const response = await fetch("https://sv443.net/jokeapi/v2/joke/Any");
    const json = await response.json();

    // Check if the joke is a single line or two lines
    if (json.type === "single") {
      // Output the single line joke
      return message.channel.send(`<@${member.id}>, ${json.joke}`);
    } else if (json.type === "twopart") {
      // Output the two line joke
      return message.channel.send(`<@${member.id}>, ${json.setup}
        ${json.delivery}`);
    }
  }
});

// Log the bot in
client.login(token);
