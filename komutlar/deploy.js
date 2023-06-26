import { SlashCommandBuilder } from "discord.js";
import fs from'fs';

const slash=new SlashCommandBuilder()
.setName('deploy')
.setDescription('deploylama')
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
    var komutlar=[]
const commandFiles=fs.readdirSync('./komutlar').filter(file=>file.endsWith('.js'));
for (const file of commandFiles){
  const {default:command}=await import(`./${file}`);
if(command.slash.name != 'deploy') komutlar.push(command.slash);
}
  try {
    console.log('Started refreshing application (/) commands.');
  
    await guild.commands.set(komutlar)
  interaction.reply('komutlarınız yüklendi');
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
},buttons:[], button:async(interaction,member,guild,client,button)=>{}}