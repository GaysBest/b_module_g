const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
    if(!message.member.roles.some(r=>["334885914021068800", "477573374705401857"].includes(r.id)) )	
      return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
    const sayMessage = args.join(" ");	
    message.delete().catch(O_o=>{}); 	
    message.channel.send(sayMessage);	
}