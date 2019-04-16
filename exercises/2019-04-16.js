class FunDensita {

    constructor(quadratic, fourth) {
        this.quadratic = quadratic;
        this.fourth = +fourth;
    }

    _solveFirst() {
        return (this.quadratic ? 3 : 4);
    }

    _solveSecond() {
        return (this.quadratic ? 3 / 4 : 4 / 5);
    }

    _solveThird() {
        return (this.quadratic ? 3 / 80 : 2 / 75);
    }

    _solveFourth() {
        return (this.quadratic ? this.fourth ** 3 : this.fourth ** 4);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = FunDensita;

/*const TIMES = 1e8;
const ex = new FunDensita(true, 0.77);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/