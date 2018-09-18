const Discord = require("discord.js");  
const client = new Discord.Client();
exports.run = async (client, msg, [user]) => {
    const sqlite3 = require("sqlite3").verbose();
    let db = new sqlite3.Database("./score.sqlite");

    var data = await client.funcs.userSearch(msg, {user: [user], tags:["bot"], name: this.help.name});
    if (data.valid === false) { return; }

    db.get(`SELECT * FROM scores WHERE userId = "${data.user[0].id}"`, [], (err, row) => {
        if (err) { return console.log(err); }
        if (!row) { return msg.channel.send("```fix\nНевозможно подсчитать кредиты этого участника.```"); } 

        let time = [((Date.now() - row.daily) / 86400000), ((Date.now() - row.repDaily) / 86400000)];
        for (var x = 0; x < 2; x++) {
            if (time[x] >= 14) { time.push((time[x]/7).toFixed(2) + " недели"); }
            else if (time[x] >= 1) { time.push(time[x].toFixed(2) + " дни"); }
            else { time.push((time[0] * 24).toFixed(2) + " часы"); }
        }
        
        client.users.fetch(data.user[0].id).then(avatar => {
            const embed = new client.methods.Embed()
                .setTimestamp()
                .setDescription('**Баланс участника**')
                .setFooter(`${message.author.id}`)
                .setThumbnail(avatar.displayAvatarURL())
                .setColor(0x000000)
                .setAuthor(`BGRU Discord Balance`)
                .addField("Кредиты:", (row.credits).toLocaleString() + " (Последнее получение: " + time[2] + " назад)")
                .addField("Reputation:", row.rep + " (Последнее получение: " + time[3] + " назад)");
        
            msg.channel.send({embed});
        });
    });
    db.close();
};