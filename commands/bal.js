const Discord = require("discord.js");	
const client = new Discord.Client();
const economy = require('discord-eco');
exports.run = (client, message, args) => {
    let member = message.mentions.members.first() || message.author;
    economy.fetchBalance(`${member}`).then((i) => {	
    const balembed = new Discord.RichEmbed()
        .setTitle('BGRU Discord Economy > Balance')
        .setColor(0x000000)
        .setDescription('**Баланс пользователя**')
        .addField('Пользователь:', `${member}`, true)
        .addField('Деньги:', i.money, true);
        message.channel.send({ balembed });
})
}