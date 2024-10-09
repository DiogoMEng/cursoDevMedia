# cria uma imagem
FROM python:3.10-alpine

# define diretório de trabalho
WORKDIR /code

# define variáveis de ambiente utilizadas pelo flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# instala o gcc e outras dependências do python
RUN apk add --no-cache gcc musl-dev linux-headers

# copia e instala as dependências do python
COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

# descreve que o container executa na porta 5000
EXPOSE 5000

# copia diretório local para diretório de trabalho da imagem
COPY . .

# define o comando padrão para contêiner
CMD ["flask", "run", "--debug"]