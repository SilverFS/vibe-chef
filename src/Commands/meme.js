const Command = require('../Structures/Command.js');
const config = require('../Data/config.json');
const fs = require('fs');


module.exports = new Command({
    name: 'meme',
    description: 'Fetches a random meme from Shiruvaaa-servers.',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args="", client) {
        // First argument after command
        var amount = args[1];
        //Filecount and web-address for access
        //const dir = config['file-location'];
        const dir = './src/assets/videos';
        url = config['file-web-address'];
        const filecount = fs.readdirSync(dir).length;
        
        randomfile = Math.floor(Math.random() * filecount);
        //Random insert
        if (!amount || isNaN(amount)) return message.channel.send(`${url + randomfile}.mp4`);
        //Invalid arg    
        if (amount > filecount || amount < 1) return message.channel.send(`Try a number __between__ 1 and ${filecount + 1}`)
        //Specific insert
        if (amount <= filecount) return message.channel.send(`${url + amount}.mp4`);      
    }
});