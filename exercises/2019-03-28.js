class FunzProb {

    get c() {
        return (this.isQuad ? 1 / (this.end ** 2) : 1 / ((this.end - 1) ** 3));
    }

    _quadratic(x) {
        return this.c * x * x;
    }

    _cubic(x) {
        return this.c * ((x - 1) ** 3);
    }

    _f(x) {
        if (x <= (this.isQuad ? 0 : 1)) {
            return 0;
        }
        else if (x >= this.end) {
            return 1;
        }
        else {
            return (this.isQuad ? this._quadratic(x) : this._cubic(x));
        }
    }

    _interval(x, y) {
        return this._f(y) - this._f(x);
    }

    get second() {
        return this._second;
    }
    set second(interval) {
        this._second = interval.split(',').map(str => +str);
    }

    constructor(isQuad, end, second, third) {
        this.isQuad = +isQuad;
        this.end = +end;
        this.second = second;
        this.third = +third;
    }

    _solveFirst() {
        return this.c;
    }

    _solveSecond() {
        return this._interval(this.second[0], this.second[1]);
    }

    _solveThird() {
        const res = (this.isQuad ? Math.sqrt((this.third + this.c * 4) / this.c) : Math.cbrt(((this.third + this.c) / this.c) + 1));
        console.log(res)
        if (this._f(res) !== 1) {
            return res;
        }
        else if (this._f(-res) !== 0) {
            return -res;
        }
        else {
            return 'IMPOSSIBILE';
        }
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird()];
    }
}

module.exports = FunzProb;

/*const TIMES = 1e6;
const ex = new FunzProb(false, 10, '1.788, 9.446', 0.49);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/