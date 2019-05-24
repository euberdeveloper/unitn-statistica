class Cerchio {

    _f(x) {
        return (2 * Math.sqrt(1 - (x ** 2))) / Math.PI;
    }

    constructor(first, second) {
        this.first = +first;
        this.second = +second;
    }

    _solveFirst() {
        return this._f(this.first);
    }

    _solveSecond() {
        return this._f(this.second);
    }

    _solveThird() {
        return 'FALSE';
    }

    _solveFourth() {
        return 'TRUE';
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Cerchio;

/* const TIMES = 1e6;
const ex = new Cerchio(-0.5, -0.54);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */