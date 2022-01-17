const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: 'clear',
    description: 'Clears an amount of messages.',
    permission: "MANAGE_MESSAGES",

    // The actual functionality, ping
    async run(message, args, client) {
        // First argument after command
        const amount = args[1];

        // If amount isn't stated or amount isn't a number
        if (!amount || isNaN(amount)) 
            return message.reply(
                `${
                    // Ternary if-statement
                    amount == undefined ? "Nothing" : amount
                } is not a valid number!`
            );

        // Converts string into number
        const amountParsed = parseInt(amount);
        if (amount < 2) return message.reply("Please provide a number between 2 and 100.")
        if (amountParsed > 100) return message.reply("You cannot clear more than 100 messages at once!");

        message.channel.bulkDelete(amountParsed);
        const msg = await message.channel.send(`Cleared ${amountParsed} messages!`)
        // Timer for alert removal
        setTimeout(() => msg.delete(), 5000);
    }
});