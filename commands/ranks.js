const Discord = require("discord.js");
exports.run = async (client, message) => {
    const roleID = "477611608420515843";
    const bynd = message.guild.roles.get(roleID).members;
    const roleID1 = "477612032603062276";
    const abynd = message.guild.roles.get(roleID1).members;
    const roleID2 = "500014542642872333";
    const old = message.guild.roles.get(roleID2).members;
    const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setAuthor('BGRU Discord Ranks')
    .setDescription(`**Двоечник** - ${bynd.size} участников\n**Отличник** - ${abynd.size} участников\n**ОЛД** - ${old.size} участников`)
    .setFooter('`bg.rank` <название ранга> для вступления');
    message.channel.send({embed});
}
