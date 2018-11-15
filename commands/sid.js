var SteamID = require("steamid");
const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
        let id = args.join(" ");
        if(!id){
            return message.channel.send("```fix\nНеобходимо указать SteamID.```");
            }
        var sid = new SteamID(id);
        var forlink = sid.getSteamID64()
        try {
            const steam3 = new Discord.RichEmbed()
            .setAuthor("BGRU Discord SteamID Finder")
            .setDescription('https://steamcommunity.com/id/${forlink}/')
            .addField("SteamID:", sid.getSteam2RenderedID())
            .addField("SteamID3:", sid.getSteam3RenderedID())
            .addField("SteamID64:", sid.getSteamID64())
            .setColor(0x000000)
            message.channel.send(steam3);
         } catch(e) {
             message.channel.send("```fix\nНеобходимо указать действительный SteamID.```");
      }
}
