const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
var serv = args[0];
if(serv === "jail" || serv === "1") {
  const jembed = new Discord.RichEmbed()
    .setColor("#000000")
    .setImage("http://img.myarena.ru/8789/560.png");
  message.channel.send(jembed);
}
}
