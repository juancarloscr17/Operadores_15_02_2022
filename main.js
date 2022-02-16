// Operador Aritmetico Division
let num1 = parseInt(prompt(`Ingrese el primer numero`, 1));
let num2 = new Number(prompt(`Ingrese el segundo numero`,2));
let myStyle = `
    color: 	#fff;
    background: #8b008b;
    padding: 5px;
    border-radius: 5px;
`;
console.group(`%cOperador Aritmetico Division`, myStyle);

 // Significado
    let resultado = num1 / num2;
    console.log(`Numero 1 / Numero 2 : ${num1} / ${num2} =${resultado}`);
    console.log(`La Division de los numeros es: ${resultado}`);

// Abreviacion
    console.log(`Abreviacion: ${num1} /= ${num2}`)
    num1/=num2
    console.log(`La resta es : ${num1}`);
    console.groupEnd();





