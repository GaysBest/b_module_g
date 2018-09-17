const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, args, message) => {
  const rol = args[0];
  if (!rol) return message.channel.send("```fix\nНеобходимо указать роль.```");	
  const role = message.guild.roles.find("name", `${rol}`);
  const embed = new Discord.RichEmbed()
  .setColor(0x000000)
  .setDescription(`${rol.id}`);
  message.channel.send({embed});
}
