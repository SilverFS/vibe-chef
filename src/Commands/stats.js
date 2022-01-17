const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
var os = require('os-utils');
const djson = require('../../package.json');

module.exports = new Command({
    name: 'stats',
    description: 'Displays the statistics of The Vibe Chef',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        
        embed
            .setTitle("Bot Stats")
            .setColor("GREEN")
            .addFields({
                name: "Bot Version",
                value: `Version: ${djson.version} \nDiscordJS Version: ${djson.dependencies['discord.js']} \nOwner: ${message.author.username}`,    
                inline: true,
            },
            {
                name: "System Info",
                value: `OS Platform: ${os.platform()} \nCPU Usage: 0% \nUptime: ${os.sysUptime().toFixed(3)}`, 
                inline: true,
            });
        
        //Sends and array of embeds
        message.reply({ embeds: [embed] });
    }
});