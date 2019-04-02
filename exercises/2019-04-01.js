class PesceAprile {

    _firstFunction(x) {
        return Math.pow(1 / (1 + Math.exp(-this.lambda * x)), 2);
    }

    _secondFunction(x) {
        return Math.pow(1 / (1 + Math.exp(-this.lambda * x)), 2);
    }

    _f(x) {
        return (this.isSecond ? this._secondFunction(x) : this._firstFunction(x));
    }

    _interval(x, y) {
        return this._f(y) - this._f(x);
    }

    _intervals(intervals) {
        let res = 0;
        for (let i = 0; i < intervals.length; i += 2) {
            res += this._interval(intervals[i], intervals[i + 1]);
        }
        return res;
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get first() {
        return this._first;
    }
    set first(data) {
        this._first = this._parseData(data);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = this._parseData(data);
    }

    get third() {
        return this._third;
    }
    set third(data) {
        this._third = this._parseData(data);
    }

    get fourth() {
        return this._fourth;
    }
    set fourth(data) {
        this._fourth = this._parseData(data);
    }

    constructor(isSecond, lambda, first, second, third, fourth) {
        this.isSecond = isSecond;
        this.lambda = +lambda;
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
    }

    _solveFirst() {
        return this._intervals(this.first);
    }

    _solveSecond() {
        return this._intervals(this.second);
    }

    _solveThird() {
        return (this.third[1] < this.third[2]) ? 0 : this._interval(this.third[2], this.third[1]);
    }

    _solveFourth() {
        if (this.fourth[1] < this.fourth[2]) {
            return 1 - this._interval(this.fourth[4], this.fourth[5]);
        }
        else {
            return 1 - (this._intervals([this.fourth[2], this.fourth[1], this.fourth[4], this.fourth[5]]));
        }
    }


    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth()];
    }
}

module.exports = PesceAprile;

/*const TIMES = 1e6;
const ex = new PesceAprile(true, 1.35, '-inf, 0.293', '0.531, inf', '-inf, 0.293, 0.531, inf, 1.755', '-inf, 0.293, 0.531, inf, 0.157, 1.174');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/