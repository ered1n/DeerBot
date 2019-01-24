/**
 * Send a message through the bot
 */

module.exports = {
    name: 'say',
    description: 'Send a message with DeerBot',
    execute(client, message, args) {
        message.delete();
        message.channel.send(message.content.split(' ').pop());
    },
};