class Densita {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get intervallo() {
        return this._intervallo;
    }
    set intervallo(data) {
        this._intervallo = this._parseData(data);
    }

    get third() {
        return this._third;
    }
    set third(data) {
        this._third = this._parseData(data);
    }

    get k() {
        return 1 / (this.funzione * this.intervallo[1] - this.intervallo[1] * this.intervallo[1]);
    }

    get momentoPrimo() {
        return this.funzione * this.k * (this.intervallo[1] ** 2) / 2 - 2 * this.k * (this.intervallo[1] ** 3) / 3;
    }

    get momentoSecondo() {
        return this.funzione * this.k * (this.intervallo[1] ** 3) / 3 - 2 * this.k * (this.intervallo[1] ** 4) / 4;
    }

    get sigma() {
        return this.momentoSecondo - (this.momentoPrimo ** 2);
    }

    constructor(funzione, intervallo, third) {
        this.funzione = +funzione;
        this.intervallo = intervallo;
        this.third = third;
    }

    _solveFirst() {
        return this.k; 
    }

    _solveSecond() {
        return this.momentoPrimo;
    }

    _solveThird() {
        return this.third[0] + this.third[1] * this.momentoPrimo;
    }

    _solveFourth() {
        return this.sigma;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Densita;

/*const TIMES = 1e8;
const ex = new Densita(12.9, '0, 5', '19.4, -5.3');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/