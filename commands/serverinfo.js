const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    let guild = message.channel.guild;
    let embed = new Discord.RichEmbed()
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')
    .setColor(0x000000)
    .addField("Регион:", guild.region, true)
    .addField("Создан:", guild.createdAt.toLocaleString(), true)
    .addField("Владелец:", `${guild.owner.user.tag} - ${guild.owner.id}`)
    .addField("Участников:", `${guild.memberCount - guild.members.filter(m => m.user.bot).size} (${guild.members.filter(m => m.user.bot).size} ботов)`, true)
    .addField("Ролей:", guild.roles.size, true)
    .setTimestamp()
    .setDescription('**Информация о сервере**')
    .setAuthor('BGRU Discord ServerInfo')
    .setFooter(`${message.author.id}`);
    message.channel.send({embed});
}
