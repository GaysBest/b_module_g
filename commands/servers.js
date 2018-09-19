const Discord = require("discord.js");	
const client = new Discord.Client();
exports.run = (client, message) => {
const embed = new Discord.RichEmbed()	
    .setColor(0x000000)
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')
    .setAuthor('BGRU Game Servers')
    .setDescription(`__Team Fortress 2:__\nBestGames.RU | **Jail #1** - [46.174.52.2:27204](steam://connect/46.174.52.2:27204)\nBestGames.RU | **DeathRun** - [46.174.52.14:27209](steam://connect/46.174.52.14:27209)\nBestGames.RU | **Freak Fortress 2** - [46.174.52.20:27272](steam://connect/46.174.52.20:27272)\nBestGames.RU | **DeathMatch** - [46.174.52.3:27269](steam://connect/46.174.52.3:27269)\n__Garry's Mod:__\nBestGames.RU | **GrandRP** - [212.92.101.38:29015](steam://connect/212.92.101.38:29015)`)
    .setTimestamp()
    .setFooter(`${message.author.id}`);
    message.channel.send({embed});
}
