import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();

app.use(cors());
app.use(router);

app.listen('9000', () => {
    const data = new Date();
    console.log(`Servidor rodando em ${data}`);
})