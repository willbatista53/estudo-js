//function saudacao (nome) {
 //   return `Bom dia ${nome}!`;
//}

//const variável = saudacao ('Luiz');
//console.log(variável);

//function soma(x, y){
//    const resultado = x + y;
//    return resultado;
//}

//console.log(soma(2, 2));
//console.log(soma(3, 1));
//console.log(soma(5, 10));

function soma(x =1, y =1){
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4); 
console.log(resultado)
// Quando nao colocamos nenhum número dentro do objeto resultado = (soma)
// fica automático a soma entre (x =1, y =1), no function (soma)