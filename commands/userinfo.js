const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
exports.run = async (client, message, args) => {
    const statusList = {
        online: "Онлайн",
        idle: "Не активен",
        dnd: "Не беспокоить"
    };
    const member = message.guild.members.get(args[0]);
    var botUser = member.bot ? "Да": "Нет";
    var Status = statusList[member.presence.status] || "Оффлайн";
    const embed = new Discord.RichEmbed()
    .setThumbnail(member.avatarURL)
    .setColor(0x000000)
    .setFooter(`${member.id}`)
    .setAuthor("BGRU Discord UserInfo")
    .setDescription(`**Участник: ${member.tag}**`)
    .addField("Создан:", `${moment.utc(member.createdAt).format('D/M/Y, HH:mm')}`, true)
    .addField("На сервере с:", `${moment.utc(member.joinedAt).format('D/M/Y, HH:mm')}`, true)
    .addField("Бот:", botUser, true)
    .setTimestamp()
    .addField("Статус:", Status, true);
    message.channel.send({embed});
}
