const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  const yardım = new Discord.MessageEmbed()
  .setColor(config.yesil)
  .setAuthor(config.yardimbaslik)
  .setDescription(`
  :white_small_square: **=**  \`${config.prefix}aktif\` : **Aktif mesajı atar**
  :white_small_square: **=**  \`${config.prefix}bakım\`:  **Bakım mesajı atar**
  :white_small_square: **=**  \`${config.prefix}ban\`: **Belirttiğiniz kişiyi sunucudan banlar**
  :white_small_square: **=**  \`${config.prefix}unban\`:  **Belirttiğiniz kişinin banını açar**
  :white_small_square: **=**  \`${config.prefix}wl\`:  **etiketlenen üyeye wl verir **
  :white_small_square: **=**  \`${config.prefix}sil\`:  **Belirttiğiniz sayıda mesajı siler**
  
  `)
  .setImage(config.gif)
  .setThumbnail(message.author.avatarURL())
  message.channel.send(yardım)

};

exports.config = {
  name: "yardım",  
  guildOnly: false, 
  aliases: ["yardım","help"], 
};