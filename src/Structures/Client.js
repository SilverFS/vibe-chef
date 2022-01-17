// Imports discord.js and the Command class
const Discord = require("discord.js");
const Command = require("./Command.js");
const Event = require("./Event.js");
const config = require("../Data/config.json");
// Initiates fileSystem
const fs = require("fs");


// Lists Discord's Intents of the bot
const intents = new Discord.Intents(32767);

class Client extends Discord.Client {
    constructor() {
        // super makes a new instance of the thing we extended
        // We use the intents here, without user mentions
        super({ intents, allowedMentions: { repliedUser: false } });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();

        // Specifies the prefix
        this.prefix = config.prefix;
    }

    start(token) {
        //Reads the specified directory in search of .js files, aka: the command handler
        fs.readdirSync("./src/Commands")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Command}
                 */
                const command = require(`../Commands/${file}`);
                console.log(`Command ${command.name} loaded ✅`);
                this.commands.set(command.name, command);
        });

        fs.readdirSync("./src/Events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../Events/${file}`);
                console.log(`Event ${event.event} loaded ✅`);
                // Grabs event from class, run function and binds to null. Prepends client to function.
                this.on(event.event, event.run.bind(null, this));
            });

        this.login(token);
    }
}

// Exports the client class
module.exports = Client;