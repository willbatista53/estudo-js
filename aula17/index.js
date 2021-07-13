const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// E a função simplificada é essa abaixo que funcionará da mesma forma.

const raiz = n => n **0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));