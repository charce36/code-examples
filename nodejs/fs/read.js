const fs = require('fs')

const path = require('path')
fs.readFile(path.join(__dirname, '/data/customers.csv'), {encoding: 'utf-8'}, function (error, data) {
  if (error) return console.error(error)
  console.log(data)
})