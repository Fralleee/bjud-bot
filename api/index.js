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

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

/**
 * Gotta see someone 'bout a trout
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 */
module.exports = async (request, response) => {
  // Only respond to POST requests
  if (request.method === "POST") {
    // Verify the request
    const signature = request.headers["x-signature-ed25519"];
    const timestamp = request.headers["x-signature-timestamp"];
    const rawBody = await getRawBody(request);

    const isValidRequest = verifyKey(rawBody, signature, timestamp, process.env.PUBLIC_KEY);

    if (!isValidRequest) {
      console.error("Invalid Request");
      return response.status(401).send({ error: "Bad request signature " });
    }

    // Handle the request
    const message = request.body;

    // Handle PINGs from Discord
    if (message.type === InteractionType.PING) {
      console.log("Handling Ping request");
      response.send({
        type: InteractionResponseType.PONG,
      });
    } else if (message.type === InteractionType.APPLICATION_COMMAND) {
      // Handle our Slash Commands
      switch (message.data.name.toLowerCase()) {
        case SLAP_COMMAND.name.toLowerCase():
          response.status(200).send({
            type: 4,
            data: {
              content: "Hello!",
            },
          });
          console.log("Slap Request");
          break;
        case INVITE_COMMAND.name.toLowerCase():
          response.status(200).send({
            type: 4,
            data: {
              content: INVITE_URL,
              flags: 64,
            },
          });
          console.log("Invite request");
          break;
        default:
          console.error("Unknown Command");
          response.status(400).send({ error: "Unknown Type" });
          break;
      }
    } else {
      console.error("Unknown Type");
      response.status(400).send({ error: "Unknown Type" });
    }
  }
};
