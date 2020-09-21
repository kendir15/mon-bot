const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 
.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | Eğlence Komutları! ",`
**<a:elmas_23:753542886410158140> = \`fal \` : fal bakarsınız .**
**<a:elmas_23:753542886410158140> = \`rip\` : Profil Fotona Efekt verir .**

`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["eğlence"], 
  permLevel: 0
};
exports.help = {
  name: 'eğlence'
}; 