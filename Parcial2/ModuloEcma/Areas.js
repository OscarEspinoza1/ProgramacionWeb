//lo que hicimos en clase
export function areaCuadrado(lado){
    return lado*lado;
}

export function areaTriangulo(base, altura){
    return ((base*altura)/2);
}

 //module.exports.areaCuadrado=areaCuadrado;
//module.exports.areaTriangulo=areaTriangulo;

//console.log(__dirname);
//console.log(__filename);

//lo que agregue yo
export function areaCirculo(radio){
    return 3.14(radio^2);
}

export function areaTrapecio(bMayor, bMenor, altura){
    return ((bMayor+bMenor)/2)*altura;
}

//module.exports.areaCirculo=areaCirculo;
//module.exports.areaTrapecio=areaTrapecio;

//console.log(module);