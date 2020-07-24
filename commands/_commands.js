const { breathe } = require('./breathe')
const { changePrefix } = require('./changePrefix')
const { execute } = require('./execute')
const { help } = require('./help')
const { nowPlaying } = require('./nowPlaying')
const { pause } = require('./pause')
const { printQueue } = require('./printQueue')
const { resume } = require('./resume')
const { searchVideo } = require('./search')
const { skip } = require('./skip')
const { stop } = require('./stop')

class commands { }

const cmds = new commands()

Object.assign(cmds, { breathe, changePrefix, execute, help, nowPlaying, pause, printQueue, resume, searchVideo, skip, stop })

module.exports = cmds;