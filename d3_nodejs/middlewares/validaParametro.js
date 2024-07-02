function validaParametro(parametro) {
    // ISNAN - DETECTA SE UM VALOR É NUMÉRICO OU NÃO
    if(isNaN(parametro)){
        return false;
    } else {
        return true
    }
}

exports.validaParametro = validaParametro;