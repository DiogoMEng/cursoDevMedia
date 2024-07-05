function ipcaYearFilter(data, year) {
    return data.filter(data => data.ano === year);
}

function ipcaIdFind(data, id) {
    return data.find(data => data.id === id);
}

function ipcaFilterByMonthAndYear(historicoInflacao, initialMonth, endMonth, initialYear, endYear) {

    let valueIpcaMonthYear = historicoInflacao.filter(dado => (dado.mes >= initialMonth && dado.mes <= endMonth) && (dado.ano >= initialYear && dado.ano <= endYear));

    let valueIpca = valueIpcaMonthYear.map(dado => dado.ipca);

    return valueIpca;
}

module.exports = { ipcaIdFind, ipcaYearFilter, ipcaFilterByMonthAndYear }