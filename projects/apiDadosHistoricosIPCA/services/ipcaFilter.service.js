function ipcaYearFilter(data, year) {
    return data.filter(data => data.ano === year);
}

function ipcaIdFind(data, id) {
    return data.find(data => data.id === id);
}

module.exports = { ipcaIdFind, ipcaYearFilter }