const Discord = require("discord.js");	
const client = new Discord.Client();
const gd = require('node-gd');
exports.run = (client, message, args) => {
let text = args[0];
var img = gd.createSync(200, 80);
img.colorAllocate(0, 255, 0);
var txtColor = img.colorAllocate(255, 0, 255);
var fontPath = '/full/path/to/font.ttf';
img.stringFT(txtColor, fontPath, 24, 0, 10, 60, text);
img.savePng('output.png', 1, function(err) {
  if(err) {
    throw err;
  }
message.channel.send("some text", {
    file: "output.png"
});
})};
