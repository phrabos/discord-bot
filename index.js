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

  
  if(message.content.startsWith('!start')){
  //  const mode = message.content.split(" ")[1]
  //  const time = message.content.split(" ")[2]
   const [mode, timeoutLength] = message.content.split(" ").slice(1)
    const sender= message.author.username
    let isActive = true;
    let shameLevel = 0;  
    
    switch(mode){
      case 'easy':
      break;
      case 'medium':
      break;
      case 'sadistic':
      break;
      default: message.reply('not valid option, please type easy medium od sadistic') 
      return;
    }
    message.reply(` your level of ${mode} has been set.`)

    message.reply(`amount of time ${timeoutLength}`);
    
    let timeoutObj = client.setTimeout( () => { 
      isActive = false;
      console.log('timeout complete');
      message.reply('no longer shamed, rejoins society');
     }, timeoutLength);
     

  client.on('message', message=>{
    
    if(message.author.bot)return
    if(message.content.includes('stop') && message.author.username === sender && isActive === true){
      isActive = false;
      client.clearTimeout(timeoutObj);
      message.reply('timer ended')
      console.log('timer ended')

    }


    }) 
  }

  // if(message.content.includes('!config')){
  //   const configSteps = {
  //     validTimer: false,
  //   }
  //   const sender = message.author.username
  //   if(!message.author.bot)
  //   message.reply('pick from three levels of persistence: 1)mild 2)medium 3)sadistic')
  //   client.on('message', message =>{
  //     if(message.author.bot)return
  //     if(!Number(message.content) && !message.author.bot){
  //       return message.reply('must enter a number between 1 - 3')
  //     }
  //     if(message.content === '1' || message.content === '2' || message.content === '3'){
  //       message.reply('ready to set up! Tell me how many milliseconds you want to be productive...')
  //       client.on('message', message =>{
  //         if(message.author.bot)return
  //         if(message.author.username === sender){
  //         if(!Number(message.content)){
  //           return message.reply('must enter a number')
  //         }
  //         if(message.content){
  //           message.reply(`timer set for ${message.content} milliseconds`)
  //           message.reply(`you are now in shame-mode`)
  //           setTimeout(() => {
  //             message.reply('now out of shame-mode, carry on')
  //           }, message.content);
  //         }
  //       }
          
  //       })
  //     }
  //   })
  // }
  if(message.content.includes('!switch')){
    const configSteps = {
      configStep: 0,
    }
    const sender = message.author.username
    if(!message.author.bot)
    message.reply('pick from three levels of persistence: 1)mild 2)medium 3)sadistic')
    client.on('message', message =>{
      if(message.author.bot)return
      const expression = message.content;
      switch(expression){
        case '1': message.reply('small amount of restrictions applied');
          break;
        case '2': message.reply('medium amount of restrictions applied');
          break;
        case '3': message.reply('sadistic amount of restrictions applied');
          break;
        default:  ('must enter a number between 1 - 3')
      }
      message.reply('Tell me how many milliseconds you want to be productive...')

      
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