function timeFormatter(timeIn, timeUnit) {
    timeInS = 0
    switch (timeUnit) {
        case "ms":
            timeInS = Math.floor(timeIn / 1000)
            break
        case "s":
            timeInS = timeIn
            break
        default:
            timeInS = timeIn
            break
    }
    switch (true) {
        case timeInS < 60:
            if (timeInS % 60 < 10)
                return `00:0${timeInS % 60}`
            else
                return `00:${timeInS % 60}`
        case timeInS < 3600:
            if (Math.floor((timeInS / 60) % 60) < 10) {
                if (timeInS % 60 < 10)
                    return `0${Math.floor((timeInS / 60) % 60)}:0${timeInS % 60}`
                else
                    return `0${Math.floor((timeInS / 60) % 60)}:${timeInS % 60}`
            } else {
                if (timeInS % 60 < 10)
                    return `${Math.floor((timeInS / 60) % 60)}:0${timeInS % 60}`
                else
                    return `${Math.floor((timeInS / 60) % 60)}:${timeInS % 60}`
            }
        default:
            if (Math.floor((timeInS / 60) % 60) < 10) {
                if (timeInS % 60 < 10)
                    return `${Math.floor((timeInS / 60) / 60)}:0${Math.floor((timeInS / 60) % 60)}:0${timeInS % 60}`
                else
                    return `${Math.floor((timeInS / 60) / 60)}:0${Math.floor((timeInS / 60) % 60)}:${timeInS % 60}`
            } else {
                if (timeInS % 60 < 10)
                    return `${Math.floor((timeInS / 60) / 60)}:${Math.floor((timeInS / 60) % 60)}:0${timeInS % 60}`
                else
                    return `${Math.floor((timeInS / 60) / 60)}:${Math.floor((timeInS / 60) % 60)}:${timeInS % 60}`
            }
    }
}

module.exports = {
    timeFormatter,
};