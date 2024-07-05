const historicoInflacao = require('../data/dados');
const { ipcaCalculation } = require('../services/calculoIpca.service');
const { ipcaIdFind, ipcaYearFilter, ipcaFilterByMonthAndYear } = require('../services/ipcaFilter.service');

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

    if(!idData) return res.status(404).json({err: 'Elemento não encontrado'});

    res.json(idData);
}

function returnsCalculoIpca(req, res){
    const value = req.query.value;
    const initialMonth = req.query.initialMonth;
    const initialYear = req.query.initialYear;
    const endMonth = req.query.endMonth;
    const endYear = req.query.endYear;

    const ipcaValue = ipcaFilterByMonthAndYear(historicoInflacao, initialMonth, endMonth, initialYear, endYear)

    result = ipcaCalculation(value, ipcaValue);

    res.json(result);
}

module.exports = { returnsIpcaData, returnsIpcaDataYear, returnsIpcaDataId, returnsCalculoIpca };