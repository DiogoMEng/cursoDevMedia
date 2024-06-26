# <h1 style="font-size: 60px; text-align: center">JAVASCRIPT</h1>

# SUMÁRIO

1. <a href="#aplicacao-camadas-js">Javascript: Aplicação em Camadas</a>
2. <a href="#refatoracao-js">Javascript: Refatoração</a>
3. <a href="#contexto-aplicacao-js">Javascript: Contexto da Aplicação</a>
4. <a href="#hierarquia-camadas-js">Javascript: Hierarquia de Camadas</a>
5. <a href="#contextos-p2-js">Javascript: Contextos Parte 2</a>

# <p id="aplicacao-camadas-js">Javascript: Aplicação em Camadas</p>

Código da aplicação está dividido em arquivos diferentes.

- facilita na manutenção do código.
- deixa o código mais organizado e fácil de entender.

O Tipo de camada pode ser determinado de acordo com o seu contexto.

![alt text](./img/image1.png)

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

![alt text](./img/image2.png)

# <p id="contextos-p2-js">Javascript: Contextos Parte 2</p>

Recursos com contextos já existentes devem ser colocados em camadas existentes.
