# <h1 style="font-size: 60px; text-align: center">JAVASCRIPT</h1>

# SUMÁRIO

1. <a href="#aplicacao-camadas-js">Javascript: Aplicação em Camadas</a>
2. <a href="#refatoracao-js">Javascript: Refatoração</a>
3. <a href="#contexto-aplicacao-js">Javascript: Contexto da Aplicação</a>
4. <a href="#hierarquia-camadas-js">Javascript: Hierarquia de Camadas</a>
5. <a href="#contextos-p2-js">Javascript: Contextos Parte 2</a>
6. <a href="#funcoes-js">Javascript: Funções</a>
7. <a href="#objeto-literal-colecao-js">Javascript: Objeto Literal e Coleção de Objetos</a>
8. <a href="#array-js">Javascript: Array</a>

# <p id="aplicacao-camadas-js">Javascript: Aplicação em Camadas</p>

Código da aplicação está dividido em arquivos diferentes.

- facilita na manutenção do código.
- deixa o código mais organizado e fácil de entender.

O Tipo de camada pode ser determinado de acordo com o seu contexto.

# <p id="refatoracao-js">Javascript: Refatoração</p>

_Nota: na programação, refatorar significa melhorar o código sem alterar sua funcionalidade._

Através dessa técnica podemos dividir o código em diversas camadas.

Dividir a aplicação em camadas é um processo de refatoração.

# <p id="contexto-aplicacao-js">Javascript: Contexto da Aplicação</p>

Separação do conteúdo em grupos menores com base em suas semelhanças.

Contexto - conjunto de informações com um objetivo em comum.

Camadas:

1. serviço - executa a lógica central da aplicação.
2. validação.
3. exibição

_OBS: as comadas de validação e exibição podem ser modificadas de acordo com a necessidade do programador._

# <p id="hierarquia-camadas-js">Javascript: Hierarquia de Camadas</p>

Subcamadas - camada de apoio que auxilia de forma direta ou indireta uma camada de hierarquia maior.

# <p id="contextos-p2-js">Javascript: Contextos Parte 2</p>

Recursos com contextos já existentes devem ser colocados em camadas existentes.

# <p id="funcoes-js">Javascript: Funções</p>

Funções são blocos de código que executam uma tarefa.

- permitem reaproveitamento de código.

Exemplo:

```
function soma(x, y) {
    return x + y
}

soma(2, 4)
```

Parâmetro - valor que a função recebe para usar na seu bloco de código.

- funções sem parâmetros não recebem valores para executar seus blocos de código.

## Arrow Functions

Exemplo:

```
const soma = (x, y) => {
    return x + y
}
```

Exemplo:

```
const subtracao = (x, y) => x - y;
```

# <p id="objeto-literal-colecao-js">Javascript: Objeto Literal e Coleção de Objetos</p>

Objeto Literal - estrutura de dados em JavaScript que serve para agrupar dados.

- organiza os dados.
- deve guardar dados de um único domínio.

Exemplo:

```
var produto = {
    id: 9,
    nome: 'Cafeteira Elétrica',
    preco: 99.00,

};
```

Propriedade - relação chave/valor que armazena um dado de um objeto.

Exemplo: `var produto = { id: 9, ...};`

- o id represente um identificador da propriedade do objeto produto.

Coleção - agrupamento de múltiplos dados de uma mesmo domínio.

Exemplo:

```
var alunos = [
    'Diogo Mello',
    'Tatiana Dias',
]
```

Coleção de Objetos - múltiploes objetos agrupados representando um mesmo contexto.

Exemplo:

```
var colecao_disciplinas = [
    { id: 1, nome: 'Portuguès', carga_horaria: 240 },
    { id: 1, nome: 'Matemática', carga_horaria: 220 },
    ...
]
```

# <p id="array-js">Javascript: Array</p>

Estrutura utilizado para agrupar os dados em uma única variável.

- exemplo de coleção de dados.

Exemplo:

```
var nomes = [
    "Diogo", // indice 0
    "Tatiana", // indice 1
    "Carol", // indice 2
    ...
]
```

## Funções Nativas de Arrays

Reduz códigos repetitivos e agiliza o processo de desenvolvimento.

push() - insere um novo elemento em um array.

Exemplo:

```
var nome = [
    'Diogo',
    'Tatiana',
    ...
];

nome.push('Cristian');
```

splice() - remove um ou mais elementos de um array.

Exemplo: `nome.splice(0, 1)`

- parâmetros: posição inicial e quantidade de parâmetros que devem ser removidos.

pop() e shift() - removem o último e o primeiro elemento de um array respectivamente.

Exemplo:

```
nome.pop();

nome.shift();
```

forEach() - executa uma função para cada elemento do array.

Exemplo:

```
function imprimeNome(nome){
    console.log(nome);
}

nome.forEach(imprimeNome)
```

- parâmetros: elementos do array, indice e array.

map() - a partir de um array existente cria uma nova coleção, que terá a mesma quantidade de elementos, porém com valores diferentes do original.

Exemplo: `nome.map(functionCallback)`

filter() - filtra os elementos, e retorna um novo array somente aqueles que atendem as condições.

Exemplo: `nome.filter(functionCallback)`

reduce() - utilizada para reduzir o array em um único valor.

Exemplo: `nome.reduce(functionCallback, valorInicial)`

- parâmetros da função: primeiro valor concatenado e elemento do array atual.

sort() - utilizada para alterar a ordenação dos itens de um array.

- ordenação realizada com base em uma função de ordenação.

Exemplo: `nome.sort()`

_OBS: ao ordenar valores numericos, é possível que não ocorra de forma correta, visto que o sort() ordena do mesmo modo que strings._

Exemplo:

```
function ordenaNumeroCrescente(a, b){
    return a - b
}

function ordenaNumeroDecrescente(a, b){
    return a - b
}

numeros.sort(functionCallback)
```

_Nota: a ordenação para arrays de objetos é a mesma de valores numéricos._
