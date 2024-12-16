# FUNDAMENTOS DE CSS

# SUMÁRIO

1. <a href="#conceitos-css">Introdução: Conceitos iniciais de CSS</a>
2. <a href="#seletores-css">Introdução: seletores CSS</a>
3. <a href="#estilo-texto-css">Introdução: Aplicando estilos a elementos de texto</a>

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

https://www.devmedia.com.br/css-aplicando-estilos-a-elementos-de-texto/40777