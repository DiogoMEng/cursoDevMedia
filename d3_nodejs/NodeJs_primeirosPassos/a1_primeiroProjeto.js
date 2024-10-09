// ### INSTÂNCIANDO O EXPRESS ###
const express = require('express');
const { retornarMensagemDoDia } = require('./services/mensagemDoDia.service');
const { IMC } = require('./services/calculoImc.service');
const { validaParametro } = require('./middlewares/validaParametro');
const app = express();

let data = new Date();

// ### RECEBE REQUISIÇÃO DO FRONTEND, E DEVOLVE UMA RESPOSTA ###
app.get('/', (req, res) => {
    // REQ - CONTÉM OS DADOS ENVIADOS NA REQUISIÇÃO
    // RES - TRATA AS RESPOSTAS PARA O FRONTEND

    // QUERY - CONTÉM TODOS OS PARÂMETROS ENVIADOS PELO FRONT-END EM FORMATO JSON
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (validaParametro(peso) && validaParametro(altura)) {
        var imc = IMC.efetuarCalculoImc(peso, altura);
        var status = IMC.retornarStatusIMC(imc);
    } else {
        res.status(400).json({ 'Erro': 'Peso ou altura inválidos.' })
    }

    // JSON - ENVIA AS RESPOSTAS PARA O FRONTEND COM OS DADOS EM FORMATO JSON
    res.json({
        imc: imc,
        status: status
    });
});

app.get('/mensagemdia', (req, res) => {
    let dia = data.getDate();
    console.log(data.getFullYear());
    let mensagemSelecionada = retornarMensagemDoDia(dia);

    res.json({ mensagem: mensagemSelecionada });
});

// ### MONITOTAMENTO DE REQUISIÇÕES ATRAVÉS DA PORTA HTTP ###
// LISTEN - MANTÉM A EXECUÇÃO DA FUNÇÃO
app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor   node iniciado em: ' + data + '\n\nhttp://localhost:8080');
});