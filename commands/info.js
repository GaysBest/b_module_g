const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
const server = args[0];
var jailip = "http://cache.gametracker.com/server_info/46.174.52.2:27204/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var drip = "http://cache.gametracker.com/server_info/46.174.52.14:27209/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var ff2ip = "http://cache.gametracker.com/server_info/46.174.52.20:27272/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
var dmip = "http://cache.gametracker.com/server_info/46.174.52.3:27269/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png";
const jurl = `${jailip}=forDiscord=${Date.now()}`
const drurl = `${drip}=forDiscord=${Date.now()}`
const ff2url = `${ff2ip}=forDiscord=${Date.now()}`
const dmurl = `${dmip}=forDiscord=${Date.now()}`
    if(server === "jail") {
        message.channel.send(jurl);
    }
    if(server === "dr") {
        message.channel.send(drurl);
    }
    if(server === "ff2") {
        message.channel.send(ff2url);
    }
    if(server === "dm") {
        message.channel.send(dmurl);
    }
}
