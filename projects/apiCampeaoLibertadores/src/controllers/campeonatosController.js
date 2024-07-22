import { retornaCampeonatos, retornaCampeonatosID, retornaCampeonatosAno } from "../services/retornaCampeonatos.service.js"

export async function championshipReturns(req, res) {
    const champion = await retornaCampeonatos();

    if (champion.length <= 0) {
        return res.status(404).json({ err: "Nenhum campeonato encontrado" })
    } else return champion;
}

export async function championshipIdReturns(req, res) {
    const id = parseInt(req.params.id);

    const champion = await retornaCampeonatosID(id);

    if (champion.length <= 0) {
        return res.status(404).json({ err: "Nenhum campeonato encontrado" })
    } else return champion;
}

export async function championshipYearReturns(req, res) {
    const ano = parseInt(req.query.ano);
    let champion;

    champion = await retornaCampeonatosAno(ano);

    if (champion.length <= 0) {
        return res.status(404).json({ err: "Nenhum campeonato encontrado" })
    } else return champion;
}