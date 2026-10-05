const calcularPrecoFinal = (preco, categoria) => {
    const desconto = calcularDesconto(preco, categoria);
    return preco - desconto;
};

module.exports = {
    calcularPrecoFinal
};