/*
luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmMt = 1.80;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 2019 -idade;

//template strings

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMt} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
