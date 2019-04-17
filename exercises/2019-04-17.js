class Integrali {

    _integral(x) {
        return (x >= 0 ? -Math.exp(-this.lambda * x * x) : 0);
    }

    _prob(a, b) {
        return this._integral(b) - this._integral(a);
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = this._parseData(data);
    }

    constructor(lambda, first, second, alpha) {
        this.lambda = +lambda;
        this.first = +first;
        this.second = second;
        this.alpha = +alpha;
    }

    _solveFirst() {
        return this._prob(0, this.first);
    }

    _solveSecond() {
        return this._prob(this.second[0], this.second[1]);
    }

    _solveThird() {
        return 1 / this.alpha;
    }

    _solveFourth() {
        return 2 / (this.alpha ** 2);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Integrali;

/*const TIMES = 1e8;
const ex = new Integrali(0.59, 0.85, '0.1, 1.38', 0.64);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/