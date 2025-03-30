// permite que a rota seja compatível com parâmetros (seja, route params ou query params)

// route params: /tickets/:id
// query params: /tickets?page=1&limit=10

export const parseRoutePath = path => {
  const routeParamsRegex = /:([a-zA-Z]+)/g

  const params = path.replaceAll(routeParamsRegex, '(?<$1>[a-z0-9-_]+)')

  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex // retorna uma expressão regular que permite tanto route params quanto query params na url da requisição
}
