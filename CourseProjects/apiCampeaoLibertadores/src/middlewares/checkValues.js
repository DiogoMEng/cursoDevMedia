import { retornaCampeonatosAno, retornaCampeonatosTime } from "../services/retornaCampeonatos.service.js";

export async function checkYear(req, res, next) {
    const ano = req.query.ano;

    if (typeof (ano) != "undefined") {
        const champion = await retornaCampeonatosAno(ano);
        return res.json(champion);
    } else next();
}

export async function checkTeam(req, res, next) {
    const time = req.query.campeao;

    if (typeof (time) != "undefined") {
        const champion = await retornaCampeonatosTime(time);
        return res.json(champion);
    } else next();
}