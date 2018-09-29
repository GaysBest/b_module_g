const Discord = require("discord.js");	
const client = new Discord.Client();
const moment = require("moment");
exports.run = (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));	
    if(!rUser) return message.channel.send('```fix\nНе удалось найти этого пользователя.```');	
    let rreason = args.join(" ").slice(22);	
     let embed = new Discord.RichEmbed()	
    .setAuthor(`BGRU Discord Report`, message.guild.iconURL)	
    .setColor(0x000000)	
    .addField(`Жалуются на:`, `${rUser}`)	
    .addField(`Жалоба от:`, `${message.author}`)	
    .addField(`Канал:`, message.channel)	
    .addField(`Время:`, `${moment.utc(message.createdAt).format('D.M.YY, HH:mm')}`)	
    .addField(`Причина:`, rreason);	
     let log = message.guild.channels.find('id', '482951025469423647');	
    message.delete();	
    log.send({ embed });
}
