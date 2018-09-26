const Discord = require("discord.js");
const client = new Discord.Client();
const mysql = require('mysql');
exports.run = async (client, message, args) => {
    const con = mysql.createConnection({
        host: "mysql.elis-krymov1-0.myjino.ru",
        database: "elis-krymov1-0_bluebans",
        user: "046255387_blb",
        password: "DB_PASSWORD",
        port: "3306"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
      var id = args[0];
      var time = args[1];
      var add = "INSERT INTO bluebans (player, ban_lengh, admin, admlvl) VALUES (`${id}`, `${time}`, `STEAM_ID_RCON`, `1`)";
      con.query(add, function (err, result, client) {
        if (err) throw err;
        if (err) return message.channel.send('```fix\nПроизошла ошибка.```');
        console.log("Domablen CHS");
        message.channel.send('```fix\nИгрок успешно добавлен в ЧС синей команды.```');
      });
}
