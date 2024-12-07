let quantidade1 = document.getElementById('qtd1');
let total1 = document.getElementById('total1');

let quantidade2 = document.getElementById('qtd2');
let total2 = document.getElementById('total2');

let quantidade3 = document.getElementById('qtd3');
let total3 = document.getElementById('total3');

let quantidade4 = document.getElementById('qtd4');
let total4 = document.getElementById('total4');

let quantidade5 = document.getElementById('qtd5');
let total5 = document.getElementById('total5');

let totalFinal = document.getElementById('totalFinal');

function calcularTotal1 () {

    let qtd = parseFloat(quantidade1.value) || 0;
    total1.textContent = ( qtd * 7.99 ).toFixed(2);
    alterarTotalFinal();
}

function calcularTotal2 () {

    let qtd = parseFloat(quantidade2.value) || 0;
    total2.textContent = ( qtd * 15.49 ).toFixed(2);
    alterarTotalFinal();
}

function calcularTotal3 () {

    let qtd = parseFloat(quantidade3.value) || 0;
    total3.textContent = ( qtd * 4.65 ).toFixed(2);
    alterarTotalFinal();
}

function calcularTotal4 () {

    let qtd = parseFloat(quantidade4.value) || 0;
    total4.textContent = ( qtd * 4.99 ).toFixed(2);
    alterarTotalFinal();
}

function calcularTotal5 () {

    let qtd = parseFloat(quantidade5.value) || 0;
    total5.textContent = ( qtd * 12.29 ).toFixed(2);
    alterarTotalFinal();
}

function alterarTotalFinal () {

    const valor1 = parseFloat(total1.textContent) || 0;
    const valor2 = parseFloat(total2.textContent) || 0;
    const valor3 = parseFloat(total3.textContent) || 0;
    const valor4 = parseFloat(total4.textContent) || 0;
    const valor5 = parseFloat(total5.textContent) || 0;
    totalFinal.textContent = (valor1 + valor2 + valor3 + valor4 + valor5).toFixed(2);

}

quantidade1.addEventListener('input', calcularTotal1);

quantidade2.addEventListener('input', calcularTotal2);

quantidade3.addEventListener('input', calcularTotal3);

quantidade4.addEventListener('input', calcularTotal4);

quantidade5.addEventListener('input', calcularTotal5);