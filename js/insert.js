//Exemplo de inserção de dados com o node

const db = require('./database')

async function insertData(){
  await db.connect()
  // inseri Eventos

  var queryEvento = "INSERT INTO Usuarios (nome, email, senha) VALUES ($1, $2, $3)"

  await db.query(queryEvento, ['exemplo', 'exemplo@exemplo.com', 'exemplo'])
  await db.query(queryEvento, ['admin', 'admin@admin.com', 'admin'])

  
  console.log("Dados Inseridos");
}

insertData()
