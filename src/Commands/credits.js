const Command = require('../Structures/Command.js');
const Discord = require('discord.js');
const djson = require('../../package.json');

module.exports = new Command({
    name: 'credits',
    description: 'Displays the creator of The Vibe Chef',
    permission: "SEND_MESSAGES",

    // The actual functionality, ping
    async run(message, args, client) {
        const embed = new Discord.MessageEmbed();

        embed
            .setTitle("Bot Credits:")
            .setAuthor(
                message.author.username, 
                message.author.avatarURL({ dynamic: true }), "https://shiruvaaa.net/"
            )
            .setDescription(
                "Heya, My name is Shiruvaaa 😊\nI'm the creator of The Vibe Chef!\nCheck out my autobiography below."
            )
            .setColor("YELLOW")
            .setThumbnail("https://cdn.discordapp.com/app-icons/918957932278874132/12643d4f18528b448d671ae4b9f3331c.png")
            .setTimestamp(message.createdTimestamp) //miliseconds
            .setImage("https://shiruvaaa.net/assets/img/shiruvaaa-logo.png")
            .addFields({
                name: "Bot Version",
                value: djson.version,
                inline: true,
            },
            {
                name: "DiscordJS Version",
                value: djson.dependencies['discord.js'],
                inline: true,
            });
        
        //Sends and array of embeds
        message.reply({ embeds: [embed] });
    }
});