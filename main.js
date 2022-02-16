// Operador Aritmetico Resta
let num1 = parseInt(prompt(`Ingrese el primer numero`, 1));
let num2 = new Number(prompt(`Ingrese el segundo numero`,2));
let myStyle = `
    color: 	#fff;
    background: #ee82ee;
    padding: 5px;
    border-radius: 5px;
`;
console.group(`%cOperador Aritmetico Resta`, myStyle);

 // Significado
    let resultado = num1 - num2;
    console.log(`Numero 1: ${num1} - Numero 2: ${num2}`);
    console.log(`La resta de los numeros es: ${resultado}`);

// Abreviacion
    console.log(`Abreviacion: ${num1} -= ${num2}`)
    num1-=num2
    console.log(`La resta es : ${num1}`);
    console.groupEnd();





