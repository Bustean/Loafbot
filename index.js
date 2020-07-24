const { Client } = require("discord.js")
const { breathe } = require('./commands/breathe')
const { changePrefix } = require('./commands/changePrefix')
const { execute } = require('./commands/execute')
const { help } = require('./commands/help')
const { nowPlaying } = require('./commands/nowPlaying')
const { pause } = require('./commands/pause')
const { printQueue } = require('./commands/printQueue')
const { repeatMode } = require('./commands/repeat')
const { resume } = require('./commands/resume')
const { skip } = require('./commands/skip')
const { stop } = require('./commands/stop')
const { configInit } = require('./functions/configInit')
const fs = require('fs')

const bot = new Client()

const queue = new Map()

var myconfig = new Object()

myconfig = JSON.parse(fs.readFileSync(`config.json`))

bot.once("ready", () => {
  console.log("Ready!")
})

bot.once("reconnecting", () => {
  console.log("Reconnecting!")
})

bot.once("disconnect", () => {
  console.log("Disconnect!")
})

bot.on("message", async message => {

  if (message.author.bot) return

  configInit(message, myconfig)

  if (!message.content.startsWith(myconfig[`${message.guild.name}`])) return

  const serverQueue = queue.get(message.guild.id)

  if (message.content.startsWith(`${myconfig[`${message.guild.name}`]}`)) {
    if (message.content.search(" ") == -1) {
      switch (message.content.substring(myconfig[`${message.guild.name}`].length)) {
        case 'skip':
        case 's':
          skip(message, serverQueue)
          break
        case 'stop':
        case 'st':
        case 'disconnect':
        case 'dc':
          stop(message, serverQueue)
          break
        case 'queue':
        case 'q':
          printQueue(message, serverQueue)
          break
        case 'pause':
        case 'pa':
          pause(message, serverQueue)
          break
        case 'resume':
        case 're':
          resume(message, serverQueue)
          break
        case 'nowplaying':
        case 'np':
          nowPlaying(message, serverQueue)
          break
        case 'help':
        case 'h':
          help(message)
          break
        case 'breathe':
          breathe(message)
          break
        case 'prefix':
          message.channel.send(`The current prefix is "${myconfig[`${message.guild.name}`]}"`)
          break
        case 'repeat':
          if (myconfig[`${message.guild.name}repeat`] == 'on')
            message.channel.send(`There should be cancer now`)
          else
            message.channel.send(`There shouldn\'t be cancer now`)
          break
        default:
          message.channel.send("Invalid command")
          console.log(message.content)
          console.log("At first switch")
          break
      }
    } else switch (message.content.substr(0, message.content.indexOf(' '))) {
      case `${myconfig[`${message.guild.name}`]}play`:
      case `${myconfig[`${message.guild.name}`]}p`:
        execute(message, serverQueue, queue)
        break
      case `${myconfig[`${message.guild.name}`]}prefix`:
        changePrefix(message, myconfig)
        break
      case `${myconfig[`${message.guild.name}`]}repeat`:
        repeatMode(message, myconfig)
        break
      default:
        message.channel.send("Invalid command")
        console.log(message.content)
        console.log("At second switch")
        break
    }
  }
})

bot.login(myconfig.token)