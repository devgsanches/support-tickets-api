export const remove = (req, res, database) => {
  const { id } = req.params

  database.remove('tickets', id)

  res.writeHead(204).end()
}
