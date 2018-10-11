const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const bynd = message.guild.roles.find("id", "477611608420515843");
    const abynd = message.guild.roles.find("id", "477612032603062276");
    const old = message.guild.roles.find("id", "500014542642872333");
    const role = args[0];
    if(role === "ЛАМПА" || role === "лампа" || role === "Лампа") {
        if(!message.member.roles.has(bynd.id)) {
        message.member.addRole(bynd);
        return message.channel.send('```fix\nВы успешно присоединились к рангу "ЛАМПА"!```');
        }
        if(message.member.roles.has(bynd.id)) {
        message.member.removeRole(bynd);
        return message.channel.send('```fix\nВы успешно вышли из ранга "ЛАМПА"!```');
        }
    }
    if(role === "МОЛЬ" || role === "Моль" || role === "моль") {
        if(!message.member.roles.has(abynd.id)) {
            message.member.addRole(abynd);
            return message.channel.send('```fix\nВы успешно присоединились к рангу "МОЛЬ"!```');
        }
        if(message.member.roles.has(abynd.id)) {
            message.member.removeRole(abynd);
            return message.channel.send('```fix\nВы успешно вышли из ранга "МОЛЬ"!```');
        }
    }
    if(role === "ОЛД" || role === "олд" || role === "Олд") {
        if(!message.member.roles.has(old.id)) {
        message.member.addRole(old);
        return message.channel.send('```fix\nВы успешно присоединились к рангу "ОЛД"!```');
        }
        if(message.member.roles.has(old.id)) {
        message.member.removeRole(old);
        return message.channel.send('```fix\nВы успешно вышли из ранга "ОЛД"!```');
        }
    }
}
