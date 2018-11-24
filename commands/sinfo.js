const request = require('request');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const ip = args.join(" ");
    if(ip == 'jail') {
      ip = '46.174.52.2:27204'
    }
    if(ip == 'dr') {
      ip = '46.174.52.14:27209'
    }
    if(ip == 'ff2') {
      ip = '46.174.52.20:27272'
    }
    if(ip == 'dm') {
      ip = '46.174.52.3:27269'
    }
    if(!ip) return message.channel.send("```fix\nУкажите IP.```")
  request(`https://use.gameapis.net/source/query/info/${ip}`, {json: true, time: true}, function (error, response, body) {
    if (error) return exit(error, message);
    try {
    const status = new Discord.RichEmbed()
    .setTitle(`${body.name}`)
    .addField(`Карта:`, body.map, true)
    .addField('Количество игроков:', `${body.players.online}/${body.players.max}`, true)
    .setColor(0x000000)
    .setDescription(body.join)
    .setTimestamp()
    .setFooter(`IP | ${body.hostname}:${body.port}`)
    .addField("Защищен паролем:", body.password_protected ? "Да" : "Нет", true)
    .setThumbnail("https://cdn.discordapp.com/attachments/507506673167106048/515901780509458432/latest.png");
    message.channel.send(status);
    } catch(e) {
        message.channel.send("```fix\nУкажите действительный IP и Порт.```");
    }
  });
};
