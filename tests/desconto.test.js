const calcularDesconto = require("../src/desconto");

const preco = 100;
const resultado = calcularDesconto(preco, "eletronico");

if (resultado !== 10) {
    throw new Error("Teste falhou");
}

console.log("Teste passou");