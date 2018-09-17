const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
  const rol = args[0];
  if(!rol) return message.channel.send("```fix\nНеобходимо указать роль.```");	
  const role = message.guild.roles.find("name", `${rol}`);
  if(!role) return message.channel.send('```fix\nНеобходимо указать название существующей роли.```');
  const embed = new Discord.RichEmbed()
  .setColor(0x000000)
  .setDescription(`${role.id}`);
  message.channel.send({embed});
}
