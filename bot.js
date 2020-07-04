require('dotenv').config();
fs = require('fs');
const Discord = require('discord.js');
const { strict } = require('assert');
const bot = new Discord.Client();

const token = process.env.TOKEN;

bot.login(token);


console.log(token)
bot.login(token);

bot.on('ready', () => {
    // List servers the bot is connected to
    console.log("MuseBot is running on:")
    bot.guilds.forEach((guild) => {
        console.log(" - " + guild.name);
        guild.channels.forEach(channel => {
            if (channel.type === "text") {
                // bot.channels.get(channel.id).send("MuseBot is here and ready to inspire you!");
            }
        });
    });
    bot.user.setActivity("to all of you lovely folks",{type:"LISTENING"});
});

bot.on('message', (msg) => {
    // So the bot doesn't reply to iteself
    if (msg.author === bot.user) return;
    if (msg.content.toLowerCase().includes('musebot')) {
        msg.channel.send('Did you need something to draw? Use !inspire');
    }
    processMessage(msg);
});


function processMessage(msg) {
    // Check if the message starts with the `!` trigger
    if (msg.content.indexOf('!') === 0) {
        // we hit a command
        if (msg.content.includes('!inspire')) {
            if(msg.content.match(/\d/g)){
                getXWords(msg,msg.content[msg.content.length-1])
            }else{
                msg.channel.send(getRandomWord(msg));
            }
        }
        else if(msg.content.includes('!animals')){
            let animals=[]
            animals[0]=getRandomAnimal(msg);
            animals[1]=getRandomAnimal(msg);
            while (animals[0]==animals[1]) {
                animals[1]=getRandomAnimal(msg);
            }
            msg.channel.send(animals);
        }
        else if (msg.content.includes('!help')) {
            helpMessage(msg);
        }
    }
}

function getRandomWord(msg) {
    return getRandomLine('./words.txt');
}

function getRandomAnimal(msg){
    return getRandomLine('./animals.txt');
}

function getXWords(msg,x){
    let words=[]
    for (let i = 0; i < x; i++) {
        words[i]=getRandomWord(msg);
    }
    msg.channel.send(words);
}

function getRandomLine(filename){
    var data = fs.readFileSync(filename, "utf8");
    var lines = data.split('\n');
    return lines[Math.floor(Math.random()*lines.length)].replace('\n',' ');
 } 

function helpMessage(msg) {
    msg.channel.send("To get inspiration from me, type in !inspire and I will give you a random thing to draw \n" +
        "If something goes wrong with me or you want to add to the list, please contact @codemastermick");
}