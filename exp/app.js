// Imports
const express = require('express') 
// Instantiations
const app = express() 

// Configuration
app.set('port', process.env.PORT || 3000)
app.set('views', 'templates') // The directory the templates are stored in
app.set('view engine', 'jade')

// Routes
app.get('/', (req, res)=>{
  res.send('hello world')
})
// Bootup
app.listen(3000)