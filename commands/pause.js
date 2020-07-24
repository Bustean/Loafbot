function pause(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    if (!serverQueue)
        return message.channel.send("There ain't nothing to pause")
    serverQueue.songs[0].position = Date.now() - serverQueue.songs[0].timestarted
    serverQueue.connection.dispatcher.pause()
    serverQueue.textChannel.send(`**${serverQueue.songs[0].title}** paused`)
}

module.exports = {
    pause,
};