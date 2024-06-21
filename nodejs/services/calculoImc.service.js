function efetuarCalculoImc(peso, altura) {
    let imc = peso / (altura * altura);

    return imc;
}

function retornarStatusIMC(imc) {
    let status;

    if (imc < 18.5){
        status = 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        status = 'peso normal';
    } else if (imc >= 24.9 && imc < 30) {
        status = 'Acima do Peso'
    } else {
        status = 'Obeso';
    }

    return status;
}

exports.IMC = {
    efetuarCalculoImc,
    retornarStatusIMC
};