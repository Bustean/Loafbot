const ytdl = require("ytdl-core")
const { searchVideo } = require('../functions/search')
const { play } = require('../functions/play')

async function execute(message, serverQueue, queue) {
    const args = message.content.split(" ")

    const voiceChannel = message.member.voice.channel
    if (!voiceChannel)
        return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
    const permissions = voiceChannel.permissionsFor(message.client.user)
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send("I ain't got permissions")
    }

    if (ytdl.validateURL(args[1])) {
        const songInfo = await ytdl.getInfo(args[1])
        const song = {
            title: songInfo.title,
            url: songInfo.video_url,
            duration: songInfo.length_seconds,
            timestarted: Date.now(),
            position: 0
        }

        if (!serverQueue) {
            const queueContruct = {
                textChannel: message.channel,
                voiceChannel: voiceChannel,
                connection: null,
                songs: [],
                volume: 5,
                playing: true
            }

            queue.set(message.guild.id, queueContruct)

            queueContruct.songs.push(song)

            try {
                var connection = await voiceChannel.join()
                queueContruct.connection = connection
                play(message.guild, queueContruct.songs[0], queue)
            } catch (err) {
                console.log(err)
                queue.delete(message.guild.id)
                return message.channel.send(err)
            }
        } else {
            serverQueue.songs.push(song)
            return message.channel.send(`${song.title} added to queue`)
        }
    } else {
        searchVideo(message, serverQueue, queue)
    }
}

module.exports = {
    execute,
};