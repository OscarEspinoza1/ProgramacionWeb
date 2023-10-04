/*let areas = require("./modulos.js");
let cowsay = require("cowsay");
let cadena = require("./modulos.js");*/

import * as areas from "./modulos.js";

let a=areas.areaCuadrado(4);
let b=areas.areaTriangulo(5,3);
let c=areas.areaCirculo(5);
let d=areas.areaTrapecio(3,1,5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
