class Poisson {

    _defacto(n) {
        let res = 1;
        for(let i = n; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    _poisson(x) {
        return (Math.exp(-this.average) * Math.pow(this.average, x)) / this._defacto(x);
    }

    constructor(average, esattamente, almeno, alMassimo) {
        this.average = +average;
        this.esattamente = +esattamente;
        this.almeno = +almeno;
        this.alMassimo = +alMassimo;
    }

    _solveFirst() {
        return this._poisson(0);
    }

    _solveSecond() {
        return this._poisson(5);
    }

    _solveThird() {
        let res = 0;
        for(let i = this.almeno; i <= this.alMassimo; i++) {
            res += this._poisson(i);
        }
        return res;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird() ];
    }
}

module.exports = Poisson;

const TIMES = 1e6;
const ex = new Poisson(4, 5, 5, 8);
ex.test(TIMES, () => {}, n => console.log(n)).then(r => console.log(r));