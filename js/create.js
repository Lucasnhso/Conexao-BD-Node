//Cria todas tabelas no banco

const db = require('./database')

async function createTables(){
  await db.connect()

  await db.query(`CREATE TABLE Usuarios(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
   )`)

  await db.query(`CREATE TABLE Categoria(
    id SERIAL PRIMARY KEY,
    nome VARCHAR (255) NOT NULL
   )`)

  await db.query(`CREATE TABLE MetaGasto(
    id SERIAL PRIMARY KEY,
    dataCadastro DATE,
    descricao VARCHAR(255) NOT NULL,
    dataVencimento DATE,
    valorMeta NUMERIC(50,2),
    valorDisponivelMeta NUMERIC(50,2),
    idCategoria INTEGER NOT NULL,
    
    FOREIGN KEY (idCategoria) REFERENCES Categoria (id)
  )`)

  await db.query(`CREATE TABLE ContaBancaria(
    id SERIAL PRIMARY KEY,
    nomeConta VARCHAR (255),
    saldo NUMERIC(50,20)
  )`)

  await db.query(`CREATE TABLE Transacao(
    id SERIAL PRIMARY KEY,
    recorrencia BOOLEAN,
    dataTransacao date,
    valor NUMERIC(50,2),
    idContaOrigem INTEGER,
    idCategoria INTEGER,
    tipoTransacao INTEGER,
  
    FOREIGN KEY (idCategoria) REFERENCES Categoria(id),
    FOREIGN KEY (idContaOrigem) REFERENCES ContaBancaria(id)
  )`)

  await db.end()

  console.log("Tabelas Criadas");
}

createTables()
