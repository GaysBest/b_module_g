const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
exports.run = async (client, message, args) => {
const guild = message.channel.guild;
const rol = args[0];
    	let role;
    if (message.mentions.roles.first()) {
      role = message.mentions.roles.first();
    } else {
        role = guild.roles.find("name", `${rol}`;
    }
if(!role) return message.channel.send("```fix\nНе удалось найти эту роль.```");
    let embed = new Discord.RichEmbed()
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')
    .setColor(0x000000)
    .addField("Роль:", `${role.name}`, true)
    .addField("Позиция:", role.position, true)
    .addField("Цвет:", role.hexColor, true)
    .addField("Участников:", role.members.size, true)
    .setFooter(`${role.id} • ${moment.utc(role.createdAt).format('D.M.Y')}`)
    .setDescription('**Информация о роли**')
    .setAuthor('BGRU Discord RoleInfo')
    message.channel.send({embed});
}
