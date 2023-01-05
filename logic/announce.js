client.on("message", async message => {
  // Ignore messages that don't start with the prefix
  if (!message.content.startsWith(prefix)) return;

  // Split the message into a command and its arguments
  const [command, ...args] = message.content.slice(prefix.length).split(" ");

  // Handle the "announce" command
  if (command === "announce") {
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

    // Check if any members are streaming
    const streams = members.filter(member => member.user.presence.activity && member.user.presence.activity.type === "STREAMING");

    // Check if any members are streaming
    if (streams.size === 0) {
      return message.channel.send("No members are currently streaming.");
    }

    // Announce the streamers in the channel
    return message.channel.send(`The following members are currently streaming: ${streams.map(member => `<@${member.id}>`).join(", ")}`);
  }
});
