const EventEmitter = require('events')

class Job extends EventEmitter {
    title = "asdas"

    constructor() {
        title = 'TITLE TEST'
      }
}
job = new Job()

job.on('done', function (timeDone) {
    console.log(job.title + ' Job was pronunced done at'. timeDone)    
})

job.emit('done', new Date())
job.removeAllListeners()