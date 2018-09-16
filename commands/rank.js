const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const bynd = message.guild.roles.find("id", "477611608420515843");
    const abynd = message.guild.roles.find("id", "477612032603062276");
    const role = args[0];
    if(role === "БУНД") {
        if(!message.member.roles.has(bynd.id)) {
        message.member.addRole(bynd);
        message.channel.send('```fix\nВы успешно присоединились к рангу БУНД!```');
        if(message.member.roles.has(bynd.id)) {
        message.member.removeRole(bynd);
        message.channel.send('```fix\nВы успешно вышли из ранга БУНД!```');
        }
    }
}
if(role === "АНТИ-БУНД") {
    if(!message.member.roles.has(abynd.id)) {
    message.member.addRole(abynd);
    message.channel.send('```fix\nВы успешно присоединились к рангу АНТИ-БУНД!```');
    if(message.member.roles.has(abynd.id)) {
    message.member.removeRole(abynd);
    message.channel.send('```fix\nВы успешно вышли из ранга АНТИ-БУНД!```');
    }
}
}
}
