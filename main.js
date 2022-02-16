// Operador Aritmetico Suma
let num1 = parseInt(prompt(`Ingrese el primer numero`, 1));
let num2 = new Number(prompt(`Ingrese el segundo numero`,2));
let myStyle = `
    color: #000;
    background: #00ffff;
    padding: 5px;
    border-radius: 5px;
`;

// Adición
console.group(`%cOperadores Aritmetico Suma`, myStyle);

 // Significado
   
    let resultado = num1 + num2;
    console.log(`Numero 1: ${num1} + Numero 2: ${num2}`);
    console.log(`La suma de los numeros es: ${resultado}`);

    console.groupEnd();





