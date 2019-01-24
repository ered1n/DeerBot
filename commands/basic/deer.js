const {randomGif} = require('../../utils/utils.js');

/**
 * Deer gif command
 */

module.exports = {
	//  Send random deer gif
	name: 'deer',
	description: 'Sends a random deer gif',
	execute(client, message, args) {
		randomGif(client, 'deer').then((url) => {
			message.channel.send(url);
		});
    },
};