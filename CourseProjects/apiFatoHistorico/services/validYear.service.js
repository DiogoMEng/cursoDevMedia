function validYear(ano) {
    let yearNumber = parseInt(ano);

    if (yearNumber >= 1966 && yearNumber <= 2020) {
        return true
    } else {
        return false
    }
}

exports.validYear = validYear;