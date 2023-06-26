import axios from 'axios';
import { SlashCommandBuilder } from "discord.js";
const slash=new SlashCommandBuilder()
.setName('nekopictures')
.setDescription(' b')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
        var res = await axios.get('https://nekos.best/api/v2/neko')
        await interaction.reply(res.data.results[0].url);
},buttons:[], button:async(interaction,member,guild,client,button)=>{}} 
