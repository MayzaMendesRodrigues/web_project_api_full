![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

# **Tripleten – web_project_around_express**

## 📋 Descrição do Projeto

**Around Express** é uma API REST robusta desenvolvida em **Node.js** com **Express.js**, que serve como backend para o projeto **"EUA Afora"**.

Nos **Sprints 15 e 16**, o projeto evoluiu significativamente, migrando a persistência de dados de arquivos JSON para o **MongoDB**.
A API agora suporta operações **CRUD completas** para gerenciar **Usuários** e **Cartões**, incorporando esquemas de dados com **validação robusta** para garantir a integridade.

O projeto faz parte do curso de **Desenvolvimento Web da T10**, focando na criação de servidores backend e APIs RESTful.

---

## ⚡ Funcionalidades

### 👤 Gerenciamento de Usuários

* Listagem de todos os usuários (`GET /users`)
* Busca de usuário por ID (`GET /users/:userId`)
* Criação de novo usuário (`POST /users`)
* Atualização do perfil do usuário (`PATCH /users/me`)
* Atualização do avatar do usuário (`PATCH /users/me/avatar`)

### 💳 Gerenciamento de Cartões

* Listagem de todos os cartões (`GET /cards`)
* Criação de novo cartão (`POST /cards`)
* Deleção de cartão por ID (`DELETE /cards/:cardId`)
* Adicionar/Remover like em um cartão (`PUT` / `DELETE /cards/:cardId/likes`)

### 🧱 Validação de Dados

* Campos obrigatórios e restrições de tamanho em **Usuário** (`name`, `about`, `avatar`)
* Validação de formato de **URL** para o campo `avatar`

### 🧩 Outros Recursos

* **Tratamento de erros**: respostas adequadas para recursos não encontrados (404) e erros do servidor (500)
* **Middleware de Logging**: registro de todas as requisições com data e método HTTP
* **Hot Reload**: reinicialização automática durante o desenvolvimento
* **Testes de API**: realizados via **Postman**

---

## 🛠️ Tecnologias e Técnicas Utilizadas

### Backend

* **Node.js** – Runtime JavaScript
* **Express.js** – Framework web minimalista
* **MongoDB** – Banco de dados NoSQL
* **Mongoose** – Modelagem de dados e interface com MongoDB
* **ES6 Modules** – Sistema de módulos moderno do JavaScript

### Ferramentas de Desenvolvimento

* **ESLint** – Configuração Airbnb para manter a qualidade do código
* **Nodemon** – Hot reload durante o desenvolvimento
* **EditorConfig** – Padronização de configurações do editor
* **Postman** – Testes e desenvolvimento de APIs

---

## 📁 Estrutura do Projeto

```
web_project_around_express/
├── app.js                # Arquivo principal da aplicação e conexão com DB
├── routes/               # Módulos de roteamento
│   ├── users.js          # Rotas relacionadas aos usuários
│   └── cards.js          # Rotas relacionadas aos cartões
├── controllers/          # Lógica de negócios (CRUD)
│   ├── users.js          # Controladores para usuários
│   └── cards.js          # Controladores para cartões
├── models/               # Esquemas e modelos Mongoose
│   ├── user.js           # Modelo Mongoose de Usuário
│   └── card.js           # Modelo Mongoose de Cartão
├── package.json          # Configurações e dependências do projeto
└── ... (outros arquivos de configuração)
```

---

## 🔒 Solução de Autorização Temporária (Sprint 16)

Foi implementada uma **solução temporária de autorização** para facilitar o desenvolvimento do CRUD e a associação de cartões aos autores.

O **ID de usuário** é codificado diretamente na lógica para garantir que um cartão tenha o mesmo autor no banco de dados, independentemente de quem o criou.
Essa é uma solução **provisória**, que será substituída por **autenticação e autorização completas** nos próximos Sprints.

---

## ⚙️ Pré-requisitos

* **Node.js** (versão 14 ou superior)
* **npm** (gerenciador de pacotes)

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/web_project_around_express.git
cd web_project_around_express

# Instale as dependências
npm install
```

Baixe os arquivos de dados:

* `users.json`
* `cards.json`

Salve-os na pasta `data/`.

---

## ▶️ Execução

### Modo Produção

```bash
npm run start
```

### Modo Desenvolvimento (Hot Reload)

```bash
npm run dev
```

O servidor estará disponível em:
👉 `http://localhost:3000`

---

## 📡 Endpoints da API

### 👤 Usuários

| Método | Endpoint           | Descrição                           | Resposta           |
| ------ | ------------------ | ----------------------------------- | ------------------ |
| GET    | `/users`           | Lista todos os usuários             | Array de usuários  |
| GET    | `/users/:id`       | Busca usuário por ID                | Objeto do usuário  |
| POST   | `/users`           | Cria um novo usuário                | Usuário criado     |
| PATCH  | `/users/me`        | Atualiza o perfil do usuário logado | Usuário atualizado |
| PATCH  | `/users/me/avatar` | Atualiza o avatar do usuário        | Avatar atualizado  |

### 💳 Cartões

| Método | Endpoint               | Descrição                  | Resposta                |
| ------ | ---------------------- | -------------------------- | ----------------------- |
| GET    | `/cards`               | Lista todos os cartões     | Array de cartões        |
| POST   | `/cards`               | Cria um novo cartão        | Cartão criado           |
| DELETE | `/cards/:cardId`       | Deleta um cartão por ID    | Confirmação de exclusão |
| PUT    | `/cards/:cardId/likes` | Adiciona um like no cartão | Cartão atualizado       |
| DELETE | `/cards/:cardId/likes` | Remove um like do cartão   | Cartão atualizado       |

---

## 🧪 Exemplos de Uso

**Listar todos os usuários:**

```bash
curl http://localhost:3000/users
```

**Buscar usuário específico:**

```bash
curl http://localhost:3000/users/8340d0ec33270a25f2413b69
```

**Listar todos os cartões:**

```bash
curl http://localhost:3000/cards
```

---

## 📜 Scripts Disponíveis

```bash
# Iniciar servidor em modo produção
npm run start

# Iniciar servidor em modo desenvolvimento
npm run dev

# Executar linter
npm run lint
```

---

## 🔢 Códigos de Status HTTP

| Código | Descrição                                     |
| ------ | --------------------------------------------- |
| 200    | Sucesso na requisição                         |
| 404    | Recurso não encontrado                        |
| 500    | Erro interno do servidor                      |
| 503    | Serviço indisponível (erro ao carregar dados) |

---

## 🧩 Qualidade do Código

O projeto utiliza **ESLint** com configuração **Airbnb** para manter alta qualidade e consistência do código.

### Regras Customizadas:

* Permite uso de `console.log` para logging
* Permite uso de `_id` (compatibilidade com dados JSON)

---

## 🔮 Próximos Passos

| Etapa | Descrição                                                                                     |
| ----- | --------------------------------------------------------------------------------------------- |
| 17.1  | **Registro de Usuário** – Criar rota `POST /signup` para registrar usuários com email e senha |
| 17.2  | **Login de Usuário** – Criar rota `POST /signin` que retorna um **JWT**                       |
| 17.3  | **Geração de JWT** – Implementar tokenização com `jsonwebtoken`                               |
| 17.4  | **Middleware de Autorização** – Validar o token no cabeçalho `Authorization`                  |
| 17.5  | **Proteção de Rotas** – Aplicar o middleware às rotas CRUD e de perfil                        |
| 17.6  | **Tratamento de Erros de Auth** – Retornar `401 Unauthorized` para tokens inválidos           |
| 17.7  | **Ajuste na Criação de Cartão** – Associar o cartão ao usuário do JWT                         |

---

## 📄 Licença

Este projeto está sob a licença **MIT**.
Veja o arquivo **LICENSE** para mais detalhes.
