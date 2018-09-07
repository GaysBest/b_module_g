const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
    const m = await message.channel.send("<:CHIOBLYAA:487549365217656864>");	
    m.edit(`:ping_pong: Ваш пинг - ${m.createdTimestamp - message.createdTimestamp}мс. API задержка - ${Math.round(client.ping)}мс.`);	
}