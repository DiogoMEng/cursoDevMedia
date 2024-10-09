import { retornaCampeonatos, retornaCampeonatosID, retornaCampeonatosAno } from "../services/retornaCampeonatos.service.js";
import checkExistingValues from "../utils/checkChampionship.js";

export async function championshipReturns(req, res) {
    const champion = await retornaCampeonatos();

    const values = checkExistingValues(champion);

    res.status(values.status).json(values.res);
}

export async function championshipIdReturns(req, res) {
    const id = parseInt(req.params.id);

    const champion = await retornaCampeonatosID(id);

    const values = checkExistingValues(champion);

    res.status(values.status).json(values.res);
}