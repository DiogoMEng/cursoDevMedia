# MONGO DB

# Sumário

1. <a href="#introducao-nosql">Introdução ao NoSQL</a>
2. <a href="#conceitos-nosql">Conceitos acerca do NoSQL</a>
3. <a href="#estrutura-mongodb">Estrutura de Funcionamento do MongoDB</a>

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

# Criação de filtro
db.colecao_name.find({ "column_name": valor })
```

O MongoDB é orientado a documentos (Documentos = Linhas) que são armazenados em coleções (Coleções = Tabelas).

---

# <p id="conceitos-nosql">Conceitos acerca do NoSQL</p>

_Nota: o modelo relacional é mais indicado de uso quando estamos lidando com entidades que possam ser presentadas por um modelo estritamento rígido e bem estruturado_

_**Escalabilidade**: capacidade do sistema suportar um aumento substancial de carga sem piorar o desempenho._

_**ACID**: Atomicidade, Consistências, Isolamento e Durabilidade._
- atomicidade: agrupa operações em uma unidade trabalho, permitindo recuperar a base em seu estado anterior em casos de falhas.
- isolamento: uma transação não pode ter acesso aos dados de outra.
- Durabilidade: garante que os dados sejam persistidos após a finalização da transação.

Em comparação com os modelos **RELACIONAIS**, as bases de dados **NÃO RELACIONAIS** apresentam uma maior performance e escalabilidade.

![alt text](public/img/image2.png)
- Consistência: todos os nós do sistema distribuído acessam exatamente a mesma informação a qualquer momento.
- Disponibilidade: toda requisição recebida pelo sistema gerará uma resposta.
- Tolerância a falhas: o sistema continua a funcionar caso um dos seus sistemas enfrente dificuldades.

Caracteristica chave-valor - toda consulta do banco de dados se dá apenas por uma chave identificadora.
- mecanismo de cache: expiração de chaves para evitar a execução de procedimentos computacionais caros repetidos.

_Nota: a chave identificadora é transformada (função transformadora) em um valor numérico que representa o endereço de memória._

**O modelo documental** utilizado por bases não relacionais utilizam a agregação, que é semelhante ao modelo relacional.

_Nota: para lidar com arquivos digitais o modelo digital é o mais indicado._

---

# <p id="estrutura-mongodb">Estrutura de Funcionamento do MongoDB</p>