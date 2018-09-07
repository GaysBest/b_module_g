const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message, args, await) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);	
   if (!rMember) return errors.cantfindUser(message.channel);	
   let role = args.join(" ").slice(22);	
   if (!role) return message.channel.send("```fix\nНеобходимо указать роль.```");	
   let gRole = message.guild.roles.find(`name`, role);	
   if (!gRole) return message.channel.send("```fix\nНе удалось найти эту роль.```");	
    if (rMember.roles.has(gRole.id)) return message.channel.send("```fix\nУказанный участник уже имеет эту роль.```");	
   await (rMember.addRole(gRole.id));	
   await message.channel.send('```fix\nРоль успешно добавлена.```');	
}
