import fs from 'node:fs/promises'

// new URL -> metodo nativo js para criar arquivo em um caminho especifico, se baseia neste arquivo atual e substitui o nome do arquivo por este file-name passado no primeiro parâmetro
const DB_PATH = new URL('db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(DB_PATH, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      }) // lê o arquivo db.json, os dados lá estão em string, converto em JSON e atribuo a #database, caso não tenha o arquivo > catch > e chama o método #persist para criar o arquivo
  }

  #persist() {
    fs.writeFile(DB_PATH, JSON.stringify(this.#database))
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }
    this.#persist()
  }

  select(table, filters) {
    let data = this.#database[table] ?? []
    if (filters) {
      data = data.filter(row => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return data
  } // method for list all data for database or filtered data

  // DOC - Select
  /*
  if (filters) {
      data = data.filter(row => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        }) // entries separa as chaves e valores de um objeto em um array de arrays
      })

verifico se estou recebendo algum filtro como parâmetro no select, se sim, pego os dados do banco,
aplico um filter, e por cada linha, executo uma função, chamo o .entries passando como parâmetro o(s) filter(s), e concateno com o .some()

- .entries(filters) separa as chaves e valores de um objeto (o obj no caso está sendo o parâmetro > filters) em um array de arrays
- .some() = metodo de array, e como já transformei em array, este método testa se pelo menos um elemento no array passa no teste implementado pela função fornecida. Ele retorna true se, no array, ele encontra um elemento para o qual a função fornecida retorna true; caso contrário, ele retorna false. Ele não modifica o array.

retornou true pois existe uma linha com o atributo status
return row[key].toLowerCase().includes(value.toLowerCase())

e chamo o .includes() para verificar se naquela linha existe o valor que desestruturei/transformei em array no some, portanto, ele procurará pela linha que possui como valor, aquilo que passei como query params.

- AI assessment by response:Sim, você está correto! Sua explicação está precisa sobre como o código funciona.

  */
  update(table, ticketId, data) {
    const ticket = this.#database[table].find(ticket => ticket.id === ticketId)

    if (ticket) {
      ticket['equipment'] = data.equipment
      ticket['description'] = data.description
      ticket['updated_at'] = data.updated_at

      this.#persist()
    } else {
      console.log('Ticket not found')
    }
  }

  closeTicket(table, ticketId, solution) {
    const ticket = this.#database[table].find(ticket => ticket.id === ticketId)

    if (ticket) {
      ticket['status'] = 'closed'
      ticket['solution'] = solution
      this.#persist()
    }

    if (!ticket) {
      console.log('Ticket is not found.')
    }
  }

  remove(table, ticketId) {
    const index = this.#database[table].findIndex(
      ticket => ticket.id === ticketId
    )

    if (index !== -1) {
      this.#database[table].splice(index, 1)
      this.#persist()
    } else {
      console.log('Ticket not found.')
    }
  }
}
