const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new EventEmitter()

emitter.once('knock', function() {
    console.log('Who\'s there?')
  })
  
  
emitter.emit('knock')
emitter.emit('knock')
