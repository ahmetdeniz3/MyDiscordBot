import {  ActionRowBuilder, ButtonBuilder, SlashCommandBuilder,ButtonStyle } from "discord.js";
import akaneko from 'akaneko';

const slash=new SlashCommandBuilder()
.setName('feet')
.setDescription('feetphoto')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    if(interaction.channel.nsfw==false){
        return await interaction.reply('bu odada /feet komutu kullanılamaz')
    }
    var ayak=await akaneko.nsfw.feet();

    const kabul = new ButtonBuilder()
    .setCustomId('ayak')
    .setLabel('Reload')
    .setStyle(ButtonStyle.Primary);

const actrow = new ActionRowBuilder()
    .addComponents(kabul);

await interaction.reply({
    content:ayak,
    components: [actrow],
})
},buttons:['ayak'], button:async(interaction,member,guild,client,button)=>{
    var ayak=await akaneko.nsfw.feet();
    const kabul = new ButtonBuilder()
    .setCustomId('ayak')
    .setLabel('Reload')
    .setStyle(ButtonStyle.Primary);

const actrow = new ActionRowBuilder()
    .addComponents(kabul);

await interaction.update({
    content:ayak,
    components: [actrow],
}); }}