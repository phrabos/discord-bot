require('dotenv').config();

const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();
// const fetch = require('node-fetch');

client.once('ready', ()=>{
  console.log('systems ready...')
});

client.login(process.env.TOKEN);

client.on('message', message =>{
  // if(message.content.includes('working')) message.channel.send('it works...')
  if(message.content.includes('!setup')){
    message.lineReplyNoMention('ready to setup...')
    
  }
});


