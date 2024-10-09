function buscaUfsPorNome(colecaoUf, nomeUF) {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUF.toLowerCase()));
}

function buscaUfPorId(colecaoUF, id) {
    return colecaoUF.find(u => u.id === id);
}

exports.buscaUfs = { buscaUfsPorNome, buscaUfPorId };