import { routes } from '../routes/index.js' // import do arquivo que contém todas as rotas
import { Database } from '../database/database.js'
import { extractQueryParams } from '../utils/extractQueryParams.js'

const database = new Database()

export const routeHandler = (req, res) => {
  const route = routes.find(
    route => route.method === req.method && route.path.test(req.url)
  )

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups
    req.query = query ? extractQueryParams(query) : {} // adding query parameters if any
    req.params = params // adding route params if any

    return route.controller(req, res, database)
  } else {
    res.writeHead(404).end()
  }
}
