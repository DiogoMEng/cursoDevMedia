# AUTENTICAÇÃO EM APIs

# SUMÁRIO

1 <a href="#introducao-jwt">NodeJS: introdução ao JWT</a>

Autenticação é como protegemos os dados dos usuários, sabendo quem os criou e identificando quem deveria acessá-los.

**Token** - utilizado para substituir as credenciais dos usuários e identifica-lo.

**JWT (Json Web Token)** - biblioteca baseada em tokens.
- usuário envia credenciais autenticadas para o servidor, e o servidor envia um token com uma assinatura única para aquele usuário.
- token possui a chave e o payload (Dados do cliente)

