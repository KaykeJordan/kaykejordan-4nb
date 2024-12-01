// README.md
# Backend em TypeScript seguindo MVC

## Descrição
Este projeto é um backend desenvolvido em TypeScript seguindo a arquitetura MVC (Model-View-Controller), conectado a um banco de dados relacional e com autenticação utilizando PostgreeSQL.

## Estrutura do Projeto
- **Controller**: Lida com as requisições HTTP.
- **Routes**: Define as rotas e direciona as requisições.
- **Models**: Representa as entidades do banco de dados.
- **Repositories**: Interage diretamente com o banco de dados.
- **Services**: Contém a lógica de negócios.

## Instruções para Rodar o Projeto
1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute `npx ts-node src/server.ts` para iniciar o servidor.

## Rotas Disponíveis
### Autenticação
- **POST** `/api/auth/register`
  - Descrição: Cria um novo usuário com a senha hashed.
  - Body: `{ "name": "string", "email": "string", "password": "string" }`
  - Retorna: Os dados do usuário criado.

- **POST** `/api/auth/login`
  - Descrição: Realiza o login de um usuário.
  - Body: `{ "email": "string", "password": "string" }`
  - Retorna: Dados do usuário autenticado e cria a sessão.

---
