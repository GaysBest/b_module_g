const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["334885914021068800", "477573374705401857"].includes(r.id)) )	
    return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
      
  let member = message.mentions.members.first();	
  if(!member)	
    return message.channel.send("```fix\nПожалуйста, укажите правильного участника.```");	
  if(!member.bannable) 	
    return message.channel.send("```fix\nЯ не могу забанить этого участника.```");	
   let reason = args.slice(1).join(' ');	
  if(!reason) reason = "Причина не указана.";	
      
  member.ban(reason)	
  message.channel.send("```fix\nБан успешно добавлен.```");	
  const log = message.guild.channels.find('name', 'action-log');
  var embed = new Discord.RichEmbed()
  .setDescription('**Бан участника**')
  .addField('Модератор:', message.author, true)
  .addField('Пользователь:', `${member}`, true)
  .addField('Причина:', reason, true)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Ban`, message.guild.iconURL)
  .setTimestamp()
  log.send({ embed });
  member.send({ embed });
}
