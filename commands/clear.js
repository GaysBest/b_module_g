const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args, tools) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('```fix\nИзвините, вы не можете использовать эту команду.```');
  message.delete();
  if (isNaN(args[0])) return message.channel.send('**Пожалуйста, укажите правильное число.**');
  if (args[0] > 100) return message.channel.send('**Пожалуйста, укажите число от 1 до 100.**');
  message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Успешно удалено \`${messages.size}/${args[0]}\` сообщений.**`).then(msg => msg.delete('1000')));
  const log = message.guild.channels.find('name', 'action-log');	
  var embed = new Discord.RichEmbed()
    .setColor(0x000000)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)	
    .setDescription(`**Модерация сообщений**`)	
    .addField(`Модератор:`, `${message.author}`)
    .addField(`Канал:`, message.channel)
    .addField(`Кол-во сообщений:`, `${args[0]}`)
    .setFooter(`${message.author.id}`)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp()
  log.send({embed});
}
