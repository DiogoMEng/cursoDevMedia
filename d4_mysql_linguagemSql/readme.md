# MYSQL E LINGUAGEM SQL

## Sumário

1. <a href="#introducao-banco-dados-mysql">Introdução ao Banco de Dados MySql</a>

## <p id="introducao-banco-dados-mysql">Introdução ao Banco de Dados MySql</p>

_Nota: O SGBD MariaDB é um fork do MySQL, criado pelo próprio fundador do projeto após sua aquisição pela oracle._

Schemas - bancos de dados presentes no servidor.

Criando um Schema:

1. clique em create new schema > insira um nome.
2. selecione um collation > clique em apply.
   - collation: conjunto de caracteres que o banco de dados possui internamente.

![alt text](img/image1.png)

_OBS: no arquivo my.ini possui as principais configurações presentes no mysql, como por exemplo, a localização de todos as bases de dados._

## Criação de Tabela

Tabela - arquivo dentro do banco de dados onde estarão presente as informações, que podem está dispostas em índices, colunas, chaves primárias/estrangeiras.

Etapas de criação:

1. no schema utilizado, clique com o botão direito em tables > selecione create tables.
2. insira o nome da tabela, selecione uma engine > preenchimento dos campos da tabela.
   - engine: controla como o MySQL irá executar os comandos.
     - mais utilizadas InnoDB e MyISAM. InnoDB, trabalha baseado em transações; e o MyISAM, vai dá look na tabela quando ocorrer necessidade de alteração.

_Nota: o InnoDB sempre será indicado para base de dados que sofreram bastante alterações._

![alt text](img/image2.png)
