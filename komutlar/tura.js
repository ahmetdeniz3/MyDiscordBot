import { SlashCommandBuilder } from "discord.js";

const slash=new SlashCommandBuilder()
.setName('tura')
.setDescription('tura gelirse kazanırsın!!')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    var a=Math.random();
    if(a<0.5){
interaction.reply('tura geldi kazandın');
    }
    else{
        interaction.reply('yazı geldi kaybettin');
    }
},buttons:[], button:async(interaction,member,guild,client,button)=>{}} 