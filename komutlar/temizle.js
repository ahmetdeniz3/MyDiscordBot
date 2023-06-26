import { SlashCommandBuilder } from "discord.js";
const slash=new SlashCommandBuilder()
.setName('temizle')
.setDescription(' c')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    if(member.permissions.has('Administrator')){
        var newchannel=await interaction.channel.clone();
        await interaction.channel.delete();
        await newchannel.send('Temizlendi!!')
        }
        else await interaction.reply('yetkiniz yok amk!')
},buttons:[], button:async(interaction,member,guild,client,button)=>{}} 