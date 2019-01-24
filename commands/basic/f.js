/**
 * Command to pay your respects
 */

module.exports = {
    name: 'f',
    description: 'Pay your respects',
    execute(client, message, args) {
        //  Checks if message has args
        let msg = (args.length > 0) ? message.author + " has paid respects to " + args : message.author + " has paid respects";
        message.channel.send(msg);
    },
};