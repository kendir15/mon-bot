const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
   const istatistikler = new Discord.RichEmbed()
    .setColor("1")

  .setFooter('<a:tac_1:753542917154668554> MON-BOT', client.user.avatarURL)
  .addField("<a:tac_1:753542917154668554>** Yapımcım **", `<@552180565814542336>`)
  .addField("<a:tac_1:753542917154668554>** Yapımcım **", `<@720562744629264427>`)
  .addField("<a:elmas_23:753542886410158140>  Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField("<a:elmas_23:753542886410158140>  Çalışma süresi", duration)
  .addField("<a:elmas_23:753542886410158140>  Sunucular", client.guilds.size.toLocaleString(), true)
  .addField("<a:elmas_23:753542886410158140>  Kullanıcı ", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("<a:elmas_23:753542886410158140>  Kanallar", client.channels.size.toLocaleString(), true)
  .addField("<a:elmas_23:753542886410158140>  Discord.JS sürüm", "v"+Discord.version, true)
  .addField("<a:elmas_23:753542886410158140>  Ping", client.ping+" ms", true)
  .addField("<a:elmas_23:753542886410158140>  Linkler", `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucu](https://discord.gg/UeT3dUz))`, false);
  return msg.channel.send(istatistikler);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-bilgi','istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'c',
  usage: '.'
};