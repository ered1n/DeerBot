/**
 * Uptime command
 */

module.exports = {
    //  Sends bot uptime
    name: 'uptime',
    description: 'Check the bot\'s uptime',
    execute(client, message, args) {
        let uptime = client.uptime;

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);

        message.channel.send(`The uptime is:\`\`\`${days} days, ${hours} hours, ${minutes} ${(minutes === 1) ? 'minute' : 'minutes'}\`\`\``);
    },
};