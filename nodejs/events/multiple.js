const EventEmiter = require('events')

class Emiter extends EventEmiter {}
emiter = new Emiter()

emiter.on('knock', function(){
    console.log('Who\'s there?')
})

emiter.on('knock', function(){
    console.log('Go away!')
})

emiter.emit('knock')
emiter.emit('knock')