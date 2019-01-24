/**
 * Util functions
 */
 
const fs = require('fs');

module.exports = {
    getDirectories: function(path) {
        return fs.readdirSync(path).filter(function (file) {
            return fs.statSync(path + '/' + file).isDirectory();
        });
    },
    
    emojiReact: async function(client, message) {
        // List of emoji keywords with their values
        const emojiList = {
            'deer': '🦌',
            'cat': '🐱',
            'dog': '🐶',
            'snek': '🐍',
            'duck': '🦆',
            'bear': '🐻',
            'nigger': client.emojis.get('537976760374132754'),
            'gnome': client.emojis.get('537977259961745408')
        };
        
        //  Loops through emojiList and reacts with emoji
        for (let emoji in emojiList) {
            if (message.content.toLowerCase().includes(emoji)) await message.react(emojiList[emoji]).catch(error => {
                return;
            });
        }
    },
    
    randomGif: function(client, gifQuery) {
        return client.giphy.random(gifQuery).then((res) => {
            return res.data.images.original.url;
        }).catch((err) => {
            return false;
        });
    },
 };