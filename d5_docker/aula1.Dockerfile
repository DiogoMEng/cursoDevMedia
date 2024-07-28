# ESPECIFICA A IMAGEM QUE SERÁ USADA
# FROM imagem:version
FROM node:22-alpine3.20

# DEFINE DIRETÓRIO DE TRABALHO DENTRO DO CONTAINER
WORKDIR /cursoDocker

# INSTALA OS PACOTES LISTADOS
RUN npm i

# CMD - primeiro comando executado
CMD ["npm", "run", "dev"]