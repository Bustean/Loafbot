const searchVid = require('yt-search')


function searchVideo(message, serverQueue, queue) {
    const args = message.content.split(" ")
    let searchterm = `${args[1]}`
    for (i = 2; i < args.length; i++) {
        searchterm += `${args[i]} `
    }
    searchVid(searchterm, function (err, res) {
        if (err) return console.log('Error searching')

        let videos = res.videos.slice(0, 10)

        let resp = ''
        for (var i in videos) {
            resp += `**[${parseInt(i) + 1}]:** ${videos[i].title}\n`
        }

        resp += `\n Choose the song ni🅱️🅱️a`

        message.channel.send(resp)

        const filter = m => !isNaN(m.content) && m.content < videos.length + 2 && m.content > 0

        const collector = message.channel.createMessageCollector(filter)

        collector.videos = videos

        internalMessage = message
        collector.once('collect', function (m) {
            const { execute } = require('../commands/execute')
            internalMessage.content = `!play ${this.videos[parseInt(m.content) - 1].url}`
            return execute(internalMessage, serverQueue, queue)
        })
    })
}

module.exports = {
    searchVideo,
};