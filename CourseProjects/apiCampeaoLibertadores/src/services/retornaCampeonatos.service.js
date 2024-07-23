import pool from "../db/conn.js";

const conn = await pool.getConnection();

export async function retornaCampeonatos() {
    const champion_data = await conn.query('SELECT id, campeao, vice, ano FROM campeonatos'); // retorna duas posições, uma com os dados e outra com as informações da tabela
    const champion = champion_data[0];

    conn.release();

    return champion;
}

export async function retornaCampeonatosID(id) {
    const champion_data = await conn.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE id =' + id);

    const champion = champion_data[0];

    conn.release();

    return champion;
}

export async function retornaCampeonatosAno(ano) {
    const champion_data = await conn.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE ano =' + ano);

    const champion = champion_data[0];

    conn.release();

    return champion;
}

export async function retornaCampeonatosTime(time) {
    const champion_data = await conn.query('SELECT id, campeao, vice, ano FROM campeonatos WHERE campeao = "' + time + '"');

    const champion = champion_data[0];

    conn.release();

    return champion;
}