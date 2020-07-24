const fs = require('fs')

function updateconfig(config) {
    fs.writeFile(`config.json`, JSON.stringify(config, null, 2), function writeJSON(err) {
      if (err) {
        console.log(`prefix change function error`)
        console.log(err)
      }
      console.log(JSON.stringify(config, null, 2))
      console.log(`writing changes to config.json`)
    })
  }

module.exports = {
    updateconfig,
};