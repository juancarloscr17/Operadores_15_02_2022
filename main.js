// Operador Aritmetico Exponenciacion
let num1 = parseInt(prompt(`Ingrese el primer numero`, 1));
let num2 = new Number(prompt(`Ingrese el segundo numero`,2));
let myStyle = `
    color: 	#000;
    background: #ff8c00;
    padding: 5px;
    border-radius: 5px;
`;
console.group(`%cOperador Aritmetico Exponenciacion`, myStyle);

 // Significado
    let resultado = num1 ** num2;
    console.log(`Numero 1 elevado al Numero 2 : ${num1} ** ${num2} =${resultado}`);
    console.log(`${num1} elevado al ${num2}: ${resultado}`);

// Abreviacion
    console.log(`Abreviacion: ${num1} **= ${num2}`)
    num1**=num2
    console.log(`El resultado del exponencia es : ${num1}`);
    console.groupEnd();





