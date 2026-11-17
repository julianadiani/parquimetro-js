import { Parquimetro } from './classes.js';

//Instâncias
const parquimetro = new Parquimetro();

//Testes
parquimetro.calcularValor(2.00);
console.log(parquimetro.tempo);
console.log(parquimetro.calcularTroco());

//Elementos
const valorInserido = document.getElementById('valorInserido');
const resultado = document.getElementById('resultado');
const botao = document.getElementById('calcular');

//Mostrar resultado
function mostrarResultado() {
    const valor = parseFloat(valorInserido.value);

    parquimetro.calcularValor(valor);

    if (parquimetro.valor < 1.00) {
        resultado.textContent = 'Valor insuficiente!';
    } else {
        const troco = parquimetro.calcularTroco();

        resultado.textContent = `Tempo de permanência: ${parquimetro.tempo} minutos. Troco: R$ ${troco.toFixed(2)}`;
    }
}

//Evento
botao.addEventListener('click', mostrarResultado);
