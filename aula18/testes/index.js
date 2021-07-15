//const array = [1, 2, 3,]; // Se substituir o(const) por (let) ocódigo funcionará com a outra (array)da linha 4
//array.push(4);
//array[0] = 'luiz';
//array = 'Outra'; // Se acrecentarmos essa (array) o código não funcionará
//console.log(array);
// [] é para array
// {} é para objetos 

//const pessoa1 = {
//    nome: 'William',
//    sobrenome: 'Batista',
//    idade: 36,
//};

//const pessoa2 = {
//    nome: 'Priscila',
//    sobrenome: 'Te amo', 
//    idade: 31,
//};

//console.log(pessoa1.nome, (pessoa1.sobrenome))
//console.log(pessoa2.nome, (pessoa2.sobrenome))
                  // O código asseguir é simplificado mas funciona da mesma for


function criaPessoa(nome, sobrenome, idade) {
    return{nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('William', 'Batista', 36);
const pessoa2 = criaPessoa('Priscila', 'Santos',31);
const pessoa3 = criaPessoa('Miguel', 'Albuquerque',20);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);