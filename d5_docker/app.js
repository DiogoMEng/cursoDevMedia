import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({ res: 'Servidor Rodando' })
});

app.listen('3000', () => {
    const data = new Date();
    console.log('Servidor rodando em ' + data);
    console.log('http://localhost:3000')
})