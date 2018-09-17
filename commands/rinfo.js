const Discord = require("discord.js");
const superagent = require("superagent");
const moment = require("moment");
const temps = moment(message.createdTimestamp).format("LLLL");
module.exports.run = async (client, message, args) => {
  const rol = args[0];
  if(!rol) return message.channel.send("```fix\nНеобходимо указать роль.```");	
  const role = message.guild.roles.find("name", `${rol}`);
  if(!role) return message.channel.send('```fix\nНеобходимо указать название существующей роли.```');
  const roleinfoEmbed = new Discord.RichEmbed()
  .setColor(0x000000)
  .addField('Название:', role.name, true)
  .addField('ID:', role.id, true)
  .addField('Кол-во участников:', role.members.size, true)
  .addField('Цвет:', role.hexColor, true)
  .addField('Пингуемая:', role.mentionable ? '\nДа' : 'Нет', true)
  .addField('Дата создания:', moment(role.createdAt).format("LL"), true)
  .setFooter(`${role.id}`)
  .setTimestamp()
  .setDescription('**Описание роли**')
  .setAuthor(`${role.name}`);
  message.channel.send(roleinfoEmbed)
}
