// Operador Aritmetico Modulo
let num1 = parseInt(prompt(`Ingrese el valor de X`, 1));
let num2 = new Number(prompt(`Ingrese el Valor de Y`,2));
let myStyle = `
    color: 	##800080;
    background: #E9967A;
    padding: 5px;
    border-radius: 5px;
`;
console.group(`%cOperador Aritmetico Modulo`, myStyle);

 // Significado
    let resultado = num1 % num2;
    console.log(`X = X % Y : ${num1} % ${num2} =${resultado}`);
    console.log(`${num1} modulo ${num2}: ${resultado}`);

// Abreviacion
    console.log(`Abreviacion (X %=Y): ${num1} %= ${num2}`)
    num1%=num2
    console.log(`El resultado del modulo es : ${num1}`);
    console.groupEnd();





