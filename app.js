const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var prefix = "bg."
//----------------------------------------------

client.on('ready', () => {	
    console.log('Ya gotov!')
    client.user.setStatus('avaible')	
    client.user.setPresence({	
        game: {	
            name: 'bg.donate',	
            type: "WATCHING",	
            url: "https://www.twitch.tv/ostrikan"	
        }	
    });	
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
    const embed = new Discord.RichEmbed()	
    .setColor(0x000000)	
    .setAuthor('BestGames.RU')	
    .setThumbnail('https://i.imgur.com/rb5csMg.jpg')	
    .setTitle('Добро пожаловать на Discord сервер проекта BestGames.RU!')	
    .setURL('http://bestgamesru.ru')	
    .addField("Правила Discord сервера:", '```1. Запрещены оскорбления, мат, неадекватное поведение.\n2.Запрещен спам, флуд и срач.\n3. Запрещено распостранять NSFW контент.\n4. Запрещен оффтоп (сообщения не по теме).\n5.  Запрещено пинговать(упоминать) по ролям и пинговать без причины.\n6. Запрещена реклама в любом виде.```\n\nДля того, чтобы подать заявку для вступления в Администрацию посетите наш [форум](http://bestgamesru.ru/).\n\nЕсли вас забанили/замутили/кикнули, и вы считаете, что наказание выдано несправедливо, то подайте жалобу на [форум](http://bestgamesru.ru/).\n\nПосмотреть детали наказания можно на странице [SourceBans](http://bans.bestgamesru.ru/)\n\nДля получения информации о Donate-привилегиях пропишите команду `bg.donate` в любом канале.')	
    member.send({ embed });	
  });	
   client.on('message', message => {
      const swearWords = ["SG", "чифир","взлом", "ЧИФИР", "ВЗЛОМ", "соурсгеймс", "СОУРСГЕЙМС", "сорсгамес", "sgru", "SGRU", "взлома", "Chifir", "https://discord.gg/", "chifir", "4ифир", "4ifir", "Чифир", "покупной", "Покупной", "СГ", "СГРУ", "SGRU", "сгру", "Сгру", "ЧИФИР", "бекдор", "Бекдор", "Бэкдур", "Бэкдор", "бэкдур", "бекдур", "backdoor", "doorback"];	
      if( swearWords.some(word => message.content.includes(word)) ) {	
          message.delete();	
          message.author.send('```fix\nПохоже вы использовали запрещенное слово, мы удалили ваше сообщение!```');	
        }	
  });	
   client.on('guildMemberAdd', member => {	
      member.guild.channels.get('477572395369234433').send('**' + member.user.toString() + '**, добро пожаловать! Пожалуйста, прочти правила.'); 	
  });	
  client.on('guildMemberRemove', member => {	
      member.guild.channels.get('477572395369234433').send('**' + member.user.toString() + '**, как жаль, что ты покинул нас!');	
      member.send('Как жаль, что ты покинул нас! Мы всегда рады тебе, возвращайся!\n\nhttps://discord.gg/2EDpngu');
  });
   client.on('messageDelete', async (message) => {	
    const log = message.guild.channels.find('name', 'action-log');	
    const embed = new Discord.RichEmbed()	
    .setColor(0x000000)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)	
    .setDescription(`**Сообщение от ${message.author} удалено в ${message.channel}**`)	
    .addField(`Текст сообщения:`, message.content)	
    .setFooter(`${message.author.id}`)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp()	
    log.send({ embed });	
  });

client.login(process.env.BOT_TOKEN);