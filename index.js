import { AttachmentBuilder, Client, GatewayIntentBits} from 'discord.js';
import { ChatGPTAPI } from 'chatgpt';
import QRCode from 'qrcode';
import axios from 'axios';
import env from './env.json' assert {type:'json'}
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers] });
const sleep= async(ms)=> await new Promise((resolve, reject) =>setTimeout(resolve,ms))
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  //ping-pong
  if (message.content === '!ping') {
    await message.reply('Pong!');
  }
  //yazıtura
  else if(message.content==='!yazıtura'){
    var a=Math.random();
    if(a<0.5) return await message.reply('yazı!');
    else return await message.reply('tura!');
  }
  //neko pictures
  else if(message.content==='!neko'){
   var res = await axios.get('https://nekos.best/api/v2/neko')
   await message.reply(res.data.results[0].url);
  }
  else if(message.content.substring(0,5)=='!yazı'){
    await message.reply('https://fortnitefontgenerator.com/img.php?textcolor=000000&text='+encodeURI(message.content.substring(6,message.content.length))+'&fontsize=250px')
  }
  //sohbet temizleme
  else if(message.content=='!temizle'){
    if(message.member.permissions.has('Administrator')){
    var newchannel=await message.channel.clone();
    await message.channel.delete();
    await newchannel.send('Temizlendi!!')
    }
    else await message.reply('yetkiniz yok amk!')
  }
  //insanları toplu bir şekilde başka ses kanalına atma
  else if(message.content.startsWith('!topluçek')){
    if(!message.member.permissions.has('Administrator')) return await message.reply('bunu yapmaya yetkiniz bulunmamaktadır');
if(message.content.split(' ').length==2){
    if(message.member.voice.channel){
      var args=message.content.split(' ')
      if(!args[1]) return message.reply('id vermemişsiniz')
      var ikincioda=await message.guild.channels.fetch(args[1])
      message.member.voice.channel.members.forEach(async(e)=>{
        e.voice.setChannel(ikincioda);
        await sleep(250);
      })
      message.channel.send('<#'+ikincioda.id+'> odasına taşındınız!!')
    }
  
  }
  else if(message.content.split(' ').length==3){
   
    var args=message.content.split(' ');
    var birincioda=await message.guild.channels.fetch(args[1])
    var ikincioda=await message.guild.channels.fetch(args[2])
    birincioda.members.forEach(async(e)=>{
      e.voice.setChannel(ikincioda);
      await sleep(250);
    })
    message.channel.send('<#'+ikincioda.id+'> odasına taşındınız!!');
  }
  else return message.reply('hatalı argüman!!!')
  
}
//qr
else if(message.content.split(' ')[0]=='!qr'){
  var qrgenerate=await QRCode.toDataURL(message.content.substring(3,message.content.length))
  const sfbuff = new Buffer.from(qrgenerate.split(",")[1], "base64");
const sfattach = new AttachmentBuilder(sfbuff, {name:"output.png"});
message.channel.send({content:message.content.substring(3,message.content.length),files:[sfattach]})
}
/*/ elbet birgün param olucak
else if(message.content.split(' ')[0]=='!soru'){

    const api = new ChatGPTAPI({
      apiKey: env.OPENAI_API_KEY
    })
    const res = await api.sendMessage(message.content.substring(5,message.content.length))
    message.reply(res.text);
}
/*/
});

client.login(env.TOKEN);
