const { updateconfig } = require('../functions/updateconfig')

function repeatMode(message, config) {
    switch (message.content.substr(message.content.search(" ") + 1, message.content.indexOf(' '))) {
        case 'on':
            config[`${message.guild.name}repeat`] = 'on'
            message.channel.send('There shall be cancer')
            break
        case 'off':
            config[`${message.guild.name}repeat`] = 'off'
            message.channel.send('There shall be no cancer')
            break
        default:
            message.channel.send('That ain\'t right')
    }
    updateconfig(config)
}

module.exports = {
    repeatMode,
};