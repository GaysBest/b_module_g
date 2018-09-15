const Discord = require("discord.js");	
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Вы не можете это использовать.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Не удалось найти этого участника.");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Указанный участник имеет столько же или больше прав, чем вы.");
  let reason = args.join(" ").slice(22);

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
  .addField("Юзер:", `<@${wUser.id}>`)
  .addField("Канал:", message.channel)
  .addField("Кол-во варнов:", warns[wUser.id].warns)
  .addField("Причина", reason)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Warn`, message.guild.iconURL)
  .setTimestamp();
  log.send({ embed });

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`id`, "477599026817138691");

    let mutetime = "45m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> получил временный мут.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> мут истек!`)
    }, ms(mutetime))
  }
}
