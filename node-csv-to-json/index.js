const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')
var jsonfile = require('jsonfile')

const convertCSVtoJSON = (filePath = path.join(__dirname, '/data/customer-data.csv')) => {
    console.log('Converting.. ', filePath)

    const convert = (filePath, callback) => {
        let buff = new Array()
        csv()
            .fromFile(path.join(__dirname, '/data/customer-data.csv').toString())
            .on('json', (jsonObj) => {
                buff.push(jsonObj)
            })
            .on('done', (error) => {
                callback(buff)
            })
    }

    convert(null, (data) => {
        //const content = JSON.stringify(data, null, 4);

        jsonfile.writeFile("./data/output.json", data, function(err) {
            console.error(err)
        })
    })
}

convertCSVtoJSON()