class FunDensita {

    constructor(exponent, fourth) {
        this.exponent = +exponent;
        this.fourth = +fourth;
    }

    _solveFirst() {
        return this.exponent + 1;
    }

    _solveSecond() {
        return (this.exponent + 1) / (this.exponent + 2);
    }

    _solveThird() {
        return ((this.exponent + 1) / (this.exponent + 3)) - (this._solveSecond() ** 2);
    }

    _solveFourth() {
        return this.fourth ** (this.exponent + 1);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = FunDensita;

/*const TIMES = 1e8;
const ex = new FunDensita(2, 0.77);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/