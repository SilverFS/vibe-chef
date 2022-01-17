const Event = require("../Structures/Event.js");




module.exports = new Event("ready", (client) => {
    console.log("The Vibe Chef is ready to vibe! 😎");
});