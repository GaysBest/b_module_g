const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["477573374705401857", "334885914021068800", "477604685721763872"].includes(r.id)) )	
    return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
      
   const deleteCount = parseInt(args[0], 10);	
      
   if(!deleteCount || deleteCount < 2 || deleteCount > 100)	
    return message.channel.send("```fix\nПожалуйста, укажите число между 2 и 100.```");	
      
   const fetched = await message.channel.fetchMessages({limit: deleteCount});	
  message.channel.bulkDelete(fetched);	
   const log = message.guild.channels.find('name', 'action-log');	
  const embed = new Discord.RichEmbed()	
    .setColor(0x000000)	
    .setDescription("**Удаление сообщений**")	
    .addField("Модератор:", `${message.author}`)	
    .addField("Канал:", message.channel)	
    .addField("Удалено:", `${args[0]}`)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)	
    .setFooter(`${message.author.id}`)	
    .setTimestamp();	
  log.send({ embed });
}