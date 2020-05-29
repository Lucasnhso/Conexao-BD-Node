//Exemplo de select 

const db = require('./database')

async function listData(){
  await db.connect()
  var result
  // Eventos
  result = await db.query("SELECT * FROM Usuarios")
  console.log("Usuarios: ")
  console.log(result.rows);
}

listData()
