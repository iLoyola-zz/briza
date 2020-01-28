const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('schemas/questions.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080

server.use(middlewares)
server.use('/api', router)
server.listen(port)