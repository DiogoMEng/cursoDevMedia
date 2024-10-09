import express from 'express';
import router from './routes/routes.js';
// import pool from "./db/conn.js";

const app = express();

app.use(router);

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado: " + data);

    // const conn = await pool.getConnection();

    // console.log(conn.threadId); // identificação da conexão

    // conn.release(); // conexão retorna ao pool após ser finalizada
});