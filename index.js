const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var prefix = "bg."
//----------------------------------------------

client.on('ready', () => {
    console.log('Ya gotov!')
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'на число 554',
            type: 3
        }
    });
});

client.on('guildMemberUpdate', async (oldMember, newMember) => {
    if(newMember.id === "323764173995638784" || newMember.id === "285457951248875521" || newMember.id === "281424024523898880" || newMember.id === "369182213339873280" || newMember.id === "358565534293426187" || newMember.id === "339096944808820766") return;
    if(newMember.roles.some(r=>["509034732684705814"].includes(r.id)) )
        return newMember.removeRole(`509034732684705814`);
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.on('guildMemberAdd', member => {	
    var embed = new Discord.RichEmbed()	
    .setColor(0x000000)	
    .setAuthor('BestGames.RU')	
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')	
    .setTitle('Добро пожаловать на Discord сервер проекта BestGames.RU!')	
    .setURL('http://bestgamesru.ru')	
    .addField("Правила Discord сервера:", '```1. Запрещены оскорбления, мат, неадекватное поведение.\n2. Запрещен спам, флуд и срач.\n3. Запрещено распостранять NSFW контент.\n4. Запрещен оффтоп (сообщения не по теме).\n5. Запрещено пинговать(упоминать) по ролям и пинговать без причины.\n6. Запрещена реклама в любом виде.```\n\nДля того, чтобы подать заявку для вступления в Администрацию посетите наш [форум](http://bestgamesru.ru/).\n\nЕсли вас забанили/замутили/кикнули, и вы считаете, что наказание выдано несправедливо, то подайте жалобу на [форум](http://bestgamesru.ru/).\n\nПосмотреть детали наказания можно на странице [SourceBans](http://bans.bestgamesru.ru/)\n\nДля получения информации о Donate-привилегиях пропишите команду `bg.donate` в любом канале.')	
    member.send({ embed });	
  });	
client.on('guildMemberRemove', member => {	
    member.guild.channels.get('477572395369234433').send(`**${member.user.tag}**, как жаль, что ты покинул нас!`);	
});
client.on('guildMemberAdd', member => {	
    member.guild.channels.get('477572395369234433').send('**' + member.user.toString() + '**, добро пожаловать! Пожалуйста, прочти правила.'); 	
});
   client.on('message', message => {
      const swearWords = ["инвайт", "приглашение", "ссылку на дискорд", "ссылка на дискорд", "Инвайт", "Приглашение", "Ссылку на дискорд", "Ссылка на дискорд"];	
      if( swearWords.some(word => message.content.includes(word)) ) {	
          message.channel.send("https://discord.gg/cSEATcj");
        }	
  });
client.login(process.env.BOT_TOKEN);
