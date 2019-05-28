class Stimatori {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _t1(sample) {
        const [ _, _, x3, _ ] = sample;
        return x3;
    }

    _t2(sample) {
        const [ x1, x2, _, _ ] = sample;
        return (x1 + 2 * x2) / 3;
    }

    _t3(sample) {
        const [ x1, x2, x3, x4 ] = sample;
        return ((x1 + x2 + x3) / 6) + ((x3 + x4) / 4);
    }

    get fourth() {
        return this._fourth;
    }
    set fourth(data) {
        this._fourth = this._parseData(data);
    }

    get coefficiente() {
        switch (this.second) {
            case 1:
                return '1';
            case 2:
                return '(5 / 9)';
            case 3:
                return '(9 / 24)';
        }
    }

    constructor(second, fourth) {
        this.second = +second;
        this.fourth = fourth;
    }

    _solveFirst() {
        return 7;
    }

    _solveSecond() {
        return `function(lambda) { ifelse(lambda > 0, ${this.coefficiente} * (1 / (lambda ** 2)), 0) }`;
    }

    _solveThird() {
        return 3;
    }

    _solveFourth() {
        return 1 / (this.fourth.reduce((prev, curr) => prev + curr, 0) / this.fourth.length);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Stimatori;

/* const TIMES = 1e6;
const ex = new Stimatori(3, '0.40, 1.10, 0.50, 0.00, 2.00, 0.30, 0.40, 0.80, 0.30, 1.20');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */
