import { SlashCommandBuilder } from "discord.js";

const slash=new SlashCommandBuilder()
.setName('yazı')
.setDescription('yazı gelirse kazanırsın!!')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    var a=Math.random();
    if(a<0.5){
interaction.reply('yazı geldi kazandın');
    }
    else{
        interaction.reply('tura geldi kaybettin');
    }
},buttons:[], button:async(interaction,member,guild,client,button)=>{}}

