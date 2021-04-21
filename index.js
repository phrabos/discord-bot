require('dotenv').config();

const Discord = require('discord.js');
require('discord-reply')
const client = new Discord.Client();
const fetch = require('node-fetch');

client.once('ready', ()=>{
  console.log('systems ready...')
});

client.login(process.env.TOKEN);

client.on('message', async message =>{

  
  if(message.content.includes('!setup')){

    const sender= message.author.username

    message.reply('timeout started')
    
    let timeoutObj = client.setTimeout( () => { 
      console.log('timeout complete');
      message.reply('no longer shamed, rejoins society');
     }, 20000);
     

  client.on('message', message=>{
    
    if(message.author.bot)return
    if(message.content.includes('stop') && message.author.username === sender){
      client.clearTimeout(timeoutObj);
      message.reply('timer ended')
      console.log('timer ended')
      }
    }) 
  }

})

// .then(async ()=>{
  //   message.channel.awaitMessages(()=>{}, {time: 15000})
  //     if(message.content.includes('30')){
    //       message.lineReply('timer started')
    
    // const filter = m => m.content.includes('!time')
    // const collector = channel.createMessageCollector(filter, {time: 8000})
    // collector.on('collect ', message=> {
      //   console.log('message is:', message.content)
//   message.lineReply('timer started')
// })



// message.lineReply('ready to setup! Tell me how many minutes you want to be productive...')

// if(message.content.includes('!weather')){
//   let zipcode = message.content.split(" ")[1];
//   fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${process.env.WEATHER_API_KEY}`)
//     .then(res =>{
//       return res.json()
//     })
//     .then(parsedWeather => {
//       message.channel.send(
//         `The Current Weather
//         Location: ${parsedWeather.name}
//         Forecast: ${parsedWeather.weather[0].main}
//         Current Temp: ${parsedWeather.main.temp} F
//         `
//       )
//     })
// }