const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url = 'http://nodeprogram.com') => {
    console.log('downloading ', url)

    // function fetchPage, two arguments:
    // urlF: url to fetch content
    // callback: callback function to return something
    const fetchPage = (urlF, callback) => {

        // Invoke HTTP Get from http module
        // two arguments, url to get and callback function 
        http.get(urlF, (response) => {

            // local variable like as buffer
            let buff = ''

            // on event data
            response.on('data', (chunk) => {
                buff += chunk
            })

            // on event end
            response.on('end', () => {
                callback(null, buff)
            })
        }).on('error', (error) => {
            console.error(`Got error: ${error.message}`)
            callback(error)
        })
    }

    //Generate from uuid unique folder name
    const folderName = uuidv1()

    // Create folder
    fs.mkdirSync(folderName)


    //Invoke fetchPage
    fetchPage(url, (error, data) => {
        if (error) return console.log(error)
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
        fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
        console.log('downloading is done in folder ', folderName)
    })
}

downloadPage(process.argv[2])