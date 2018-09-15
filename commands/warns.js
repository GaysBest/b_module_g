const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("```fix\nНе удалось найти этого участника.```");
  let warnlevel = warns[wUser.id].warns;
  const warns = new Discord.RichEmbed()
  .setDescription('**Предупреждения**')
  .addField('Участник:', `<@${wUser.id}>`)
  .addField('Предупреждения:', `${warnlevel}`)
  .setFooter(`${message.author.id}`)	
  .setColor(0x000000)
  .setAuthor(`BGRU Discord Warns`, message.guild.iconURL)
  .setTimestamp()
  message.channel.send({warns});

}