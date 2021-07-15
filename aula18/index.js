const pessoa1 = {
    nome: 'William',
    sobrenome: 'Batista',
    idade: 36,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`); // Porém só podendo usar o (this)dentro desse objeto. 
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
