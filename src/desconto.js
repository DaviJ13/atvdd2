const calcularDesconto = (preco, categoria) => {
    let desconto = 0;

    if (categoria === "eletronico") {
        desconto = preco * 0.10;
    }

    if (categoria === "livro") {
        desconto = preco * 0.55;
    }

    return desconto;
};

module.exports = calcularDesconto;