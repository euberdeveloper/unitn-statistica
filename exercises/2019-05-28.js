class Letze {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _average(data) {
        return (data.reduce((prev, curr) => prev + curr, 0) / data.length);
    }

    get first() {
        return this._first;
    }
    set first(data) {
        this._first = this._parseData(data);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = this._parseData(data);
    }

    constructor(coefficiente, first, second, nSottratto) {
        this.coefficiente = coefficiente;
        this.first = first;
        this.second = second;
        this.nSottratto = +nSottratto;
    }

    _solveFirst() {
        return this.coefficiente / this._average(this.first);
    }

    _solveSecond() {
        return 1 / (this._average(this.second) + this.nSottratto);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond() ];
    }
}

module.exports = Letze;

/* const TIMES = 1e6;
const ex = new Letze(7, '6.69, 3.16, 31.50, 1.72, 3.73, 19.64, 9.75, 11.28', '0.22, 0.11, 0.03, 0.20, 0.01, 0.07, 0.14, 0.06', 7);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */
