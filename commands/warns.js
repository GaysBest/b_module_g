const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
exports.run = async (client, message, args) => {
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  const warnlevel = warns[`${wUser.id}`].warns;
  if(!wUser) return message.channel.send("```fix\nНе удалось найти этого участника.```");
  message.channel.send(`<@${wUser.id}> имеет ${warnlevel} предупреждений.`);
}
