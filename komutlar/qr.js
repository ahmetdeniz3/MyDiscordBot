// input komutu kullan sabah
import { SlashCommandBuilder,AttachmentBuilder, EmbedBuilder } from "discord.js";
import QRCode from 'qrcode';
const slash=new SlashCommandBuilder()
.setName('qr')
.setDescription(' r')
.addStringOption(option=>
  option.setName('input')
  .setDescription('input')
  .setRequired(true))
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    var qrgenerate=await QRCode.toDataURL(interaction.options.get('input').value)
    const sfbuff = new Buffer.from(qrgenerate.split(',')[1], "base64");
  const sfattach = new AttachmentBuilder(sfbuff, {name:"output.png"});
  var embed=new EmbedBuilder()
  .setTitle('qr')
  .setImage('attachment://output.png')
  await interaction.reply({files:[sfattach],embeds:[embed]})
},buttons:[], button:async(interaction,member,guild,client,button)=>{}}