require('dotenv').config();

const Discord = require('discord.js');
require('discord-reply')
const client = new Discord.Client();
const fetch = require('node-fetch');

client.once('ready', ()=>{
  console.log('systems ready...')
});

client.login(process.env.TOKEN);

client.on('message', message =>{
  // if(message.content.includes('working')) message.channel.send('it works...')
  if(message.content.includes('!weather')){
    let zipcode = message.content.split(" ")[1];
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${process.env.WEATHER_API_KEY}`)
      .then(res =>{
        return res.json()
      })
      .then(parsedWeather => {
        message.channel.send(
          `The Current Weather
          Location: ${parsedWeather.name}
          Forecast: ${parsedWeather.weather[0].main}
          Current Temp: ${parsedWeather.main.temp} F
          `
        )
      })
  }
  if(message.content.includes('!setup')){
    message.lineReplyNoMention('ready to setup...')
    
  }
});


