const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./ayarlar.js")
const moment = require('moment')
require("moment-duration-format")
  moment.locale("tr")
const fs = require("fs");                                        
require('./util/Loader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} Komutu Sorunsuz Baslatildi`);
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });                                                                     
});


client.on("ready", () => {
  client.channels.cache.get(config.seskanal).join();
});



client.on("guildMemberAdd", member => {
  member.roles.add(config.otorol)
    const otorol = new Discord.MessageEmbed()
  .setTitle("Otorol Verildi!")
  .setColor(config.yesil)
  .setDescription(`${member} Adlı kullanıcıya <@&837303797813870615> rolü başarıyla verildi`)
  .setThumbnail(config.gif)
  .setFooter(config.otorolfooter)
  client.channels.cache.get(config.otorollog).send(otorol)
  })


  client.on("guildMemberAdd", kisi => {
    let ch = config.gelen // gelen kanal id
    const embed = new Discord.MessageEmbed();
        embed.setTitle("Bir Üye Katıldı!");
        embed.addField("Katılan Üye", `${kisi}`);
        embed.setThumbnail(config.gif);
        embed.setColor(config.yesil);
        client.channels.cache
          .get(ch)
          .send(embed)
    })

  client.on("guildMemberRemove", kisi => {
    let ch = config.giden //giden kanal id
    const embed = new Discord.MessageEmbed();
        embed.setTitle("Bir Üye Ayrıldı!");
        embed.addField("Ayrılan Üye", `${kisi}`);
        embed.setThumbnail(config.gif);
        embed.setColor(config.kirmizi);
        client.channels.cache
          .get(ch)
          .send(embed)
    })
  
         
client.on("messageDelete", function(msg) {
  let Embed = new Discord.MessageEmbed()
    .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`
    Mesaj Sahibi:
     <@${msg.author.id}>
    Mesaj İçeriği:
     ${msg.content}
    `)
    .setTimestamp()
    .setColor(config.kirmizi)
    .setFooter(config.footer);
  client.channels.cache.get(config.mesajsilme).send(Embed);
});

client.on("messageUpdate", function(oldMsg, newMsg) {
  if(newMsg.author.bot) return
  let Embed = new Discord.MessageEmbed()
    .setAuthor(newMsg.author.tag, newMsg.author.displayAvatarURL({ dynamic: true }))
    .setDescription(`
    Mesaj Sahibi:
     <@${newMsg.author.id}>
    Mesaj Linki:
     [Tıkla](${newMsg.url})
    Eski Mesaj: 
     ${oldMsg.content}
    Yeni Mesaj: 
     ${newMsg.content}
    `)
    .setTimestamp()
    .setColor(config.yesil)
    .setFooter(config.footer);
  client.channels.cache.get(config.mesajdznleme).send(Embed);
});

  

client.login(config.token)
