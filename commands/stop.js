function stop(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    if (!serverQueue) {
        return message.channel.send("Queue already empty")
    } else {
        serverQueue.songs = []
        serverQueue.connection.dispatcher.end()
        return message.channel.send("Stopped")
    }
}

module.exports = {
    stop,
};