const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('<a:monn:722716496584769546> Sayaç Komutlarımız <a:monn:722716496584769546>')
.setTimestamp()
.addField('<a:monn:722716496584769546> Otorol Ayarlama.', '**▫️** **Kullanım  m.otorol-ayarla**')
.addField('<a:monn:722716496584769546> Sayaç Kapatma.', '**▫️** **Kullanım   m.otorol-kapat ')
.addField('<a:monn:722716496584769546> Otorol mesaj ayarlama.', '**▫️** **Kullanım   m.otorol-msg ')

.addField('MON-BOT Otorol SİSTEMİ')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sayaç',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};