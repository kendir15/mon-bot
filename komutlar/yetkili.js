const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | Yetkili Komutları! ",`
**<a:elmas_23:753542886410158140> = \`mod-log #kanal \` : Mod-log kanalı .**
**<a:elmas_23:753542886410158140> = \`chat-log #kanal \` : Chat-log kanalı .**
**<a:elmas_23:753542886410158140> = \`ban\` : Bahsedilen kişi Banlanır (loglu).**
**<a:elmas_23:753542886410158140> = \`kick\` : Bahsedilen kişi Atılır (loglu).**
**<a:elmas_23:753542886410158140> = \`sil\` : Mesaj siler 0/100.**
`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["yetkili"], 
  permLevel: 0
};
exports.help = {
  name: 'yetkili'
}; 