const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
  client.user.setActivity("Minecraft", { type: "PLAYING" })
});

client.on('message', msg => {
  if (msg.content === 'Sveiki' || msg.content === 'sveiki') {
    msg.reply('Sveikas!');
  }
  else if (msg.content === '!naujienos') {
    if(msg.channel.id==='640712536160731137'){
      msg.channel.send('Naujienų nėra.');
    }
  }
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get("640706224945496073").send("Hello there!")
});

client.login(token);
