# Docker

## Sumário

1. <a href="#introducao-docker">Docker: Introdução</a>

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
`docker build -t name_container`

- -t: permite nomear o container.

Exemplo: comando para visualizar as imagens presentes na máquina.</br>
`docker image ls`

Exemplo: comando para subir o container para execução.</br>
`docker run -p 8080:80 meu_container`

- -p: permite o acesso a uma porta do container.
