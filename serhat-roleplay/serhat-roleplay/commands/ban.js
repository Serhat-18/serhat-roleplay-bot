const Discord = require("discord.js"),
client = new Discord.Client();                
const config = require("../ayarlar.js")
module.exports.run = async (client, message, args) => {

  let member = message.mentions.users.first()
  let sebep = args.slice(1).join(" ")
  let guild = message.guild;
  let kanal = config.banlog
  
  if(!member) return message.channel.send("Bir Üye Etıketle")
  
  if(!sebep) return message.channel.send("Bir Sebep Gir")
  
  guild.members.ban(member)

  message.channel.send("**üye başarıyla banlandı!**")
  
  const ban = new Discord.MessageEmbed()
  .setThumbnail(message.author.avatarURL())
  .setColor('RANDOM')
  .addField(`Banlanan Kullanıcı`,member)
  .addField(`Yetkili`,message.author)
  .addField(`Sebep`,sebep)
  client.channels.cache.get(kanal).send(ban)

};

exports.config = {
  name: "ban",  
  guildOnly: false, 
  aliases: ["ban"], 
};