const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
    if(!message.member.roles.some(r=>["477573374705401857", "334885914021068800"].includes(r.id)) )	
      return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
    	
    var member = message.mentions.members.first();
    let reason = args.slice(1).join(' ');	
    if(!reason) reason = "Причина не указана.";
    member.kick().then((member) => {
        message.channel.send("```fix\nПользователь успешно кикнут.```");
    }).catch(() => {
        message.channel.send("```fix\nУ меня недостаточно прав на это.```");
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
})
}
