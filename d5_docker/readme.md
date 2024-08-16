# Docker

## Sumário

1. <a href="#introducao-docker">Docker: Introdução</a>
2. <a href="#construcao-docker">Docker: Construção</a>
3. <a href="#build-context">Docker: Build Context</a>
4. <a href="#docker-compose">Docker: Docker Compose</a>

   - <a href="#funcionamento">Compose: Funcionamento</a>
   - <a href="#especificando-projeto">Compose: Especificando nome de projeto</a>
   - <a href="#variaveis-ambiente">Compose: Variáveis de Ambiente</a>

## <p id="introducao-docker">Docker: Introdução</p>

Ferramenta que permite empacotar não só a aplicação, mas também todo o ambiente que essa aplicação será executada.

- permite que o ambiente de execução não se modifique.
- facilita no desenvolvimento da infraestrutura e configuração da máquina.
- instala qualquer programa suportado pelo linux.

Etapas na utilização do docker:

1. Criar Dockerfile.
2. Criar imagem.
3. Subir Conteiner.

_Nota: em casos de problemas, o docker facilita no rollback devido as imagens serem versionadas._

Container Stateless - quando um container é encerrado, tudo que foi gerado é reiniciado no container anterior.

- os dados são perdidos assim que o container é reiniciado.

Recursos do docker:

- volumes: mapeia um diretório do host como um diretório do contêiner.
  - compartilhamentos do filesystem do host com o do container.
  - stateful: preserva o estado.
- docker compose: toda a infraestrutura é especificada.

Cloud Native - aplicaçãoes pensadas para funcionar em nuvem.

_Nota: uma boa prática dentro do docker é criar um container para cada serviço existente dentro da aplicação (ex: banco de dados, apache, redis)._

Exemplo: comando para construir a imagem. </br>
`docker build -t name_container .`

- -t: permite nomear o container.

Exemplo: comando para visualizar as imagens presentes na máquina.</br>
`docker image ls`

Exemplo: comando para subir o container para execução.</br>
`docker run -p 8080:80 meu_container`

- -p: permite o acesso a uma porta do container.

## <p id="construcao-docker">Docker: Construção</p>

Tipos comuns de instrução Dockerfile:

1. `FROM image` - base para imagem.
2. `RUN command` - executa comando sobre a imagem atual.
3. `WORKDIR directory` - define diretório de trabalho.
4. `COPY src dest` - copia arquivos ou diretórios locais para o container.
5. `CMD command` - define programa padrão quando o container é iniciado.

_OBS: cada Dockerfile possui um único CMD._

_Nata: quando houver necessidade de mais de um Dockerfile, utilize esse formato filename.Dockerfile_

- `--file`: utilizado em docker build para especificar o arquivo docker file.

### Sintaxe

`# syntax=docker/dockerfile:1` - instrui sobre a sintaxe que será usada ao analisar o dockerfile.

### Imagem Base

`FROM ubunto:22.04` - define a imagem base para Ubunto na versão 22.04

### Configuração de Ambiente

`RUN apt-get update && apt-get install -y python3 python3-pip` - executa comando de compilação dentro da imagem base.

### Instalando Dependências

`RUN pip install flask==3.0.*` - instala as dependências necessárias para o aplicativo.

_OBS: a instrução acima tem como pré-requisito ter o pip instalado no contêiner de construção._

### Copiando Arquivos

`COPY hello.py /` - copia arquivo do contexto de compilação local para o diretória raiz da imagem.

Contexto de aplicação - conjunto de arquivos que podem ser acessados em instruções do Dockerfile (Exemplo: COPY e ADD).

### Configurando Variáveis de Ambiente

`ENV flask_app=hello` - define a variável de ambiente linux.

### Portas Expostas

`EXPOSE 8000` - define um serviço na porta 8000.

_Nota: instrução não obrigatória._

### Iniciando Aplicativo

`CMD ["flask", "run", "--host", "0.0.0.0", "--port", "8000"]` - inicia o servidor de desenvolvimento.

- Versão "exec form" CMD.

Exemplo: shell form.
`CMD flask run --host 0.0.0.0 --port 8000`

### Building

`docker build -t test:latest .` - cria uma imagem de contêiner.

- "-t test:latest": especifica o nome e a tag da imagem.
- " . ": define o contexto de build para o diretório atual.

`docker run -p 127.0.0.1:8000:8000 test:latest` - executa o aplicativo como um contêiner.

## <p id="build-context">Docker: Build Context</p>

Conjunto de arquivos acessados pelo build.

Contexto de Compilação:

