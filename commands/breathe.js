const { MessageAttachment } = require("discord.js")

function breathe(message) {
    const attachment = new MessageAttachment('https://choualbox.com/Img/1592170243538.jpg')
    return message.channel.send(attachment)
}

module.exports = {
    breathe,
};