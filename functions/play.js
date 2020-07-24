const ytdl = require('ytdl-core')
const fs = require('fs')

function play(guild, song, queue) {
    const serverQueue = queue.get(guild.id)
    if (!song) {
        serverQueue.voiceChannel.leave()
        queue.delete(guild.id)
        return
    }

    const dispatcher = serverQueue.connection.play(ytdl(song.url, { highWaterMark: 1 << 25 }, { type: 'opus' })).on('finish', () => {
        config = JSON.parse(fs.readFileSync(`config.json`))
        if(config[`${guild.name}repeat`] == 'on') {
            serverQueue.songs.push(serverQueue.songs[0])
        }
        serverQueue.songs.shift()
        play(guild, serverQueue.songs[0], queue)
    }).on('error', error => console.error(error))
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5)
    serverQueue.textChannel.send(`Starting: **${song.title}**`)
}

module.exports = {
    play,
};