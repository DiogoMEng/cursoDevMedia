# FUNDAMENTOS DE CSS

# SUMÁRIO

1. <a href="#conceitos-css">Introdução: Conceitos iniciais de CSS</a>
2. <a href="#seletores-css">Introdução: seletores CSS</a>
3. <a href="#estilo-texto-css">Introdução: Aplicando estilos a elementos de texto</a>
3. <a href="#propriedades-css">Introdução: Propriedades</a>

---

# <p id="conceitos-css">Introdução: Conceitos iniciais de CSS</p>

No CSS declaramos o estilo através de regras, que normalmente é composta de
um seletor e uma ou mais declarações entre chaves.

Exemplo:
```css
h1 {
  background: #fdfdfd;
}
```

tag link - utilizada no html para permite a estilização do documento com css.
- `<link rel="stylesheet" type="text/css" href="<local_estilo_css>" />`

Propriedades:
1. **color** - muda a cor de um texto.
2. **font-size** - muda o tamanho (fonte) de um parágrafo ou texto.

## BOX MODEL

Caixas que envolvem os elementos que possuem margem, borda, preenchimento e conteúdo.

![alt text](./img/image1.png)

## SINTAXE DE UMA REGRA

Composição de uma regra:
- seletor: informa em qual elemento(s) regra deve ser aplicada.
- declaração: informar como os elementos indicados pelo seletor devem ser modificados.

```css
# REGRA

# --> p é o seletor da regra
# --> tudo que este entre as chaves são as declarações
p {
  font-family: Arial;
}

h1, h1 {
# informa a fonte do texto
  font-family: Arial;
# informa a cor do texto
  color: yellow;
}
```

_Nota: os cores também podem ser repassadas utilizando os números hexadecimais._

---

# <p id="seletores-css">Introdução: seletores CSS</p>

![alt text](img/image2.png)

As regras podem ser compostas por um ou mais elementos que receberão as propriedades definidas.

**Seleção por elemento** - especifica o elemento html, ou seja, declaramos apenas a tag que queremos estilizar.

```css
p {
  color: blue;
}

/* Todos os elementos do mesmo tipo terão sua cor alterada para azul */
```

**Seleção por classe** - seleção do elemento por meio do nome da classe que foi definida como atributo.
- somente elementos que possuem o nome da classe sofrerão as modificações.

```css
/* index.html */
<elemento classe="nome_classe"> ... </elemento>

/* style.css */
.nome_classe { 
# define a cor de fundo do elemento
  background: blue
}
```

**Seleção por id** - seleção do elemento pelo id que foi definido como atributo.

```css
/* index.html */
<elemento id="nome_id" classe="nome_classe"> ... </elemento>

/* style.css */
#nome_id{
/* define o preenchimento */
  padding: 5px
}

.nome_classe { 
# define a cor de fundo do elemento
  background: blue
}
```

> OBS: UM ID SÕ PODE PERTENCER A UM ÚNICO ELEMENTO.

## Agrupamentos

**Por Elemento** - insere mais de um elemento em uma regra de estilo para que as alterações sejam iguais para ambos.

```css
h1, p {
  color: blue;
}
```

**Por descendência de elementos** - composto pelo elemento pai e seu elemento filho o qual desejamos selecionar.

```css
div p {
  color: blue;
}
```

**Por Classe** - seleção feita por elementos que possuem duas classes.

```css
.nome_classe1.nome_classe2 {
  color: blue;
}
```

**Por descendência de classe** - seleção realizada por meio de uma classe pai e sua classe filha a qual desejamos selecionar.
- possui a mesma ideia de descendência de elementos.

```css
.nome_classe_pai .nome_classe_filha {
  color: blue;
}
```

---

<p id="estilo-texto-css">Introdução: Aplicando estilos a elementos de texto</p>

**Negrito** - a propriedade `font-weight` é utilizada para aplicar ou remover negrito de um elemento de texto.
- O valor da propriedade pode ser numérico ou por uma palavra.

_Nota: os valores numéricos vão de 100 até 900, tendo um acrescimo de 100 em cada um (Ex: 100, 200, 300, ..., 900)._

```css
p {
  font-weight: 400; /* Corresponde a aparência padrão da maioria das fontes */
}
```

_Nota: os valores mais utilizados são de 400 e 700, sendo o primeiro a fonte padrão e o segundo o negrito._

**Itálico** - estilo obtido utilizando a propriedade `font-style` com o valor italic.

```css
p {
  font-style: italic;
}
```

**Cor** - a cor do texto pode ser aplicada utilizando a propriedade `color`, que recebe tanto valores textuais quanto valores numéricos.
- Valores numéricos: hexadecimais (Ex: `#fdfdfd`).
- Valores textuais: black ou white.

```css
p {
  /* AMBOS REPRESENTAM A MESMA COR */
  /* color: red; */
  color: #ff0000;
}
```

Funções de Cor:
1. RGB - utiliza as cores vermelha, verde e azul para gerar uma cor.
  - `rgb( red, green, blue )` - recebe como parâmetro 3 valores que podem variar de 0 a 255.
2. RGBA - possui as mesmas capacidades da função RGB, porém possui um quarto parâmetro chamado alpha (Varição de 0.0 a 1.0), que determina a opacidade da cor.
3. HSL.

Exemplo: aplicando as funções.
```css
/* RGB */
p {
  color: rgb(81, 155, 0);
}

/* RGBA */
p {
  color: rgba(81, 155, 0, 0.5);
}
```

**Tamanho da Fonte** - a propriedade `font-size` pode ser utilizada para modificar o tamanho da fonte, recebendo palavras-chaves ou numéros.
- Palavras-chaves: xx-small, x-small, small, smaller, medium, larger, large, x-large, xx-large (Vai do menor ou maior).
- Para valores numéricos é importante informar em que unidade css o elemento se encontra.

```css
p {
  font-size: 22px;
}
```

**Fonte** - a propriedade `font-family` pode ser utilizada para customizar a fonte utilizada em um texto.

```css
p {
  font-family: "Arial Black", Gadget, sans-serif;
}
```

_Nota: nomes com várias palavras devem está sempre entre aspas._

**Alinhamento** - para alinhar um texto, pode-se utilizar a propriedade text-align.

Formas de alinhamento:
1. `right`.
2. `left`.
3. `center`.
4. `justify`.

```css
p {
  text-align: center;
}
```

**Propriedade `text-decoration`** - responsável por aplicar linhas em um texto.

```css
h1 {
  font-size: 48px;
  font-family: Verdana;
  text-decoration: underline;
}
```

![alt text](img/image3.png)

_Nota: essa propriedade é muito utilizado para remover o sublinhado dos links que vem por padrão._

**Altura de linhas dos texto** - a propriedade `line-height` pode ser utilizada para adicionar o espaçamento entre as linhas.

```css
p {
  line-height: 48px;
}
```

---

# <p id="propriedades-css">Introdução: Propriedades</p>

