const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('1')
.addField("MON-BOT | Yardım Komutları! ",`
**<a:elmas_23:753542886410158140> = \`genel\` : Genel komutları açar.**
**<a:elmas_23:753542886410158140> = \`ayarlar\` : Moderasyon komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`yetkili\` : yetkili komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`eğlence\` : Eğlence komutlarını açar.**
**<a:elmas_23:753542886410158140> = \`koruma\` : Koruma komutlarına açar.**
**<a:elmas_23:753542886410158140> = \`eklenti\` : Eklenti komutlarını açar.**`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help","yardım","yardim"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
}; 