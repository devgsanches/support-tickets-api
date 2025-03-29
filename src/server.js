import http from 'node:http'

import { jsonHandler } from './middlewares/jsonHandler.js'
import { routeHandler } from './middlewares/routeHandler.js'

async function listener(req, res) {
  // logic middleware que recebe dados da request e insere na request e middleware de decisão de rota
  await jsonHandler(req, res)
  routeHandler(req, res)
}

http.createServer(listener).listen(3333, () => {
  console.log('Servidor rodando na porta 3333. 🚀')
})
