const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '-'
 let yardım = new Discord.RichEmbed() 

.setAuthor(`MON-BOT'Un yardım menüsüne hoşgeldin!`)
.setColor('1')
.addField("MON-BOT | Genel Komutları! ",`
**<a:elmas_23:753542886410158140> = \`davet\` : Davet Menüsünü Açar.**
**<a:elmas_23:753542886410158140> = \`öneri\` : Mon-Bot Hakkında Önerileriniz.**
**<a:elmas_23:753542886410158140> = \`profil\` : Bir Kullanıcınızn Bilgilerine Bakarsınız**
**<a:elmas_23:753542886410158140> = \`bot-bilgi\` : Bot hakkında bilgi verir.**
**<a:elmas_23:753542886410158140> = \`embed\` :  Embed yazısı ile bota yazı yazdırırsın**
**<a:elmas_23:753542886410158140> = \`yapımıcm\` :   Geliştiricilerimi Görebilirsiniz.**
**<a:elmas_23:753542886410158140> = \`afk\` :   AFK moduna geçiş yaparsın.**
`)
 .setFooter("MON-BOT") .setTimestamp()

.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["genel"], 
  permLevel: 0
};
exports.help = {
  name: 'genel'
}; 