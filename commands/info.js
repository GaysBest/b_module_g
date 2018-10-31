const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
const server = args[0];
var jailip = "https://gametracker.com/server_info/46.174.52.2:27204/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var drip = "https://gametracker.com/server_info/46.174.52.14:27209/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var ff2ip = "https://gametracker.com/server_info/46.174.52.20:27272/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var dmip = "https://gametracker.com/server_info/46.174.52.3:27269/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
    if(server === "jail") {
        message.channel.send(jailip);
    }
    if(server === "dr") {
        message.channel.send(drip);
    }
    if(server === "ff2") {
        message.channel.send(ff2ip);
    }
    if(server === "dm") {
        message.channel.send(dmip);
    }
}
