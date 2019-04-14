const Discord = require('discord.js');
const bot = new Discord.Client();



//When The Bot Becomes Online
bot.on('ready' , () =>{

    console.log('The Bot Is Alive!');
    bot.user.setStatus("online");
    bot.user.setActivity('-help');
})


bot.login{process.env.BOT_TOKEN:}
