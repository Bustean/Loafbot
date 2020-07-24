function help(message) {
    message.channel.send(`List of commands: 
    !play | !p [link] | !play [search term] | !p [search term]
    !skip | !s [link]
    !stop | !st [link]
    !queue | !q [link]
    !pause | !pa [link]
    !resume | !re [link]
    !nowplaying | !np [link]
    !disconnect | !dc [link]
    !help | !h [link]
    !prefix | !prefix [new prefix]
    !repeat | !repeat ["on"/"off"]`)
}

module.exports = {
    help,
};