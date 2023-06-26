
// input komutu kullan sabah
import { SlashCommandBuilder } from "discord.js";
import puppeteer from 'puppeteer';
const sleep= async(ms)=> await new Promise((resolve, reject) =>setTimeout(resolve,ms))
const slash=new SlashCommandBuilder()
.setName('screenshots')
.setDescription(' z')
.addStringOption(option=>
  option.setName('input')
  .setDescription('input')
  .setRequired(true))
export default {slash:slash.toJSON(),answer:async(interaction,member,guild,client)=>{
  await interaction.deferReply()
  try {
    

  if(isValidUrl(interaction.options.get('input').value)==false){
return await interaction.editReply('lütfen geçerli bir URL giriniz')
  }

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(interaction.options.get('input').value);
    await sleep(5000);
    await page.setViewport({width: 1920, height: 1080});
    var screenshot=await page.screenshot();
  interaction.editReply({files:[screenshot]})
  browser.close();

} catch (error) {
    interaction.editReply('hata');
}
},buttons:[], button:async(interaction,member,guild,client,button)=>{}} 
const isValidUrl = urlString=> {
  var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
  '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
return !!urlPattern.test(urlString);
}