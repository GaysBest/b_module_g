const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
const server = args[0];
const jailembed = new Discord.RichEmbed()
    .setImage(`http://cache.gametracker.com/server_info/46.174.52.2:27204/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png`)
    .setColor(0x000000);
const drembed = new Discord.RichEmbed()
    .setImage(`http://cache.gametracker.com/server_info/46.174.52.14:27209/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png`)
    .setColor(0x000000);
const ff2embed = new Discord.RichEmbed()
    .setImage(`http://cache.gametracker.com/server_info/46.174.52.20:27272/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png`)
    .setColor(0x000000);
const dmembed = new Discord.RichEmbed()
    .setImage(`http://cache.gametracker.com/server_info/46.174.52.3:27269/b_160_400_0_FFFFFF_FFFFFF_FFFFFF_0D0E12_0_1_0.png`)
    .setColor(0x000000);
    
    if(server === "jail") {
        message.channel.send(jailembed);
    }
    if(server === "dr") {
        message.channel.send(drembed);
    }
    if(server === "ff2") {
        message.channel.send(ff2embed);
    }
    if(server === "dm") {
        message.channel.send(dmembed);
    }
}
