const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:elmas_23:753542886410158140>\ ${client.user.username}   \  `)
        .setDescription(`
<a:elmas_23:753542886410158140>\ **Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8) 
<a:elmas_23:753542886410158140>\ **Destek Sunucusu İçin** [TIKLA](https://discord.gg/a2jVCK7)
<a:elmas_23:753542886410158140>\ **WEBSİTE** [TIKLA](https://nonstop-rightful-song.glitch.me/index.html)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}  Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
