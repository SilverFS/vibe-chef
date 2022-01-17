// Clears console on run (use npm run dev)
console.clear();

// Handels basic client functionalities
const Client = require("./Structures/Client.js");
// Includes the config file
const config = require("./Data/config.json");
// Initiates a new client
const client = new Client();

// Starts the client, aka the bot
client.start(config.token);