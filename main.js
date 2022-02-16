// Operadores de Asignacion

let x;
let y= 80;
let myStyle = `
    color: #000;
    background: #7FFF00;
    padding: 5px;
    border-radius: 5px;
`;
// Asignacion
console.group(`%cOperadores Asignacion`, myStyle);

    console.log(`
        Variable x: ${x}
        Variable y: ${y}`);

    // Abreviacion
    x=y;
    console.log(`Resultado: x : ${x} y : ${y}`);

console.groupEnd();






// // ventana emergente JS
// let nombre=prompt(`Ingrese el nombre del usuario`,`nombre`);

// console.log(nombre);
