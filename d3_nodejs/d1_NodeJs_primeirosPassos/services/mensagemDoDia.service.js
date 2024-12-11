let dados = require('../data/data');

function retornarMensagemDoDia(dia) {

    return dados.frases[dia - 1];

};

exports.retornarMensagemDoDia = retornarMensagemDoDia;