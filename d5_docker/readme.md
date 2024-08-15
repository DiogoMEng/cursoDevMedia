# Docker

## Sumário

1. <a href="#introducao-docker">Docker: Introdução</a>
2. <a href="#construcao-docker">Docker: Construção</a>

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
