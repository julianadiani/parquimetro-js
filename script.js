
class Parquimetro {
    //atributos
    constructor() {
        this._precoPor30Minutos = 1.00;
        this._precoPorHora = 1.75;
        this._precoPor2Horas = 3.00;
    }

    //métodos
    calcularValor(valor) {
        this.valorInserido = valor;

        if(valor >= this._precoPor30Minutos) {
            this.tempo = 30;
            this.valor =  this._precoPor30Minutos;
        } else if (valor >= this._precoPorHora) {
            this.tempo = 60;
            this.valor =  this._precoPorHora;
        } else if (valor >= this._precoPor2Horas) {
            this.tempo = 120;
            this.valor = this._precoPor2Horas;
        } else {
            this.tempo = 0;
            this.valor = 0;
        }
    }

    calcularTroco() {
        return this.valorInserido - this.valor;
    }

    mostrarResultado() {
        const valor = parseFloat(document.getElementById("valorInserido").value);
        this.calcularTempo(valor);

        if (this.valor < 1.00) {
            document.getElementById('resultado').innerHTML = `Valor insuficiente!`;
        } else {
            const troco = this.calcularTroco();
            document.getElementById('resultado').innerHTML = `Tempo de permanência: ${this.tempo} minutos. Troco: R$ ${troco.toFixed(2)}`;
        }
    }

    calcular() {
        this.mostrarResultado();
    }
}

//Instâncias
const parquimetro = new Parquimetro();