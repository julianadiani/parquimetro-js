//Buscar tarifa de acordo com o valor inserido
export function buscarTarifa(valor, tarifas) {
    return tarifas.find(tarifa => valor >= tarifa.valor);
}

//Calcular o troco
export function calcularTroco(valorInserido, valor) {
    return [valorInserido, -valor].reduce(
        (total, item) => total + item, 0
    );
}
