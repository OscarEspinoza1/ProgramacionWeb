function areaCuadrado(lado){
    return lado*lado;
}

function areaTriangulo(base, altura){
    return ((base*altura)/2);
}

function areaCirculo(radio){
    return 3.14(radio^2);
}

function areaTrapecio(bMayor, bMenor, altura){
    return ((bMayor+bMenor)/2)*altura;
}

module.exports.areaCuadrado=areaCuadrado;
module.exports.areaTriangulo=areaTriangulo;
module.exports.areaCirculo=areaCirculo;
module.exports.areaTrapecio=areaTrapecio;

console.log(module);