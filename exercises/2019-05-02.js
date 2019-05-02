class Veicoli {

    _densita(x) {
        return this.lamda * Math.exp(-this.lamda * x);
    }

    _ripartizione(x) {
        return 1 - Math.exp(-this.lamda * x);
    }

    constructor(media, first, percSecond, third) {
        this.lamda = 1 / +media;
        this.first = +first;
        this.second = +percSecond / 100;
        this.third = +third;
    }

    _solveFirst() {
        return this._ripartizione(this.first);
    }

    _solveSecond() {
        /* 1 - p(t) = second
        p(t) = 1 - second
        1 - e^(-lt) = 1 - second
        e^(-lt) = second
        -lt = ln(second)
        t = -ln(second) / l; */
        return - Math.log(this.second) / this.lamda;
    }

    _solveThird() {
        return this._ripartizione(this.third);
    }

    _solveFourth() {
        return "function(x) { ifelse(x < 0, 0, (2 * lam * x * exp(-lam * x * x))) }";
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Veicoli;

/* const TIMES = 1e6;
const ex = new Veicoli(8, 5.4, 87, 4);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */