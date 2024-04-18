let cadena = "      hola mundo      ";
let cadenaSinEspacios = cadena.trimStart().trimEnd()
console.log(cadenaSinEspacios)

let mayusInicial = cadenaSinEspacios[0].toUpperCase() + cadenaSinEspacios.slice(1);
console.log(mayusInicial);

let mayusFinal = mayusInicial.slice(0, -1) + mayusInicial.slice(-1).toUpperCase();
console.log(mayusFinal);