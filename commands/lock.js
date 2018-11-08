const Discord = require("discord.js");	
const client = new Discord.Client();
const moment = require("moment");
const ms = require("ms");
exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('```fix\nИзвините, вы не можете использовать эту команду.```')
    .then(msg => msg.delete({
        timeout: 10000
    }));
if (!client.lockit) client.lockit = [];
let time = args.join(' ');
let validUnlocks = ['анлок', 'unlock'];
if (!time) return message.channel.send('```fix\nВы должны указать время в часах, минутах или секундах.```');
const log = message.guild.channels.find('name', 'action-log');
var embed = new Discord.RichEmbed()
.setDescription('**Блокировка канала**')
.addField('Модератор:', message.author)
.addField('Канал:', message.channel)
.addField('Время:', ` ${ms(ms(time), { long:true })}`)
.setFooter(`${message.author.id}`)	
.setColor(0x000000)
.setAuthor(`BGRU Discord Lockdown`, message.guild.iconURL)
.setTimestamp()
log.send({ embed });

if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        })
        .then(() => {
            message.channel.send('Lockdown lifted.');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        })
        .catch(error => {
            console.log(error);
        });
} else {
    message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        })
        .then(() => {
            message.channel.send(`Канал заблокирован на ${ms(ms(time), { long:true })}`)
                .then(() => {

                    client.lockit[message.channel.id] = setTimeout(() => {
                        message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: null
                            })
                            .then(message.channel.send('```fix\nКанал разблокирован.```'))
                            .catch(console.error);
                        delete client.lockit[message.channel.id];
                    }, ms(time));
                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
}
