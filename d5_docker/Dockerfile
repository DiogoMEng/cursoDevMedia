# ESPECIFICA A IMAGEM QUE SERÁ USADA
# FROM imagem:version
FROM node:22-alpine3.20

# DEFINE DIRETÓRIO DE TRABALHO DENTRO DO CONTAINER
WORKDIR /cursoDocker

# COPY diretorioLocal diretorioContainer
COPY ./requirements.txt /cursoDocker/requirements.txt

# INSTALA OS PACOTES LISTADOS
RUN npm i

# CRIA NOVO USER NOMEADO COM ID DE USUÁRIO DE 1000
# define diretorio inicial para home
RUN useradd -m -u 1000 user
USER user
ENV HOME=/home/user PATH=/home/user/.local/bin:$PATH

# DEFINE O DIRETÓRIO DE TRABALHO DENTRO DO CONTAINER
WORKDIR $HOME/app

# COPIA CONTEÚDO DO DIRETÓRIO LOCAL PARA home/app
# define o usuário criado como proprietário dos arquivos
COPY --chown=user . $HOME/app

# CMD - primeiro comando executado
CMD ["npm", "run", "dev"]