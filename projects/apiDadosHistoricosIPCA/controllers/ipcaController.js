const historicoInflacao = require('../data/dados');
const { calculoIpca } = require('../services/calculoIpca.service');
const { ipcaIdFind, ipcaYearFilter } = require('../services/ipcaFilter.service');

function returnsIpcaData(req, res){
    res.json(historicoInflacao)
}

function returnsIpcaDataYear(req, res){
    let year = parseInt(req.query.year);

    let yearData = ipcaYearFilter(historicoInflacao, year);

    res.json(yearData);
}

function returnsIpcaDataId(req, res){
    let id = parseInt(req.params.id);

    let idData = ipcaIdFind(historicoInflacao, id);

    res.json(idData);
}

function returnsCalculoIpca(req, res){
    let value = req.query.value;
    let initialMonth = req.query.initialMonth;
    let initialYear = req.query.initialYear;
    let endMonth = req.query.endMonth;
    let endYear = req.query.endYear;

    let valorIpca = historicoInflacao.filter(dado => (dado.mes >= initialMonth && dado.mes <= endMonth) && (dado.ano >= initialYear && dado.ano <= endYear));

    res.json(valorIpca);
}

module.exports = { returnsIpcaData, returnsIpcaDataYear, returnsIpcaDataId, returnsCalculoIpca };