const Discord = require("discord.js");	
const client = new Discord.Client();
const moment = require("moment");
const ms = require("ms");
exports.run = (client, message, args) => {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
if(!tomute) return message.channel.send("```fix\nНе удалось найти этого участника.```");
if(tomute.roles.some(r=>["477599026817138691"].includes(r.id)) )	
return message.channel.send("```fix\nЭтот участник уже заглушен.```");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nНевозможно заглушить этого участника.```");
let muterole = message.guild.roles.find('id', "477599026817138691");
if(!muterole){
  try{
    muterole = message.guild.createRole({
      name: "muted",
      color: "#000000",
      permissions:[]
    })
    message.guild.channels.forEach(async (channel, id) => {
      channel.overwritePermissions(muterole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  }catch(e){
    console.log(e.stack);
  }
}
let mutetime = args[1];
if(!mutetime) return message.channel.send("```fix\nВы должны указать время.```");
let reason = args.slice(1).join(' ');	
  if(!reason) reason = "Причина не указана.";	

tomute.addRole(muterole.id);
  const log = message.guild.channels.find('name', 'action-log');
  const embed = new Discord.RichEmbed()
  .setDescription('**Выдача мута**')
  .addField('Модератор:', message.author, true)
  .addField('Пользователь:', `${args[0]}`, true)
  .addField('Канал:', message.channel, true)
  .addField('Время и причина:', reason, true)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Mute`, message.guild.iconURL)
  .setTimestamp()
  log.send({ embed });
  tomute.send({ embed });
message.channel.send(`<@${tomute.id}> был заглушен на ${ms(ms(mutetime))}.`);

setTimeout(function(){
  let mutetime = args[1];
  const log = message.guild.channels.find('name', 'action-log');
  const embed = new Discord.RichEmbed()
  .setDescription('**Истечение мута**')
  .addField('Модератор:', message.author, true)
  .addField('Пользователь:', `${args[0]}`, true)
  .addField('Канал:', message.channel, true)
  .addField('Время:', `${ms(ms(mutetime))}`, true)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Unmute`, message.guild.iconURL)
  .setTimestamp()
  log.send({ embed });
  tomute.removeRole(muterole.id);
  message.channel.send(`<@${tomute.id}> мут истек!`);
}, ms(mutetime));
}
