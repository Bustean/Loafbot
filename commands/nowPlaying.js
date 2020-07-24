const { playbackInfo } = require('../functions/playbackInfo')

function nowPlaying(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send("You ain't in no voice channel ni🅱️🅱️a")
  if (!serverQueue)
    return message.channel.send("There ain't nothing playing")
  songRunTime = 0
  if (serverQueue.connection.dispatcher.paused)
    songRunTime = serverQueue.songs[0].position
  else
    songRunTime = Date.now() - serverQueue.songs[0].timestarted
  serverQueue.textChannel.send(`Now playing: **${serverQueue.songs[0].title}**\n${playbackInfo(songRunTime, serverQueue.songs[0].duration)}`)
}

module.exports = {
  nowPlaying,
};