const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")

module.exports.run = async (client, message, args) => {

  let member = args[0]
  let guild = message.guild;
  let kanal = config.unbanlog
  
  if(!member) return message.channel.send("Bir İd Gırmelısın")
  
  
  
  
  guild.members.unban(member)

  message.channel.send("**üye banı başarıyla kaldırıldı**")
  
  const ban = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL())
  .setColor('RANDOM')
  .addField(`Banı Kaldırlan Kullanıcı`,`<@${member}>`)
  .addField(`Yetkili`,message.author)
  .setTimestamp()
  .setFooter(`${message.author.username} Tarafından Kullanıldı`)
  client.channels.cache.get(kanal).send(ban)

};

exports.config = {
  name: "unban",  
  guildOnly: false, 
  aliases: ["unban"], 
};