const Discord = require("discord.js");	
const client = new Discord.Client();
const economy = require('discord-eco');
exports.run = (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('```fix\nИзвините, вы не можете использовать эту команду.```');

    if (!args[0]) {
        message.channel.send('```fix\nНеобходимо указать сумму для добавления.```');
        return;
    }

    if (isNaN(args[0])) {
        message.channel.send('```fix\nСумма для добавления должна быть числом.```');
        return; 
    }

    let defineduser = '';
    if (!args[1]) { 
        defineduser = message.author.id;
    } else { 
        let firstMentioned = message.mentions.users.first();
        defineduser = firstMentioned.id;
    }

    economy.updateBalance(defineduser + message.guild.id, parseInt(args[0])).then((i) => { 
        const addembed = new Discord.RichEmbed()
            .setColor(0x000000)
            .setDescription(`Успешно добавлено **${args[0]}** денег на счет **${defineduser.username}**`);
        message.channel.send({ addembed });
    });

}