const { updateconfig } = require('./updateconfig')

function configInit(message, config) {
    if (config[`${message.guild.name}`] == undefined) {
        config[`${message.guild.name}`] = '!'
        updateconfig(config)
      }
      if (config[`${message.guild.name}repeat`] == undefined) {
        config[`${message.guild.name}repeat`] = 'off'
        updateconfig(config)
      }
}

module.exports = {
    configInit,
};