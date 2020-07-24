const { timeFCase } = require("./timeFCase")
const { timeFormatter } = require('./timeFormatter')

function playbackInfo(songRunTime, duration) {
    ret = ``
    switch (timeFCase(duration)) {
        case 9:
        case 10:
            if (songRunTime / 1000 < 3600)
                ret = `[00:${timeFormatter(songRunTime, "ms")}`
            else
                ret = `[${timeFormatter(songRunTime, "ms")}`
            break
        default:
            ret = `[${timeFormatter(songRunTime, "ms")}`
            break
    }
    return ret.concat(`/${timeFormatter(duration, "s")}]`)
}

module.exports = {
    playbackInfo,
};