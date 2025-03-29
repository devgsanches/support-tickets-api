import { randomUUID } from 'node:crypto' // lib nativa node

export const store = (req, res, database) => {
  const { equipment, description, user_name } = req.body

  const ticket = {
    id: randomUUID(), // primary key
    equipment,
    description,
    user_name,
    status: 'open',
    created_at: new Date(),
    updated_at: new Date(),
  }

  database.insert('tickets', ticket)

  return res.writeHead(201).end(JSON.stringify(ticket))
}