- diretório local.
- repositório GIT ou arquivo de texto.
- arquivo texto (_Nota: interpretado como um Dockerfile_).

Exemplo: contexto local.
`docker build .`

Para repositórios GIT o construtor executa uma clonagem superficial, baixando apenas o commit HEAD.

Exemplo:
`docker build https://github.com/user/myrepo.git`.

- último commit será clonado.

Fragmentos de URL - utilizado para clonar uma ramificação específica de um repositório. `#ref:dir`

- "ref": nome de branch, tag ou hash de commit.
- "dir": subdiretório dentro do repositório.

Exemplo:
`docker build https://github.com/user/myrepo.git#container:docker`.

Exemplo: mantendo o .git.
`docker build --build-arg BUILDKIT_CONTEXT_KEEP_GIT_DIR=1 https://github.com/user/myrepo.git#main`

_OBS: Para repositórios privados será necessário fornecer credenciais de autenticação, podendo ser baseada em token ou SSH._

" .dockerignore " - arquivo usado para excluir arquivos ou diretórios do contexto de compilação.

- ignore-files: utiliza em casos de mais de um Dockerfile.

Ignore-files deve está presente no mesmo diretório do Dockerfile e deve ter a mesmo nomenclatura.

```
build.Dockerfile
build.Dockerfile.dockerignore
```

" ! " - representa uma execeção dentro do .dockerignore.

```
*.md
!README.md
```

- todos os arquivos de markdown serão excluidos, exceto o arquivo que possui a exclamação.

## <p id="docker-compose">Docker: Docker Compose</p>

Ferramenta para definir e executar aplicativos multi-contêineres.

- Controla toda a pilha de aplicativos, facilita o gerenciamento de serviços, redes e volumes em um único arquivo.

Benefícios:

1. Controle Simplificado.
2. Colaboração eficiente.
3. Desenvolvimento Rápido.
4. Portabilidade Entre Ambientes.

### <p id="funcionamento">Compose: Funcionamento</p>

O arquivo YAML é usado para configurar, criar e iniciar os serviços do aplicativo.

Nomes do arquivo compose:

1. `compose.yaml`
2. `compose.yml`
3. `docker-compose.yaml`
4. `docker-compose.yml`

" include " - usado na reutilização de outros arquivos compose ou o modelo do aplicativo em arquivos compose separados.

Comandos docker CLI:

- `docker compose up`: inicia todos os serviços definidos no docker compose.
  1. " -d ": executa os serviços em segundo plano.
- `docker compose down`: para serviços em execução.
- `docker compose logs`: monitora saída dos contêineres em execução e depura problemas.
- `docker compose ps`: lista todos os serviços.

" Compose watch " - visualiza os serviços do compose em execução que são atualizados automáticamente conforme o código é editado.

- `docker compose up --watch`: inicia o modo de obserção de arquivos.

### <p id="especificando-projeto">Compose: Especificando nome de projeto</p>

Usado para isolar ambientes uns dos outros.

Ordem de precedência para cada método:

1. " -p " sinalizador na linha de comando.
2. atributo de nível superior name no arquivo compose / último name para vários arquivos compose.
3. nome base do diretório do projeto que contém o arquivo compose.
4. nome base do diretório atual.

### <p id="variaveis-ambiente">Compose: Variáveis de Ambiente</p>

_OBS: não deve ser usado para passar informações sensíveis._

Atributo " environment " - variáveis criadas diretamento no ambiente do contêiner.

```
services:
  webapp:
    environment:
      - DEBUG=true
```

Exemplo: pegando variável de debug shell ou arquivo .env do diretório do projeto.

```
services:
  webapp:
    environment:
      - DEBUG=${DEBUG}
```

- shell: `docker run -e VARIABLE...`.

Atributo " env_file " - utiliza as variáveis definidas no arquivo ".env".

```
services:
  webapp:
    env_file: "webapp.env"
```

- shell: `docker run --env-file`.

Exemplo: define "env-file" como opcional.

```
services:
  webapp:
    env_file:
      - path: ./default.env
        required: true
```

Interpolação - usada para inserir valores no arquivo Compose em tempo de execução.

```
- arquivo .env
TAG=v1.5

- compose.yaml
services:
  web:
    image: "webapp:${TAG}"
```

Formato de interpolação com colchetes:

1. ${VAR} - valor de VAR
2. ${VAR:-default} - se VAR não for definido, recebe default.
3. ${VAR:?error} - se VAR não for definido, retorna um erro.
4. ${VAR:+replacement} - replacement se VAR estiver definido e não vazio, caso contrário vazio.

CONTINUAR DAQUI -> Maneiras de definir variáveis ​​com interpolação...
