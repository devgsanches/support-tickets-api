export const updateStatus = (req, res, database) => {
  const { id } = req.params

  const { solution } = req.body

  database.closeTicket('tickets', id, solution)
  res.end()
}
