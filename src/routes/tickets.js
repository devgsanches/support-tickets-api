import { store } from '../controllers/tickets/create.js'
import { remove } from '../controllers/tickets/delete.js'
import { index } from '../controllers/tickets/index.js'
import { show } from '../controllers/tickets/show.js'
import { update } from '../controllers/tickets/update.js'
import { updateStatus } from '../controllers/tickets/updateStatus.js'

export const tickets = [
  {
    method: 'POST',
    path: '/tickets/store',
    controller: store,
  },
  {
    method: 'GET',
    path: '/tickets/index',
    controller: index,
  },
  {
    method: 'GET',
    path: '/tickets/show/:id',
    controller: show,
  },
  {
    method: 'PUT',
    path: '/tickets/update/:id',
    controller: update,
  },
  {
    method: 'PATCH',
    path: '/tickets/close/:id',
    controller: updateStatus,
  },
  {
    method: 'DELETE',
    path: '/tickets/delete/:id',
    controller: remove,
  },
]
