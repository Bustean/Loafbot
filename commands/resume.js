function resume(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    if (!serverQueue)
        return message.channel.send("There ain't nothing to resume")
    serverQueue.songs[0].timestarted = Date.now() - serverQueue.songs[0].position
    serverQueue.connection.dispatcher.resume()
    serverQueue.textChannel.send(`**${serverQueue.songs[0].title}** resumed`)
}

module.exports = {
    resume,
};