import { AttachmentBuilder, Client, GatewayIntentBits} from 'discord.js';
import fs from'fs';
import env from './env.json' assert {type:'json'}
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMembers] });
const sleep= async(ms)=> await new Promise((resolve, reject) =>setTimeout(resolve,ms))
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  var command=client.commands[interaction.commandName]
  command.answer(interaction,interaction.member,interaction.guild,client)
});
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;
  var button=client.commands[client.buttons[interaction.customId]]
  button.button(interaction,interaction.member,interaction.guild,client,interaction.customId)
});


client.commands={};
client.buttons={};
const commandFiles=fs.readdirSync('./komutlar').filter(file=>file.endsWith('.js'));

for (const file of commandFiles){
const {default:command}=await import(`./komutlar/${file}`);
client.commands[command.slash.name]=command;
console.log(command.buttons,command.slash.name)
command.buttons.forEach(e=>{
  client.buttons[e]=command.slash.name;
})
}

client.login(env.TOKEN);
