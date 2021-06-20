const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');

module.exports.run = async (client, message, args) => {

  
  let prefix  = config.prefix

const bakım = new Discord.MessageEmbed()

.setDescription("**Sunucu Bakımdadır...** @everyone\n**Açılana kadar lütfen sormayınız**\n**Aktif olduğunda aktif geçilecektir**")
.setImage(config.gif)
.setFooter(config.footer)
.setColor(config.yesil)

message.channel.send(bakım)

};

exports.config = {
  name: "bakım",  
  guildOnly: false, 
  aliases: ["bakım"], 
};