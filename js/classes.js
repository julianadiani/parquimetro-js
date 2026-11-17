import { buscarTarifa, calcularTroco } from './utils.js';

export class Parquimetro {
    //atributos
    constructor() {
        this._precoPor30Minutos = 1.00;
        this._precoPorHora = 1.75;
        this._precoPor2Horas = 3.00;

        this.tarifas = [
            [this._precoPor2Horas, 120],
            [this._precoPorHora, 60],
            [this._precoPor30Minutos, 30]
        ].map(([valor, tempo]) => ({
            valor: valor,
            tempo: tempo
        }));
    }

    //métodos
    calcularValor(valor) {
        this.valorInserido = valor;

        const tarifa = buscarTarifa(valor, this.tarifas);

        if (tarifa) {
            this.tempo = tarifa.tempo;
            this.valor = tarifa.valor;
        } else {
            this.tempo = 0;
            this.valor = 0;
        }
    }

    calcularTroco() {
        return calcularTroco(this.valorInserido, this.valor);
    }
}
