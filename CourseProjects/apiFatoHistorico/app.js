// # PROJETO: API DE FATOS HISTÓRICOS #

// OBJETIVO: API RECEBE VALOR DO ANO E RETORNA UM JSON COM O FATO HISTÓRICO
// OCORRIDO NO ANO INFORMADO

const express = require('express');
const { searchFactByYear } = require('./services/searchFact.service');
const { validYear } = require('./services/validYear.service');

const app = express();

app.get('/', (req, res) => {

    let factYear = req.query.ano;

    try {
        if (!validYear(factYear)) throw Error;

        var fact = searchFactByYear(factYear);
    } catch (error) {
        res.status(400).json({ err: 'Valor Informado Inválido. O ano deve está entre 1966 hà 2020' })
    }


    res.json({ year: fact })

});

app.listen(8080, () => {
    console.log("http://localhost:8080")
})