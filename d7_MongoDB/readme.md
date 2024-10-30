# MONGO DB

# Sumário

1. <a href="#introducao-nosql">Introdução ao NoSQL</a>

---

# <p id="introducao-nosql">Introdução ao NoSQL</p>

Bancos não relacionais podem conter relacionamentos, mas no geral eles não se relacionais.
- garante um melhor desempenho quando se lida com grandes volumes de dados.
- possui diferentes formas de armazenamento.
  1. Grafos.
  2. Documentos.
  3. Colunas.
- esquemas mais flexíveis.

Tipos de Bancos NoSQL:

**Orientados a Colunas**
- Cassandra.
- Hypertable.
- MonetDB.

**Chave-Valor**
- Table Storage.
- DynamoDB.
- Redis.

**Grafos**
- Neo4j.
- Infinite Graph.
- ArangoDB.

**Documentos**
- MongoDB.
- CouchDB.
- DocumentDB.

## Exemplos práticos - MongoDB

```bash
# Inicia o MongoDB
sudo systemctl start mongod

# Executa o Mongo na linha de comando
mongosh
```

Comandos básicos MongoDB:

```bash
# Criação de banco de dados
use database_name

# Criando uma coleção
db.colecao_name

# Inserindo um registro na coleção
db.colecao_name.insertOne({ chave: valor, ..., chaveN: valorN })

# Retorna uma coleção
db.colecao_name.find()
```

O MongoDB é orientado a documentos (Documentos = Linhas) que são armazenados em coleções (Coleções = Tabelas).

3.50