
## Descrição

Desafio Carupi Backend Nodejs

## Tecnologias
- [Express](https://expressjs.com/pt-br/) - **Micro-Framework** Framework Simples mas bastante funcional, nao opinado e com uma solução bastante performática para lidar com requisições HTTP.
- [MongoDBAtlas](https://www.mongodb.com/atlas/database) - **Database NoSQL** MongoDB em nuvem, utilizando um cluster para armazanamento dos dados (Não necessária a instalação do banco localmente)
- [Mongoose](https://mongoosejs.com/) - **Biblioteca** ODM utilizado para fazer a conexão da api com a base de dados MongoDB.
- [Nodemon](https://www.npmjs.com/package/nodemon) - **Ferramenta** Biblioteca responsável por re-startar a api sempre que uma modificação for feita.


## Instalação

-> Necessária a criação de um cluster (de forma gratuita) no site do MongoDB Atlas (https://www.mongodb.com/atlas/database), adicionar a string de conexão do banco ao arquivo index.js dentro da pasta database.

```bash
$ npm install
```

## Run [Dev]

```
$ npm start
```

## Chamada de rotas
Para testar as rotas, basta importar o arquivo Postman.carupi_collection.json dentro do client Postman, e realizar as requisições.

## Colaboradores

- Eliton Pedrotti
