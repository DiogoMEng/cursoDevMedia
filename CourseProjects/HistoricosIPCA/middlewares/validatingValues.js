function validYear(req, res, next) {
    const year = req.query.year;
    const initialYear = req.query.initialYear;
    const endYear = req.query.endYear;

    if(year < 2015 || year > 2023) return res.status(404).json({err: 'Nenhum histórico encontrado para o ano especificado'});
    
    if(initialYear < 2015) {
        return res.status(404).json({err: 'O ano não pode ser menor que 2015'});
    } else if (endYear > 2023) return res.status(404).json({err: 'O ano não pode ser maior que 2023'});

    next();
}

function validatesInitialAndFinalValue(req, res, next) {
    const initialMonth = req.query.initialMonth;
    const initialYear = req.query.initialYear;
    const endMonth = req.query.endMonth;
    const endYear = req.query.endYear;

    if(initialMonth > endMonth || initialYear > endYear) return res.status(400).json({err: 'Parâmetros inválidos'})

    next();
}

module.exports = { validYear, validatesInitialAndFinalValue };