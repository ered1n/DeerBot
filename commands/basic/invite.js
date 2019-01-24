/**
 * Sends bot and server invite link
 */

module.exports = {
	//  Send invite link
	name: 'invite',
	description: 'Sends an invite link',
	execute(client, message, args) {
		message.channel.send({embed : {
			color: 0x00ff00,
			fields: [{
					name: 'Invite me to your server',
					value: '[Invite](https://discordapp.com/oauth2/authorize?&client_id=387627834178273302&scope=bot&permissions=104197190)'
				},
				{
					name: 'Join my server',
					value: '[Join](https://discord.gg/CF7ArqD)'
				},
			]
		}});
	},
};