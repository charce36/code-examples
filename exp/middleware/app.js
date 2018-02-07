const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log(req.method + ": " + req.url)
  next()
})

app.use((req, res, next) => {
  if(req.query.api_key){
    next()
  }
  else{
  res.status(401).send({msg: 'Not authorized'})
}
})

app.get('/', (req, res) => {
  res.send({msg: 'hello world'})
})

// inline mindleware
app.get('/accounts', (req, res, next) => {
  console.log('accounts inline middleware')
  next(new Error('ooops'))
},(req, res) => {
  res.send({msg: 'accounts'})
})

app.get('/transactions',(req, res) => {
  res.send({msg: 'transactions'})
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
  console.log(error)
})

app.listen(3000)