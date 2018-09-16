const Discord = require("discord.js");
exports.run = async (client, message) => {
    const roleID = "477611608420515843";
    const bynd = message.guild.roles.get(roleID).members;
    const roleID1 = "477612032603062276";
    const abynd = message.guild.roles.get(roleID1).members;
    const embed = new Discord.RichEmbed()
    .setFooter(`${message.author.id}`)	
    .setColor(0x000000)
    .setTimestamp()
    .setAuthor('BGRU Discord Ranks')
    .setDescription('**БУНД** - `${bynd.size}`\n**АНТИ-БУНД** - `${abynd.size}`');
    message.channel.send({embed});
}
