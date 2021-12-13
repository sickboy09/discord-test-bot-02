require("dotenv").config()

const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"]
});

const BOT_PREFIX = "&&"
const BOT_COMMANDS = ["mod-me"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   } 

  if (msg.content == 'I love Coding') {
    msg.react('❤');
  }

  if (msg.content === `${BOT_PREFIX}${BOT_COMMANDS[0]}`) {
    modUser(msg.member)
    msg.reply("Done 👍");
  }
});

function modUser(member) {
  member.roles.add("919848876733759518")
}

client.on("messageDelete", msg => {
  msg.channel.send("Stop deleting messages");
});

client.login(process.env.BOT_TOKEN);