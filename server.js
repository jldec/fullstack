// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'frontend/build'),
})

fastify.register(require('fastify-cors'), { 
  origin: "*"
})

let count = 0

fastify.get('/api/counter', async (request, reply) => {
  return { hello: 'world', count: count++ }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()