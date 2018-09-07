const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args, tools) => {

  if (isNaN(args[0])) return message.channel.send('**Пожалуйста, укажите правильное число.**');
  if (args[0] > 100) return message.channel.send('**Пожалуйста, укажите число от 1 до 100.**');
  message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`**Успешно удалено \`${messages.size}/${args[0]}\` сообщений.**`).then(msg => msg.delete('1000')))
}
