export const show = (req, res, database) => {
  const { id } = req.params

  const ticket = database.select('tickets', { id })

  res.end(JSON.stringify(ticket))
}
