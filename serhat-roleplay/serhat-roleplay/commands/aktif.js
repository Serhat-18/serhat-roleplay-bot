const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  
  let prefix  = config.prefix

const aktif = new Discord.MessageEmbed()

.setDescription(`**Sunucu Aktif İyi roller...** @everyone\n**Sunucu IP : ${config.ip}**\n**Team Speak IP:${config.tsip}**`)
.setImage(config.gif)
.setFooter(config.footer)
.setColor(config.yesil)

message.channel.send(aktif)

};

exports.config = {
  name: "aktif",  
  guildOnly: false, 
  aliases: ["aktif"], 
};