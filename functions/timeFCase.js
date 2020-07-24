function timeFCase(timeIn, timeUnit) {
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
                return 1
            else
                return 2
        case timeInS < 3600:
            if (Math.floor((timeInS / 60) % 60) < 10) {
                if (timeInS % 60 < 10)
                    return 3
                else
                    return 4
            } else {
                if (timeInS % 60 < 10)
                    return 5
                else
                    return 6
            }
        default:
            if (Math.floor((timeInS / 60) % 60) < 10) {
                if (timeInS % 60 < 10)
                    return 7
                else
                    return 8
            } else {
                if (timeInS % 60 < 10)
                    return 9
                else
                    return 10
            }
    }
}

module.exports = {
    timeFCase,
};