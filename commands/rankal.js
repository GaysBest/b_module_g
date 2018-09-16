const Discord = require("discord.js");
exports.run = async (client, message) => {
    const embed = new Discord.RichEmbed()
    .setColor(0x000000)
    .setAuthor('BGRU Discord Ranks')
    .setDescription('**Описание системы рангов**')
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')
    .addField('bg.ranks:', 'Показывает все ранги и кол-во участников в них')
    .addField('bg.rank <название ранга>:', 'Позволяет присоединиться к рангу')
    .addField('Зачем нужны ранги?', 'Это отличная вещь, которая даст вам немного плюшек')
    message.channel.send({embed});
}
