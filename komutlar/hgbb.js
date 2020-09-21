const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 

.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('#860303')
.addField("MON-BOT | Hg bb Komutları! ",`
**<a:elmas_23:753542886410158140> = \`hg-kanal #kanal\` : Hoşgeldin Kanalı.**
**<a:elmas_23:753542886410158140> = \`bb-kanal #kanal\` : BayBay kanalı.**


`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["hg-bb"], 
  permLevel: 0
};
exports.help = {
  name: 'hgbb'
}; 