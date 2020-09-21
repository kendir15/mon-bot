const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 

.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | koruma Komutları! ",`
**<a:elmas_23:753542886410158140> = \`reklam-engel aç/kapat\` : reklam engelle.**
**<a:elmas_23:753542886410158140> = \`küfür-engel aktif/deaktif\` : küfür engelle.**


`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["koruma"], 
  permLevel: 0
};
exports.help = {
  name: 'koruma'
}; 