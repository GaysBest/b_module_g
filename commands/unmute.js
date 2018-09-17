const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
if(!tomute) return message.channel.send("```fix\nНе удалось найти этого участника.```");
if(!tomute.roles.some(r=>["477599026817138691"].includes(r.id)) )	
return message.channel.send("```fix\nЭтот участник не заглушен.```");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nНевозможно заглушить этого участника.```");
let muterole = message.guild.roles.find('id', "477599026817138691");
  const log = message.guild.channels.find('name', 'action-log');
  const embed = new Discord.RichEmbed()
  .setDescription('**Снятие мута**')
  .addField('Модератор:', message.author, true)
  .addField('Пользователь:', `${args[0]}`, true)
  .addField('Канал:', message.channel, true)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Unmute`, message.guild.iconURL)
  .setTimestamp()
  log.send({ embed });
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> был разглушен.`);
}
