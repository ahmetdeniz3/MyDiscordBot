import { SlashCommandBuilder } from "discord.js";

const slash=new SlashCommandBuilder()
.setName('kelime')
.setDescription(' a')
.addStringOption(option=>
    option.setName('input')
    .setDescription('input')
    .setRequired(true))
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    await interaction.reply('https://fortnitefontgenerator.com/img.php?textcolor=000000&text='+encodeURI(interaction.options.get('input').value)+'&fontsize=250px')
},buttons:[], button:async(interaction,member,guild,client,button)=>{}}