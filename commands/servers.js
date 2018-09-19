const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
const embed = new Discord.RichEmbed()	
    .setColor(0x000000)
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')
    .setAuthor('BGRU Game Servers')
    .setDescription(`**Список игровых серверов BGRU**`)
    .setTimestamp()
    .setFooter(`${message.author.id}`)
    .addField(`Team Fortress 2`, `BestGames.RU | **Jail #1** - [46.174.52.2:27204](steam://connect/46.174.52.2:27204)\nBestGames.RU | **DeathRun** - [46.174.52.14:27209](steam://connect/46.174.52.14:27209)\nBestGames.RU | **Freak Fortress 2** - [46.174.52.20:27272](steam://connect/46.174.52.20:27272)\nBestGames.RU | **DeathMatch** - [46.174.52.3:27269](steam://connect/46.174.52.3:27269)`)
    .addField(`Garry's Mod`, `BestGames.RU | **GrandRP** - [212.92.101.38:29015](steam://connect/212.92.101.38:29015)`)
    message.channel.send({embed});
}
