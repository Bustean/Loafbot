function skip(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    if (!serverQueue)
        return message.channel.send("There ain't nothing to skip")
    serverQueue.textChannel.send(`**${serverQueue.songs[0].title}** skipped`)
    serverQueue.connection.dispatcher.end()
}

module.exports = {
    skip,
};