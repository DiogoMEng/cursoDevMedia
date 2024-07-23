const express = require('express');
const { colecaoUF } = require('./data/colecaoUFs');
const { buscaUfs } = require('./services/buscaUf.service');

const app = express();

// # RETORNA TODOS OS ELEMENTOS DA COLEÇÃO #
app.get('/ufs', (req, res) => {

    try {

        // ARMAZENA O VALOR DO PARÂMETRO ENVIADO PELO CLIENTE
        const nomeUF = req.query.busca;
        const resultado = nomeUF ? buscaUfs.buscaUfsPorNome(colecaoUF, nomeUF) : colecaoUF;
    
        if(!(resultado.length > 0)) throw Error();

        res.json(resultado);

    } catch (error) {
        res.status(404).json({err: "Nenhuma UF encontrada"});
    }

});

// # RETORNA UM ELEMENTO ESPECÍFICO DENTRO DA COLEÇÃO #
app.get('/ufs/:id', (req, res) => {

    // "/ufs/:id" -> endpoint com parâmetro dinâmico

    try {
        
        // LER O VALOR DE UM PARÂMETRO
        const id = parseInt(req.params.id);
        const uf = buscaUfs.buscaUfPorId(colecaoUF, id);


        if(!(Number.isInteger(id))) {
            res.status(404).json({err: 'Requisição Inválida'});
            return;
        }

        if(!uf) throw Error();
    
        res.json(uf);

    } catch (error) {
        res.status(404).json({err: 'UF não encontrada'})        
    }

});

app.listen(8080, () => {
    console.log('Servidor Iniciado\nhttp://localhost:8080')
})