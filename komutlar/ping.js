import { ActionRowBuilder, ButtonBuilder, SlashCommandBuilder,ButtonStyle, BaseInteraction } from "discord.js";

const slash=new SlashCommandBuilder()
.setName('ping')
.setDescription('pongla karşılıyacak')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{

    const confirm = new ButtonBuilder()
    .setCustomId('ping')
    .setLabel('tekrar')
    .setStyle(ButtonStyle.Danger);

const row = new ActionRowBuilder()
    .addComponents(confirm);

await interaction.reply({
    content: `pong ms:`+ (Date.now()-interaction.createdTimestamp).toString(),
    components: [row],
});
},buttons:['ping'], button:async(interaction,member,guild,client,button)=>{
    const confirm = new ButtonBuilder()
    .setCustomId('ping')
    .setLabel('tekrar')
    .setStyle(ButtonStyle.Danger);

const row = new ActionRowBuilder()
    .addComponents(confirm);

await interaction.update({
    content: `pong ms:`+ (Date.now()-interaction.createdTimestamp).toString(),
    components: [row],
}); 
}} 