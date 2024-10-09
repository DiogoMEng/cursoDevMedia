const { fatosHistoricos } = require('../data/lista-dos-fatos');

function searchFactByYear(year) {
    const fato = fatosHistoricos.filter(factYear => factYear.Ano == year)

    return fato[0].Fato;
}

exports.searchFactByYear = searchFactByYear;