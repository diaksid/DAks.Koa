const cluster = require('cluster')
const config = require('config')

const numCPUs = require('os').cpus().length

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
  require(`./${config.dir.build}/server.js`)
}
