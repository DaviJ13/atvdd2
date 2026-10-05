const calcularDesconto = (preco, categoria) => {
    let desconto = 0;

    if (categoria === "eletronico") {
        desconto = preco * 0.10;
    }

    return desconto;
};

module.exports = calcularDesconto;