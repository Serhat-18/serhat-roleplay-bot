const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return 
const silinecekmiktar = args.slice(0).join('');
if(silinecekmiktar .length < 1) { return message.reply("Silinecek mesaj miktarını belirt") } 
message.channel.bulkDelete(silinecekmiktar );

const sildim = new Discord.MessageEmbed()

.setTitle("Mesajlar Başarıyla Silindi!")
.setDescription("Toplam "+ silinecekmiktar +"Mesaj Silindi")
.setThumbnail(config.gif)
.setFooter(config.footer)
.setColor(config.yesil)

message.channel.send(sildim)
}
exports.config = {
  name: "sil",
  guildOnly: true, 
  aliases: ["sil","temizle","clear"],
};