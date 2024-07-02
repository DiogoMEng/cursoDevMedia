const express = require('express');
const { colecaoUF } = require('./data/colecaoUFs');

const app = express();

app.get('/ufs', (req, res) => {
    console.log(colecaoUF);
    res.json(colecaoUF);
});

app.listen(8080, () => {
    console.log('Servidor Iniciado\nhttp://localhost:8080')
})