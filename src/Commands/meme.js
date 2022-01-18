const Command = require('../Structures/Command.js');
const config = require('../Data/config.json');

module.exports = new Command({
    name: 'meme',
    description: 'Fetches a random meme from Shiruvaaa-servers.',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args="", client) {
        // First argument after command
        var amount = args[1];
        
        url = config['meme-location'];
        var maxNumber = 381
        randomfile = Math.floor(Math.random() * maxNumber);
        if (!amount || isNaN(amount)) return message.channel.send(`${url + randomfile}.mp4`);       
        if (amount > maxNumber || amount < 1) return message.channel.send(`Try a number between 1 and ${maxNumber + 1}`)
        if (amount <= maxNumber) return message.channel.send(`${url + amount}.mp4`);      
    }
});