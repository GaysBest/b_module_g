const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["477573374705401857", "334885914021068800"].includes(r.id)) )	
      return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
    	
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);	
    if(!member)	
      return message.channel.send("```fix\nПожалуйста, укажите правильного участника.```");	
    if(!member.kickable) 	
      return message.channel.send("```fix\nЯ не могу кикнуть этого участника.```");	
     let reason = args.slice(1).join(' ');	
    if(!reason) reason = "Причина не указана.";	
    	
    await member.kick(reason)	
    message.channel.send("```fix\nПользователь успешно кикнут.```");	
    const log = message.guild.channels.find('name', 'action-log');
    const embed = new Discord.RichEmbed()
    .setDescription('**Кик участника**')
    .addField('Модератор:', message.author, true)
    .addField('Пользователь:', `${member}`, true)
    .addField('Канал:', message.channel, true)
    .addField('Причина:', reason, true)
    .setFooter(`${message.author.id}`)	
    .setColor(0x000000)
    .setAuthor(`BGRU Discord Kick`, message.guild.iconURL)
    .setTimestamp()
    log.send({ embed });
    member.send({ embed });
}