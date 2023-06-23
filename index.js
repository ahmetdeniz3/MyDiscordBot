import { Client, GatewayIntentBits } from 'discord.js';
import axios from 'axios';
import env from './env.json' assert {type:'json'}
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  if (message.content === '!ping') {
    await message.reply('Pong!');
  }
  else if(message.content==='!yazıtura'){
    var a=Math.random();
    if(a<0.5) return await message.reply('yazı!');
    else return await message.reply('tura!');
  }
  else if(message.content==='!neko'){
   var res = await axios.get('https://nekos.best/api/v2/neko')
   await message.reply(res.data.results[0].url);
  }
  else if(message.content.substring(0,5)=='!yazı'){
    await message.reply('https://fortnitefontgenerator.com/img.php?textcolor=000000&text='+encodeURI(message.content.substring(6,message.content.length))+'&fontsize=250px')
  }
  else if(message.content=='!temizle'){
    if(message.member.permissions.has('Administrator')){
    var newchannel=await message.channel.clone();
    await message.channel.delete();
    await newchannel.send('Temizlendi!!')
    }
    else await message.reply('yetkiniz yok amk!')
  }
});

client.login(env.TOKEN);
