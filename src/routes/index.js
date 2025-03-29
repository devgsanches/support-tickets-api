// junta todas as rotas e exporta

import { tickets } from './tickets.js'
import { parseRoutePath } from '../utils/parseRoutePath.js'

// desestruturando apenas os itens do array
export const routes = [...tickets].map(route => ({
  ...route,
  path: parseRoutePath(route.path),
}))
