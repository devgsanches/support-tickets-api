# Sistema de Tickets

Um sistema de gerenciamento de tickets desenvolvido em Node.js para controle de equipamentos e solicitações.

## 💻 Tecnologias

- Node.js
- JavaScript
- Módulos Nativos:
  - `crypto` (geração de IDs)
  - `fs` (manipulação de arquivos)
  - `URL` (gerenciamento de caminhos)

## 🚀 Funcionalidades

- Criação de tickets
- Listagem de tickets (com filtros)
- Atualização de tickets
- Fechamento de tickets com solução
- Remoção de tickets
- Persistência de dados em arquivo JSON

## 📁 Estrutura do Projeto

    src/
    ├── controllers/
    │   └── tickets/
    │       └── create.js
    ├── database/
    │   ├── database.js
    │   └── db.json

## 📌 Endpoints

### Tickets

- `POST /tickets/store` - Criar novo ticket
- `GET /tickets/index` - Listar tickets
- `PUT /tickets/update/:id` - Atualizar ticket
- `PATCH /tickets/close/:id` - Fechar ticket
- `DELETE /tickets/delete/:id` - Remover ticket

## 🔧 Instalação

    # Clone o repositório
    git clone [url-do-repositorio]

    # Entre no diretório
    cd [nome-do-diretorio]

    # Instale as dependências
    npm install

    # Inicie o servidor
    npm run dev

## 📝 Estrutura do Ticket

    {
      id: "uuid-v4",
      equipment: "string",
      description: "string",
      user_name: "string",
      status: "open" | "closed",
      solution?: "string" // apenas quando fechado
    }

## 🤝 Contribuição

Sinta-se à vontade para contribuir com o projeto:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---
Desenvolvido com ❤️ por Guilherme Sanches
