const { play } = require('./play')
const { playbackInfo } = require('./playbackInfo')
const { timeFCase } = require('./timeFCase')
const { timeFormatter } = require('./timeFormatter')
const { updateconfig } = require('./updateconfig')

class functions { }

const fcs = new functions()

Object.assign(fcs, { play, playbackInfo, timeFCase, timeFormatter, updateconfig })

module.exports = fcs;