const Event = require("../Structures/Event.js");




module.exports = new Event("messageCreate", (client, message) => {
    // Doesn't return on itself
    if (message.author.bot) return;

    if (!message.content.startsWith(client.prefix)) return;

    // Defines an argument of a command
    const args = message.content.substring(client.prefix.length).split(/ +/);

    // Declares that the name of the command equals a command name
    const command = client.commands.find(cmd => cmd.name == args[0]);

    // Returns a reply if the command is not recognized
    if (!command) return message.reply(`*${args[0]}* is not a command I vibe with!`)

    const permission = message.member.permissions.has(command.permission, true); // , true

    if (!permission) 
        return message.reply(
            `You do not have the permission \`${command.permission}\` to check this vibe!`
        );
    
    command.run(message, args, client);
});