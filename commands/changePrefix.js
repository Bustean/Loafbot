const { updateconfig } = require('../functions/updateconfig')

function changePrefix(message, config) {

    let prevprefix = config[`${message.guild.name}`]

    config[`${message.guild.name}`] = message.content.substr(message.content.search(" ") + 1, message.content.indexOf(' '))

    message.channel.send(`Changed prefix from "${prevprefix}" to "${config[`${message.guild.name}`]}"`)

    updateconfig(config)
}

module.exports = {
    changePrefix,
};