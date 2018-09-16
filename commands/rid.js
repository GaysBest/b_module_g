const Discord = require("discord.js");
exports.run = async (client, args, message) => {
  const rol = args[0];
  if (!rol) return message.channel.send("```fix\nНеобходимо указать роль.```");	
  const role = message.guild.roles.find("name", `${rol}`);
  message.channel.send(`${role.id}`);
}
