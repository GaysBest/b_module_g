const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
    if(!message.member.roles.some(r=>["334885914021068800"].includes(r.id)) )	
      return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");	
    	
    msg = message.content.toLowerCase();	
    mention = message.mentions.users.first();	
    if (mention == null) { return; }	
    message.delete();	
    mentionMessage = message.content.slice (8);	
    mention.sendMessage (mentionMessage);
}