// require('@babel/register')
// require('@babel/polyfill')

let cluster = require('cluster')

let numCPUs = 2 // require('os').cpus().length

if (cluster.isMaster) {
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} [${worker.id}] responded`)
  })

  cluster.on('disconnect', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
    cluster.fork()
  })

  for (let i = 1; i < numCPUs; i++) {
    cluster.fork()
  }
} else {
  require('./src/server.js')
}
