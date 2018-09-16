const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    const bynd = message.guild.roles.find("id", "477611608420515843");
    const abynd = message.guild.roles.find("id", "477612032603062276");
    const role = args[0];
    if(role === "БУНД") {
        message.author.addRole(bynd);
        return message.channel.send('```fix\nВы успешно присоединились к рангу **БУНД**!```');
    }
    if(message.author.roles.has(bynd.id)) {
        message.author.removeRole(bynd.id);
        return message.channel.send('```fix\nВы успешно вышли из ранга **БУНД**!```');
    }
    if(role === "АНТИ-БУНД") {
        message.author.addRole(abynd);
        return message.channel.send('```fix\nВы успешно присоединились к рангу **БУНД**!```');
    }
    if(message.author.roles.has(abynd.id)) {
        message.author.removeRole(abynd.id);
        return message.channel.send('```fix\nВы успешно вышли из ранга **БУНД**!```');
    }
}
