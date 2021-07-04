let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
// poderia ser resolvido assim
//[varA, varB, varC] = [varB, varC, varA]; 
const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);