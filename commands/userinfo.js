const Discord = require("discord.js");
const client = new Discord.Client();
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
    var Status = statusList[member.presence.status] || "Оффлайн";
    var botUser = member.bot ? "Да": "Нет";
    var activity = member.presence.activity !== null ? " - " + member.presence.activity.name: " ";
    const embed = new Discord.RichEmbed()
    .setThumbnail(member.displayAvatarURL())
    .setColor(0x000000)
    .setFooter(`${member.id}`)
    .setAuthor("BGRU Discord UserInfo")
    .setDescription("Участник: " + member.tag)
    .addField("Создан:", member.createdAt.toLocaleString(), true)
    .addField("На сервере с:", guild.members.get(member.id).joinedAt.toLocaleString(), true)
    .addField("Бот:", botUser, true)
    .setTimestamp()
    .addField("Статус:", Status + activity, true);
    message.channel.send({embed});
}
