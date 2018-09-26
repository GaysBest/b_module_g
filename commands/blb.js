const Discord = require("discord.js");
const client = new Discord.Client();
const mysql = require('mysql');
exports.run = async (client, message, args) => {
    const con = mysql.createConnection({
        host: "mysql.elis-krymov1-0.myjino.ru",
        user: "046255387_blb",
        password: "jnMnHVTeFxtX",
        database: "elis-krymov1-0_bluebans"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
}
