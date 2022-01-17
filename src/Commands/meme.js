const Command = require('../Structures/Command.js');
const request = require('request');
const config = require('../Data/config.json');

module.exports = new Command({
    name: 'meme',
    description: 'Fetches a random meme from Shiruvaaa-servers.',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args="", client) {
        // First argument after command
        const amount = args[1];
        maxfile = 381;
        randomfile = Math.floor(Math.random() * 381);
        url = config['meme-location']



        //
        if (Number.isInteger(amount)) {
            if (amount <= 381) return message.channel.send(`${url + amount}.mp4`);
        } 
        else if (Number.isInteger(false)) return message.channel.send('You have to provide a number.');
        
        if (!amount || isNaN(amount)) return message.channel.send(`${url + randomfile}.mp4`);
        
        /* return message.reply(
            `${
                // Ternary if-statement
                amount == undefined ? "Nothing" : amount
            } is not a valid number!`
        ); */
        
    }
});