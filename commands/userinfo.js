const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
exports.run = async (client, message, args) => {
    const statusList = {
        online: "Онлайн",
        idle: "Не активен",
        dnd: "Не беспокоить"
    };
	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    var botUser = member.bot ? "Да": "Нет";
    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setColor(0x000000)
    .setFooter(`${member.id}`)
    .setAuthor("BGRU Discord UserInfo")
    .setDescription(`Участник: ${user.tag}`)
    .addField("Создан:", `${moment.utc(user.createdAt).format('d/M/ Do YYYY, HH:mm')}`, true)
    .addField("На сервере с:", ${moment.utc(member.joinedAt).format('d/M/ Do YYYY, HH:mm')}`, true)
    .addField("Бот:", botUser, true)
    .setTimestamp()
    .addField("Статус:", member.presence.status + member.presence.activity.name, true);
    message.channel.send({embed});
}
