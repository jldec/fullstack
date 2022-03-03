import Fastify from 'fastify'

// Fastify plugins
import fastifyStatic from 'fastify-static'
import fastifyCors from 'fastify-cors'

import { fileURLToPath } from 'url';
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true
})

fastify.register(fastifyStatic, {
  root: join(__dirname, '../frontend/build'),
})

fastify.register(fastifyCors, {
  origin: "*"
})

let count = 0

fastify.get('/api/counter', (request, reply) => {
  reply.send({ hello: 'world', count: count++ })
})

// Run the server!
fastify.listen(3001, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // fastify.log.info(`listening on ${address}`)
})