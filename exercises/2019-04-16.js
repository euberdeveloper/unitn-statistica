class FunDensita {

    constructor(fourth) {
        this.fourth = +fourth;
    }

    _solveFirst() {
        return 3;
    }

    _solveSecond() {
        return 3 / 4;
    }

    _solveThird() {
        return 3 / 80;
    }

    _solveFourth() {
        return this.fourth ** 3;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = FunDensita;

/*const TIMES = 1e8;
const ex = new FunDensita(0.77);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/