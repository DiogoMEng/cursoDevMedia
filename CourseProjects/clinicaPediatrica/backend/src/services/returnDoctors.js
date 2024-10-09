import pool from "../db/conn.js"

const conn = await pool.getConnection();

async function returnListOfDoctors() {
    const listDoctors = await conn.query('SELECT id_medico, nome_medico, telefone, email, especialidade FROM contatos_medicos');
    const doctors = listDoctors[0];

    conn.release();

    return doctors;
}

export { returnListOfDoctors }