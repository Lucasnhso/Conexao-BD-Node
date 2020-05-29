//Arquivo de conexao com o banco
//Configurar a password com a senha do postgres e database com o nome do banco que quer usar

const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'planeje',
  password: '123',
  port: 5432,
})

module.exports = client
