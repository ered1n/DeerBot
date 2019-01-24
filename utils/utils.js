/**
 * Util functions
 */

module.exports = {
    emojiReact: function(client, message) {
        //  Reacts with emoji if message contains a certain word
        if (message.content.toLowerCase().includes("deer")) { message.react('🦌'); }  
        if (message.content.toLowerCase().includes("cat")) { message.react('🐱'); }
        if (message.content.toLowerCase().includes("dog")) { message.react('🐶'); }
        if (message.content.toLowerCase().includes("snek")) { message.react('🐍'); }
        if (message.content.toLowerCase().includes("duck")) { message.react('🦆'); }
        if (message.content.toLowerCase().includes("bear")) { message.react('🐻'); }
        if (message.content.toLowerCase().includes("nigger")) { message.react(client.emojis.get('537976760374132754')); }
        if (message.content.toLowerCase().includes("gnome")) { message.react(client.emojis.get('537977259961745408')); }
    },
 };