const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('app/database/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(process.env.JSON_SERVER_PORT, () => {
  console.log(`JSON Server is running at http://localhost:${process.env.JSON_SERVER_PORT}`)
})

module.exports = server;