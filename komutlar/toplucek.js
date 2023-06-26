// input komutu kullan sabah
import { ChannelType, SlashCommandBuilder, VoiceChannel } from "discord.js";
const sleep= async(ms)=> await new Promise((resolve, reject) =>setTimeout(resolve,ms))
const slash=new SlashCommandBuilder()
.setName('toplucek')
.setDescription(' d')
.addChannelOption(option=>
  option.setName('kanal1')
  .setDescription('kanal')
  .setRequired(true)
  .addChannelTypes(ChannelType.GuildVoice))
  .addChannelOption(option=>
    option.setName('kanal2')
    .setDescription('kanall')
    .setRequired(true)
    .addChannelTypes(ChannelType.GuildVoice))

export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
  console.log(interaction.options)
    if(!member.permissions.has('Administrator')) return await interaction.reply('bunu yapmaya yetkiniz bulunmamaktadır');
        var birincioda=await interaction.options.getChannel('kanal1')
        var ikincioda=await interaction.options.getChannel('kanal2')
        birincioda.members.forEach(async(e)=>{
          e.voice.setChannel(ikincioda);
          await sleep(250);
        })
        interaction.channel.send('<#'+ikincioda.id+'> odasına taşındınız!!');
      }
      ,buttons:[], button:async(interaction,member,guild,client,button)=>{}
}