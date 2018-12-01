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
    if(newMember.id === "323764173995638784" || newMember.id === "285457951248875521" || newMember.id === "281424024523898880") return;
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
client.on('message', message => {
    const swearWords = ["SG", "чифир","взлом", "ЧИФИР", "ВЗЛОМ", "соурсгеймс", "СОУРСГЕЙМС", "сорсгамес", "sgru", "SGRU", "взлома", "https://discord.gg/", "покупной", "Покупной", "СГ", "СГРУ", "SGRU", "сгру", "Сгру", "бекдор", "Бекдор", "Бэкдур", "Бэкдор", "бэкдур", "бекдур", "backdoor", "doorback", "discord.gg", "sg", "sourcegames", "ПГЗ", "пгз", "PGZ", "pgz", "PROGAMESZET", "PROGAMES", "progameszet", "progames", "прогамесзет", "ПРОГАМЕСЗЕТ", "прогеймесзет", "ПРОГЕЙМЕСЗЕТ", "Пгз", "Pgz"];	
    if( swearWords.some(word => message.content.includes(word)) ) {	
        if(message.author.id === "477613962989404193") return;
        if(message.member.hasPermission('BAN_MEMBERS')) return;
        message.delete();
      }	
});
client.on('guildMemberRemove', member => {	
    member.guild.channels.get('477572395369234433').send(`**${member.user.tag}**, как жаль, что ты покинул нас!`);	
});
client.on('guildMemberAdd', member => {	
    member.guild.channels.get('477572395369234433').send('**' + member.user.toString() + '**, добро пожаловать! Пожалуйста, прочти правила.'); 	
});	
   client.on('messageDelete', async (message) => {	
    if(message.author.bot) return;
    if(message.channel === message.guild.channels.get('477598696314503168')) return;
  const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  let user = ""
    if (entry.extra.channel.id === message.channel.id
      && (entry.target.id === message.author.id)
      && (entry.createdTimestamp > (Date.now() - 5000))
      && (entry.extra.count >= 1)) {
    user = entry.executor
  } else { 
    user = message.author
  }
    const log = message.guild.channels.find('name', 'action-log');	
    var embed = new Discord.RichEmbed()	
    .setColor(0x000000)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)	
    .setDescription(`**Сообщение от ${message.author} удалено в ${message.channel} пользователем ${user}**`)	
    .addField(`Текст сообщения:`, message.content)	
    .setFooter(`${message.author.id}`)	
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp()	
    log.send({ embed });	
  });
   client.on('message', message => {
      const swearWords = ["инвайт", "приглашение", "ссылку на дискорд", "ссылка на дискорд", "Инвайт", "Приглашение", "Ссылку на дискорд", "Ссылка на дискорд"];	
      if( swearWords.some(word => message.content.includes(word)) ) {	
          message.channel.send("https://discord.gg/cSEATcj");
        }	
  });
client.on('message', message => {
    const swearWords = ["Пизд", "пизд", "сук", "Сук", "Пидор", "пидор", " бля ", " Бля ", " хуй ", " Хуй ", "Еблан", "еблан", "заебал", "Заебал", "ЗАЕБАЛ"];	
    if( swearWords.some(word => message.content.includes(word)) ) {	
        if(message.author.id === "477613962989404193") return;
        if(message.member.hasPermission('BAN_MEMBERS')) return;
        message.delete();
      }	
});
client.on('messageUpdate', async (oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage.channel === oldMessage.guild.channels.get('477598696314503168')) return;
    var embed = new Discord.RichEmbed()	
    .addField('До:', oldMessage.content)
    .addField('После:', newMessage.content)
    .setColor(0x000000)	
    .setAuthor(oldMessage.author.tag, oldMessage.author.displayAvatarURL)	
    .setDescription(`**Сообщение от ${oldMessage.author} изменено в ${oldMessage.channel}**`)	
    .setFooter(`${oldMessage.author.id}`)	
    .setAuthor(oldMessage.author.tag, oldMessage.author.displayAvatarURL)
    .setTimestamp();
    const log = oldMessage.guild.channels.find('name', 'action-log');	
    log.send({ embed });
    const swearWords = ["SG", "чифир","взлом", "ЧИФИР", "ВЗЛОМ", "соурсгеймс", "СОУРСГЕЙМС", "сорсгамес", "sgru", "SGRU", "взлома", "https://discord.gg/", "покупной", "Покупной", "СГ", "СГРУ", "SGRU", "сгру", "Сгру", "sg", "sourcegames", "бекдор", "Бекдор", "Бэкдур", "Бэкдор", "бэкдур", "бекдур", "backdoor", "doorback", "discord.gg", "ПГЗ", "пгз", "PGZ", "pgz", "PROGAMESZET", "PROGAMES", "progameszet", "progames", "прогамесзет", "ПРОГАМЕСЗЕТ", "прогеймесзет", "ПРОГЕЙМЕСЗЕТ", "Пгз", "Pgz"];	
    if(swearWords.some(word => newMessage.content.includes(word)) ) {	
        newMessage.delete();
    }
}); 
client.login(process.env.BOT_TOKEN);
