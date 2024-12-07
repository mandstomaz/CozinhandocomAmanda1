function calcular () {

    const linhas = document.querySelectorAll("table tr"); //"querySelectorAll" seleciona todas as linhas da tabela
    let totalGeral = 0; // Variável para armazenar o total geral

    linhas.forEach((linha, index) => {
        if (index > 0 && index < linhas.length - 1) {

            const preco = linha.querySelector(".valor").value;
            const quantidade = linha.querySelector(".qtd").value;
            const total = preco * quantidade || 0;
            linha.querySelector(".total").textContent = total.toFixed(2);
            totalGeral += total;
        }
    });

    document.getElementById("totalFinal").textContent = totalGeral.toFixed(2);
}

