const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | Yardım Komutları! ",`
**<a:elmas_23:753542886410158140> = \`uyar\` : Bahsedilen kişi uyarılır.**
**<a:elmas_23:753542886410158140> = \`uyarı-kaldır\` : Bahsedilen kişinin r.** uyarısı Silinir
**<a:elmas_23:753542886410158140> = \`uyarılar\` : Bahsedilen kişinin Uyarı sayısına bakarsınız.**
`)
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