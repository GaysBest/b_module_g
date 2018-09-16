const Discord = require("discord.js");
const superagent = require("superagent");
const moment = require("moment");
const temps = moment(message.createdTimestamp).format("LLLL");
exports.run = (client, args, message) => {
  const rol = message.content.split(" ").slice(1).join(" ");
  const role = message.guild.roles.find("name", `${rol}`)
  if(!role) return message.channel.send('```fix\nВы должны указать роль.```');
  const roleinfoEmbed = new Discord.RichEmbed()
  .setColor(0x000000)
  .addField('Название:', role.name, true)
  .addField('ID:', role.id, true)
  .addField('Кол-во участников:', role.members.size, true)
  .addField('Цвет:', role.hexColor, true)
  .addField('Пингуемая:', role.mentionable ? '\nДа' : 'Нет', true)
  .addField('Дата создания:', moment(role.createdAt).format("LL"), true)
  .setAuthor('BGRU Discord Role Info')
  .setDescription('**Информация о роли**')
  .setTimestamp()
  message.channel.send(roleinfoEmbed)
}
