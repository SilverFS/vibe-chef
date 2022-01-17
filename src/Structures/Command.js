// Imports discord.js and the Client class
const Discord = require('discord.js');
const Client = require('./Client.js');

/**
 * 
 * @param {Discord.Message} message 
 * @param {string[]} args 
 * @param {Client} client 
 */
function RunFunction(message, args, client) {}

class Command {
    // Defines the options which every command will use
    constructor(options) {
        /**
         * @typedef {{name: string, description: string, permission: keyof Discord.PermissionString, run: RunFunction}} CommandOptions
         * @param {CommandOptions} options
         */
        this.name = options.name;
        this.description = options.description;
        this.permission = options.permission;
        this.run= options.run;
    }
}

// Exports the Command class
module.exports = Command;