/*
Os valores primitivos são(imutáveis) - string, number, boolean, 
undefined, null (bigint, symbol) = Valores copiados
*/
//          0123
//let nome = 'Luiz';
//nome[0] = 'R';
//console.log(nome[0], nome);

//let a = 'A';
//let b = a;  // Cópia
//console.log(a, b);

//a = 'Outra coisa';
//console.log(a, b);

/* Os valores Referência são (Mutáveis) - array, object, function.
passados por referência 
*/
let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('William');
console.log(a, c);