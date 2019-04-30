class ThirtyApril {

    constructor(mu, squared_sigma) {
        this.mu = +mu;
        this.squared_sigma = +squared_sigma;
    }

    _solveFirst() {
        return (this.mu ** 2) + this.squared_sigma;
    }   

    _solveSecond() {
        return 0;
    }

    _solveThird() {
        return 1;
    }

    _solveFourth() {
        return `function (z) { (1 / sqrt(2 * pi)) * exp(- (z * z) / 2) }`;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = ThirtyApril;

/*const TIMES = 1e8;
const ex = new ThirtyApril(6.9, 0.25);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/