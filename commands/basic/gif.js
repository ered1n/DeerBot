const {randomGif} = require('../../utils/utils.js');

/**
 * Gif search command
 */

module.exports = {
	//  Send random gif
	name: 'gif',
	description: 'Sends a random gif',
	execute(client, message, args) {
		if (args.length > 0) {
			randomGif(client, args.join(' ')).then((url) => {
				if (url) {
					message.channel.send(url);
				} else {
					message.channel.send('No gif found 😭');
				}
			});
		} else {
			message.channel.send("Enter a search query.")
		}
    },
};