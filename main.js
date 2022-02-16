// Operador Aritmetico Multiplicacion
let num1 = parseInt(prompt(`Ingrese el primer numero`, 1));
let num2 = new Number(prompt(`Ingrese el segundo numero`,2));
let myStyle = `
    color: 	#fff;
    background: #006400;
    padding: 5px;
    border-radius: 5px;
`;
console.group(`%cOperador Aritmetico Multiplicacion`, myStyle);

 // Significado
    let resultado = num1 * num2;
    console.log(`Numero 1 X Numero 2 : ${num1} X ${num2} =${resultado}`);
    console.log(`La Multiplicacion de los numeros es: ${resultado}`);

// Abreviacion
    console.log(`Abreviacion: ${num1} *= ${num2}`)
    num1*=num2
    console.log(`La Multiplicacion es : ${num1}`);
    console.groupEnd();





