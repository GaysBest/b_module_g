const Discord = require("discord.js");
exports.run = (client, args, message) => {
  const rol = args.join(" ").slice(22);	
  if (!rol) return message.channel.send("```fix\nНеобходимо указать роль.```");	
  const role = message.guild.roles.find("name", `${rol}`);
  message.channel.send(`${role.id}`);
}
