const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send("```fix\nНе удалось найти этого участника.```");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nВы не можете предупредить этого участника.```");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("**Предупреждение**")
  .addField("Юзер:", `<@${wUser.id}>`)
  .addField("Канал:", message.channel)
  .addField("Кол-во предупреждений:", warns[wUser.id].warns)
  .addField("Причина:", reason)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Warn`, message.guild.iconURL)
  .setTimestamp();

  let warnchannel = message.guild.channels.find(`name`, "action-log");
  if(!warnchannel) return message.reply("```fix\nНе удалось найти лог.```");

  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 3){
    let muterole = message.guild.roles.find(`id`, "477599026817138691");
    if(!muterole) return message.reply("```fix\nВы должны создать роль для Заключенных.```");

    let mutetime = "45m";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> получил временный мут.`);

    setTimeout(function(){
      wUser.removeRole(muterole.id)
      message.reply(`<@${wUser.id}> мут истек!`)
    }, ms(mutetime))
  }
}
