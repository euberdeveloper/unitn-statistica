class Chest {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get values() {
        return this._values;
    }
    set values(data) {
        this._values = this._parseData(data);
    }

    get n() {
        return this.values.length;
    }

    get average() {
        if(!this._average) {
            this._average = this.values.reduce((prev, curr) => prev + curr, 0) / this.n;
        }
        return this._average;
    }

    get standardDeviation() {
        if(!this._standardDeviation) {
            this._standardDeviation = Math.sqrt(this.values.reduce((prev, curr) => prev + ((curr - this.average) ** 2), 0) / this.n);
        }
        return this._standardDeviation;
    }

    get factor() {
        if(!this._factor) {
            this._factor = this.n / (this.n - 1);
        }
        return this._factor;
    }

    constructor(values) {
        this.values = values;
    }

    _solveFirst() {
        return this.average;
    }

    _solveSecond() {
        return this.standardDeviation;
    }

    _solveThird() {
        return this.factor;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird() ];
    }
}

module.exports = Chest;

/* const TIMES = 1e6;
const ex = new Chest('83.90, 79.80, 79.10, 83.90, 78.90, 77.10, 80.10, 75.60, 78.00, 82.40, 76.90, 78.60, 78.20');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */
