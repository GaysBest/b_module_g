const Discord = require("discord.js");
exports.run = async (client, message) => {
    const roleID = "477611608420515843";
    const bynd = message.guild.roles.get(roleID).members;
    const roleID1 = "477612032603062276";
    const abynd = message.guild.roles.get(roleID1).members;
    const roleID2 = "500014542642872333";
    const old = message.guild.roles.get(roleID2).members;
    var embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setAuthor('BGRU Discord Ranks')
    .setDescription(`**Со смыслом** - ${bynd.size} участников\n**Без смысла** - ${abynd.size} участников\n**ОЛД** - ${old.size} участников`)
    .setFooter('bg.rank <название ранга> для входа/выхода');
    message.channel.send({embed});
}
