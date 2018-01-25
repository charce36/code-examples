const fs = require('fs')
fs.writeFile('./data/message.txt', 'Hello World!', function (error) {
  if (error) return console.error(error)
  console.log('Writing is done.')
})