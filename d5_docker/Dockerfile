# ESPECIFICA A IMAGEM QUE SERÁ USADA
# FROM imagem:version
FROM node:lts-alpine3.19

# COPY diretorioLocal diretorioContainer
COPY ./ /aulaDocker

# CMD - primeiro comando executado
ENTRYPOINT ["npm"]

CMD [ "run", "dev" ]