const calcularDesconto = require("../src/desconto");

const preco = 100;

const descontoEletronico = calcularDesconto(preco, "eletronico");

if (descontoEletronico !== 10) {
    throw new Error("Teste de eletrônico falhou");
}

const descontoLivro = calcularDesconto(preco, "livro");

if (descontoLivro !== 15) {
    throw new Error("Teste de livro falhou");
}

console.log("Todos os testes passaram");