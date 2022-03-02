
let validar = data =>{
    return data ? "TRUE" : "FALSE";
}

// //Boleanos en objetos, array, arrayAsc
let dato = ["Miguel"];
console.log("Boleanos en objetos, array, arrayAsc ", validar(Object.entries(dato).length));

// //Boleanos en numbre
// 0 = false
// 1 = true
console.log("Boleanos en numbre ", validar(0));

// //Boleanos en string
// "" = false
// " " = true
console.log("Boleanos en string ", validar(" "));








// // Operador de comparacion Mayor Igual
// let x = 6;
// let y = 5;

// let resultado = x >= y;

// console.log(`Variable x: ${x} y: ${y} Mayor Igual '>=' ${resultado}`);





// // Operador de comparacion Menor
// let x = 9/5+((10%8)-2*(5*5/2))/6;
// // 9/5+((2)-2*(25/2))/6
// // 9/5+(2-2*12.5)/6
// // 9/5+(2-25)/6
// // 9/5+(-23)/6
// // 9/5+(-3.833333)
// // 1.8+(-3.833333)
// // -2.0333333
// let y = (8*5/(5+2)*3)%9;
// // (8*5/(7)*3)%9
// // (40/7*3)%9
// // (5.71428*3)%9 
// // 17.1428%9
// // 8.1428
// let resultado = x < y;

// console.log(`Variable x: ${x} y: ${y} Menor '<' ${resultado}`);





// //Operador de Comparacion Mayor
// let x = 5*(15-(8-1)/9) - (5+9*9)%5;
// //      5*(15-7/9)-(5+81)%5 
// //      5*(15-0.777)-(5+81)%5
// //      5*14.22-(5+81)%5
// //      5*14.22-86%5
// //      71.11 - 86%5
// //      71.11 - 1   
// //      70.11
// let y = (5-2 * 3)+2 * (5-1)+2;
// //       (5-6)+2*(5-1)+2
// //       (-1)+2*(5-1)+2
// //       -1+2*4+2
// //       -1+8+2 
// //       7+2
// //       9
// let resultado = x > y;

// console.log(`Variable x: ${x} y: ${y} Mayor '>' ${resultado}`);





// // Operador de comparacion Diferente
// let x = 5*2;
// //      10 
// let y = (5/5-(3+9) - (5%3)*2);
// //      (5/5-(12)-(5%3)*2) 
// //      (5/5-12- (2)*2)
// //      (1-12-2*2)
// //      1-12-4
// //      -11-4
// //      -15
// let resultado = x != y;

// console.log(`Variable x: ${x} y: ${y} Diferente '!=' ${resultado}`);





// //Operador de Comparacion de  Igualdad
// let x = 5+(2*2)-(6/2);
// //      5+ 4 - 3
// //      9 - 3
// //      6
// let y = 5;

// let resultado = x==y;
// console.log(`Variable x: ${x} y: ${y} Igualdad '==' ${resultado}`);












// let reslutado  = 5*((4/4)*(9-7)*2)+6;
// //  5*((1)*(9-2)*2)+6
// //  5*((1))*(2)*2)+6
// //  5*(2*2)+6
// //  5*4+6
// //  20+6
// //  26
// console.log(reslutado);

// let reslutado2  = 5+1*8+(9 * (5+8) / 2);
// //  5+1*8+(9*(5+8)/2)
// //  5+1*8+(9*(13)/2)
// //  5+1*8+(117/2)
// //  5+1*8+(58.5)
// //  5+ 8 +58.5
// //  71.5
// console.log(reslutado2);





// // Operador Aritmetico Modulo
// let num1 = parseInt(prompt(`Ingrese el valor de X`, 1));
// let num2 = new Number(prompt(`Ingrese el Valor de Y`,2));
// let myStyle = `
//     color: 	##800080;
//     background: #E9967A;
//     padding: 5px;
//     border-radius: 5px;
// `;
// console.group(`%cOperador Aritmetico Modulo`, myStyle);

//  // Significado
//     let resultado = num1 % num2;
//     console.log(`X = X % Y : ${num1} % ${num2} =${resultado}`);
//     console.log(`${num1} modulo ${num2}: ${resultado}`);

// // Abreviacion
//     console.log(`Abreviacion (X %=Y): ${num1} %= ${num2}`)
//     num1%=num2
//     console.log(`El resultado del modulo es : ${num1}`);
//     console.groupEnd();





