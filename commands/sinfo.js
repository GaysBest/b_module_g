const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
var serv = args[0];
if(serv === "jail" || serv === "1") {
  message.channel.send(`http://img.myarena.ru/8789/560.png`);
}
if(serv === "dr" || serv === "2") {
  message.channel.send(`http://img.myarena.ru/8237/560.png`);
}
if(serv === "ff2" || serv === "3") {
  message.channel.send(`http://img.myarena.ru/4053/560.png`);
}
}
