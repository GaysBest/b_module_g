const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args) => {
if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);	
if(!rMember) return message.channel.send("```fix\nПожалуйста, укажите правильного участника.```");	
let role = args.join(" ").slice(22);	
if(!role) return message.channel.send("```fix\nНеобходимо указать роль.```");	
let gRole = message.guild.roles.find(`name`, role);	
if(!gRole) return message.channel.send("```fix\nНе удалось найти эту роль.```");	
if(!rMember.roles.has(gRole.id)) return message.channel.send("```fix\nЭтот пользователь не имеет указанной роли.```");	
rMember.removeRole(gRole.id);
message.channel.send('```fix\nРоль успешно удалена.```');	
}
