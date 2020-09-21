const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("739406100012466228") && !message.member.hasPermission("MANAGE_MESSAGES") ) 
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "712713872393502730";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
    '0': `<a:0_:753543107466756146>`,
    '1': `<a:1_:753542916491706409>`,
    '2': `<a:2_:753542916424597594>`,
    '3': `<a:3_:753542915988520962>`,
    '4': `<a:4_:753542916517134406>`,                       
    '5': `<a:5_:753542916542300202>`,
    '6': `<a:6_:753542916466671637>`,
    '7': `<a:7_:753542916521328670>`,
    '8': `<a:8_:753542916395368469>`,
    '9': `<a:9_:753543107441590312> `}[d];
      })
    }////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
   '0': `<a:0_:753543107466756146>`,
    '1': `<a:1_:753542916491706409>`,
    '2': `<a:2_:753542916424597594>`,
    '3': `<a:3_:753542915988520962>`,
    '4': `<a:4_:753542916517134406>`,                       
    '5': `<a:5_:753542916542300202>`,
    '6': `<a:6_:753542916466671637>`,
    '7': `<a:7_:753542916521328670>`,
    '8': `<a:8_:753542916395368469>`,
    '9': `<a:9_:753543107441590312> `}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "Deâ Diâ";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:753543107466756146>`,
    '1': `<a:1_:753542916491706409>`,
    '2': `<a:2_:753542916424597594>`,
    '3': `<a:3_:753542915988520962>`,
    '4': `<a:4_:753542916517134406>`,                       
    '5': `<a:5_:753542916542300202>`,
    '6': `<a:6_:753542916466671637>`,
    '7': `<a:7_:753542916521328670>`,
    '8': `<a:8_:753542916395368469>`,
    '9': `<a:9_:753543107441590312> `}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
        return {
  '0': `<a:0_:753543107466756146>`,
    '1': `<a:1_:753542916491706409>`,
    '2': `<a:2_:753542916424597594>`,
    '3': `<a:3_:753542915988520962>`,
    '4': `<a:4_:753542916517134406>`,                       
    '5': `<a:5_:753542916542300202>`,
    '6': `<a:6_:753542916466671637>`,
    '7': `<a:7_:753542916521328670>`,
    '8': `<a:8_:753542916395368469>`,
    '9': `<a:9_:753543107441590312> `}[d];
      })
    }
  ///codex
const emoji1 = "<a:3359_dnd:713716350593269810>"
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('MON-BOT')
 .setDescription(`
<a:tac_1:753542917154668554> **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** 

<a:tac_1:753542917154668554>  **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** 

<a:tac_1:753542917154668554> **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.**  `)
 .setFooter(`Komutu Kullanan: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}