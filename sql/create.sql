CREATE TABLE Usuarios(
 id SERIAL PRIMARY KEY,
 nome VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 senha VARCHAR(255) NOT NULL
);

CREATE TABLE Categoria(
 id SERIAL PRIMARY KEY,
 nome VARCHAR (255) NOT NULL
);

CREATE TABLE MetaGasto(
  id SERIAL PRIMARY KEY,
  dataCadastro DATE,
  descricao VARCHAR(255) NOT NULL,
  dataVencimento DATE,
  valorMeta NUMERIC(50,2),
  valorDisponivelMeta NUMERIC(50,2),
  idCategoria INTEGER NOT NULL,
  
  FOREIGN KEY (idCategoria) REFERENCES Categoria (id)
);

CREATE TABLE ContaBancaria(
  id SERIAL PRIMARY KEY,
  nomeConta VARCHAR (255),
  saldo NUMERIC(50,20)
);

CREATE TABLE Transacao(
  id SERIAL PRIMARY KEY,
  recorrencia BOOLEAN,
  dataTransacao date,
  valor NUMERIC(50,2),
  idContaOrigem INTEGER,
  idCategoria INTEGER,
  tipoTransacao INTEGER,

  FOREIGN KEY (idCategoria) REFERENCES Categoria(id),
  FOREIGN KEY (idContaOrigem) REFERENCES ContaBancaria(id)
)

