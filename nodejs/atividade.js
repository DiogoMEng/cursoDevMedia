const express = require('express');
const app = express();

let celular = '(21)99999-9999';
let valido = celular.length === 14 ? true : false;

app.get('/', (req, res) => {
    res.json({telefone: valido});
});

app.listen(8080 , () => {

    console.log('Servidor iniciado');

});