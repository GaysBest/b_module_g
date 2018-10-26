const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
const embed = new Discord.RichEmbed()	
.setColor(0x000000)	
.setThumbnail("https://i.imgur.com/ihx61x0.png")	
.setTitle('Купить привилегии:')	
.setDescription('[Купить напрямую](https://qiwi.me/bestgamesru)\n')	
.addField("Описание привилегий:", '[Цены и описание](https://bestgamesru.ru/index.php?/topic/1870-bgru-platnye-uslugi/&tab=comments#comment-8424)\n')	
.addField("Поддержка:", 'Менеджер - [VK](https://vk.com/popularmorozov), [Steam](https://steamcommunity.com/id/PopularMorozov/)\n')	
message.channel.send({ embed })	
message.react("✔");
}
