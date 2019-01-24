/**
 * Util functions
 */

module.exports = {
    emojiReact: function(client, message) {
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
            if (message.content.toLowerCase().includes(emoji)) message.react(emojiList[emoji]);
        }
    },
 };