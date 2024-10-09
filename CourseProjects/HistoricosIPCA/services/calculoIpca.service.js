function ipcaCalculation(value, ipca){
    const map_result = ipca.map(v => 1 + (v/value));
    const result_reduce = map_result.reduce((acc, v) => acc *= v);
    const ipca_result = (value * result_reduce).toFixed(3);

    return { ipca_result }
}

module.exports = { ipcaCalculation };