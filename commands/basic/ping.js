/**
 * Ping command
 */

module.exports = {
    //  Sends delay between bot and servers in ms
	name: 'ping',
	description: 'Check the bot\'s ping',
	execute(client, message, args) {
		message.channel.send('Pong! :ping_pong:```' + client.ping + 'ms```');
	},
};