const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
const guild = message.channel.guild;
const rol = args[0];
const role = guild.roles.find("name", `${rol}`);
if(!role) return message.channel.send("```fix\nНе удалось найти эту роль.```");
    let embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .addField("Роль:", `${role.name} - ${role.id}`)
    .addField("Позиция:", role.position, true)
    .addField("Цвет:", role.hexColor, true)
    .addField("Участников:", role.members.size, true)
    .setFooter(`${message.author.id}`)
    .setDescription('**Информация о роли**')
    .setAuthor('BGRU Discord RoleInfo')
    .setTimestamp();
    message.channel.send({embed});
}
