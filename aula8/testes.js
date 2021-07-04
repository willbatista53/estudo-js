/*
william Batista tem 36 anos,pesa 72 kg
tem 1.72 de altura e seu imc é de 24.337479718766904
william batista nsceu em 1985
*/
const nome = 'william';
const sobreNome = 'Batista';
const idade = 36 ;
const peso = 72 ;
const alturaEmMt = 1.72 ;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMt * alturaEmMt);
anoNascimento = 1985 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMt} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);