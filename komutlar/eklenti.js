const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('1')
.addField("MON-BOT | EklentiKomutları! ",`
**<a:elmas_23:753542886410158140> = \`oyalama-kanal\` : Oylama kanal ayarlarsınız.**
**<a:elmas_23:753542886410158140> = \`oylama\` : Oylama yaparsınız.**
**<a:elmas_23:753542886410158140> = \`sa-as aç/kapat\` : sa as sistemi.**
**<a:elmas_23:753542886410158140> = \`slowmode <saniye>\` : Slowmode açarsınız**
**<a:elmas_23:753542886410158140> = \`say\` : Sunucu yu sayar**

`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["eklenti"], 
  permLevel: 0
};
exports.help = {
  name: 'eklenti'
}; 