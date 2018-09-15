const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args, tools) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('```fix\nИзвините, вы не можете использовать эту команду.```')

  if (isNaN(args[0])) return message.channel.send('**Пожалуйста, укажите правильное число.**');
  if (args[0] > 100) return message.channel.send('**Пожалуйста, укажите число от 1 до 100.**');
  message.channel.bulkDelete(args[0] + 1)
    .then(messages => message.channel.send(`**Успешно удалено \`${messages.size}/${args[0]}\` сообщений.**`).then(msg => msg.delete('1000')))
}
