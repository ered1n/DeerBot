/*
    DeerBot is a Discord bot made by Eredin#2903 & Angelo#1337

                     /|       |\
                  `__\\       //__'
                     ||      ||
                   \__`\     |'__/
                     `_\\   //_'
                     _.,:---;,._
                     \_:     :_/
                       |@. .@|
                       |     |
                       ,\.-./ \
                       ;;`-'   `---__________-----.-.
                       ;;;                         \_\
                       ';;;                         |
                        ;    |                      ;
                         \   \     \        |      /
                          \_, \    /        \     |\
                            |';|  |,,,,,,,,/ \    \ \_
                            |  |  |           \   /   |
                            \  \  |           |  / \  |
                             | || |           | |   | |
                             | || |           | |   | |
                             | || |           | |   | |
                             |_||_|           |_|   |_|
                            /_//_/           /_/   /_/

    If you are reading this, please stop yoinking our code.
*/

//  Imports
const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//  Load command files 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//  Runs on bot startup
client.once('ready', () => {
    console.log('Bot online');
    client.user.setActivity('deer', {type: 'WATCHING'});
});

//  Listen to messages sent from client
client.on('message', message => {

    //  Reacts with emoji if message contains a certain word
    if (message.content.toLowerCase().includes("deer")) { message.react('🦌'); }  
    if (message.content.toLowerCase().includes("cat")) { message.react('🐱'); }
    if (message.content.toLowerCase().includes("dog")) { message.react('🐶'); }
    if (message.content.toLowerCase().includes("snek")) { message.react('🐍'); }
    if (message.content.toLowerCase().includes("duck")) { message.react('🦆'); }
    if (message.content.toLowerCase().includes("bear")) { message.react('🐻'); }
    //if (message.content.toLowerCase().includes("nigger")) { message.react('HYPERBRUH'); }
    //if (message.content.toLowerCase().includes("gnome")) { message.react('GNOMED'); }

    //  Return if message doesn't start with prefix or author is bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //  Get command and arguments
    const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase()

    //  Execute command
	try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

client.login(token);