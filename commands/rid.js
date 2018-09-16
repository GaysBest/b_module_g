const Discord = require("discord.js");
exports.run = (client, args, message) => {
  const rol = message.content.split(" ").slice(1).join(" ");
  const role = message.guild.roles.find("name", `${rol}`);
  message.channel.send(`${role.id}`);
}
