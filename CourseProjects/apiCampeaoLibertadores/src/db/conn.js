import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost', // informa o servidor do banco de dados
    user: 'root', // informa o usuário do banco de dados
    password: 'root', // informa a senha do usuário
    database: 'libertadoresdb' // informa o nome do banco de dados
})

export default pool;