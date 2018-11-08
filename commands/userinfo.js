const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
exports.run = async (client, message, args) => {
	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const statusList = {
        online: "Онлайн",
        idle: "Не активен",
        dnd: "Не беспокоить"
    };
    var botUser = member.bot ? "Да": "Нет";
    var Status = statusList[member.presence.status] || "Оффлайн";
    var embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setColor(0x000000)
    .setFooter(`${user.id}`)
    .setAuthor("BGRU Discord UserInfo")
    .setDescription(`**Участник:** ${user.tag}`)
    .addField("Создан:", `${moment.utc(user.createdAt).format('D.M.Y, HH:mm')}`, true)
    .addField("На сервере с:", `${moment.utc(user.joinedAt).format('D.M.Y, HH:mm')}`, true)
    .addField("Бот:", botUser, true)
    .setTimestamp()
    .addField("Статус:", Status, true);
    message.channel.send({embed});
}

