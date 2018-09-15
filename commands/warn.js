const Discord = require("discord.js");	
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("```fix\nВы не можете это использовать.```");
  const wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("```fix\nНе удалось найти этого участника.```");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("```fix\nУказанный участник имеет столько же или больше прав, чем вы.```");
  const reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
  const log = message.guild.channels.find('name', 'action-log');
  const embed = new Discord.RichEmbed()
  .setDescription("**Предупреждениe**")
  .addField('Модератор:', message.author)
  .addField("Пользователь:", `<@${wUser.id}>`)
  .addField("Канал:", message.channel)
  .addField("Кол-во варнов:", warns[wUser.id].warns)
  .addField("Причина", reason)
  .setFooter(`${wUser.id.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Warn`, message.guild.iconURL)
  .setTimestamp();
  log.send({ embed });
  wUser.send({ embed });

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`id`, "477599026817138691");

    let mutetime = "45m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> получил временный мут.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.channel.send(`<@${wUser.id}> мут истек!`)
  const log = message.guild.channels.find('name', 'action-log');
  const embed = new Discord.RichEmbed()
  .setDescription('**Выдача мута**')
  .addField('Пользователь:', `<@${wUser.id}>`)
  .addField("Причина", "Предупреждения 3/3")
  .setFooter(`${wUser.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Mute`, message.guild.iconURL)
  .setTimestamp()
  log.send({ embed });
  wUser.send({ embed });
    }, ms(mutetime))
  }
}
