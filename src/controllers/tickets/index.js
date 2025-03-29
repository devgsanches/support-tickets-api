export const index = (req, res, database) => {
  const { status } = req.query

  const filters = status ? { status } : null

  const data = database.select('tickets', filters)

  return res.writeHead(200).end(JSON.stringify(data))
}
