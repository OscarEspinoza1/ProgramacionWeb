//lo que hicimos en clase
function areaCuadrado(lado){
    return lado*lado;
}

function areaTriangulo(base, altura){
    return ((base*altura)/2);
}

module.exports.areaCuadrado=areaCuadrado;
module.exports.areaTriangulo=areaTriangulo;

//console.log(__dirname);
//console.log(__filename);

//lo que agregue yo
function areaCirculo(radio){
    return 3.14(radio^2);
}

function areaTrapecio(bMayor, bMenor, altura){
    return ((bMayor+bMenor)/2)*altura;
}

module.exports.areaCirculo=areaCirculo;
module.exports.areaTrapecio=areaTrapecio;

console.log(module);