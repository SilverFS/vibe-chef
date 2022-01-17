const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'ping',
    description: 'Shows the ping of the bot!',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args, client) {
        // Sends a pong without reply
        message.channel.send(`Pong: ${client.ws.ping} ms.`);
    }
});