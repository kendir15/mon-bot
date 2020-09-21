const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 

.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | ayarlar Komutları! ",`
**<a:elmas_23:753542886410158140> = \`sayaç\` : Sayaç Sistemi.**
**<a:elmas_23:753542886410158140> = \`otorol\` : Otorol Sistemi.**
**<a:elmas_23:753542886410158140> = \`uyarı\` : Uyarı Sistemi**
**<a:elmas_23:753542886410158140> = \`hb-bb\` : hg-bb Sistemi**

`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ayarlar"], 
  permLevel: 0
};
exports.help = {
  name: 'ayarlar'
}; 