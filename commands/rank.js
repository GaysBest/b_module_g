const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const bynd = message.guild.roles.find("id", "477611608420515843");
    const abynd = message.guild.roles.find("id", "477612032603062276");
    const role = args[0];
    if(role === "БУНД") {
        if(!message.author.roles.some(bynd.id)) {
        message.member.addRole(bynd);
        return message.channel.send('```fix\nВы успешно присоединились к рангу БУНД!```');
        if(message.author.roles.some(bynd.id)) {
        message.member.removeRole(bynd);
        return message.channel.send('```fix\nВы успешно вышли из ранга БУНД!```');
        }
    }
}
if(role === "АНТИ-БУНД") {
    if(!message.author.roles.some(abynd.id)) {
    message.member.addRole(abynd);
    return message.channel.send('```fix\nВы успешно присоединились к рангу АНТИ-БУНД!```');
    if(message.author.roles.some(abynd.id)) {
    message.member.removeRole(abynd);
    return message.channel.send('```fix\nВы успешно вышли из ранга АНТИ-БУНД!```');
    }
}
}
}
