//exclui todas do banco 

const db = require('./database')

async function dropTables(){
  await db.connect()
  await db.query(`DROP TABLE Usuarios CASCADE`)
  await db.query(`DROP TABLE Categoria CASCADE`)
  await db.query(`DROP TABLE MetaGasto CASCADE`)
  await db.query(`DROP TABLE ContaBancaria CASCADE`)
  await db.query(`DROP TABLE Transacao CASCADE`)
  await db.end()

  console.log("Tabelas removidas");
}

dropTables()
