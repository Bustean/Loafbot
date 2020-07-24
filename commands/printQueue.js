function printQueue(message, serverQueue) {
    if (!message.member.voice.channel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    if (!serverQueue)
        return message.channel.send("Queue is empty")
    for (i = 0; i < serverQueue.songs.length; i++) {
        console.log(`[${i + 1}] ${serverQueue.songs[i].title}`)
        message.channel.send(`[${i + 1}] **${serverQueue.songs[i].title}**`)
    }
}

module.exports = {
    printQueue,
};