class FunzProb {

    get c() {
        return 1 / (this.end ** 2);
    }

    _f(x) {
        if(x <= 0) {
            return 0;
        }
        else if(x >= this.end) {
            return 1;
        }
        else {
            return this.c * x * x;
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

    constructor(end, second, third) {
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
        const res = Math.sqrt((this.third + this.c * 4) / this.c);
        if(this._f(res) !== 1) {
            return res;
        }
        else if(this._f(-res) !== 0) {
            return -res;
        }
        else {
            return 'IMPOSSIBILE';
        }
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird() ];
    }
}

module.exports = FunzProb;

/*const TIMES = 1e6;
const ex = new FunzProb(12, '-3.887, 11.614', 0.29);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/