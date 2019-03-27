class FunzioneProb {

    _f(x) {
        if(x < 0) {
            return 0;
        }
        else {
            return 1 - Math.exp(-this.lambda * x);
        }
    }

    _interval(x, y) {
        return this._f(y) - this._f(x);
    }

    _solve(intervals) {
        let res = 0;
        for(let i = 0; i < intervals.length; i += 2) {
            res += this._interval(intervals[i], intervals[i + 1]);
        }
        return res;
    }

    get first() {
        return this._first;
    }
    set first(interval) {
        this._first = interval.split(',').map(str => +str);
    }

    get second() {
        return this._second;
    }
    set second(interval) {
        this._second = interval.split(',').map(str => +str);
    }

    get third() {
        return this._third;
    }
    set third(intervals) {
        this._third = intervals.split(',').map(str => +str);
    }

    get fourth() {
        return this._fourth;
    }
    set fourth(intervals) {
        this._fourth = intervals.split(',').map(str => +str);
    }

    constructor(lambda, first, second, third, fourth) {
        this.lambda = +lambda;
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
    }

    _solveFirst() {
        return this._solve(this.first);
    }

    _solveSecond() {
        return this._solve(this.second);
    }

    _solveThird() {
        return this._solve(this.third);
    }

    _solveFourth() {
        return this._solve(this.fourth);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = FunzioneProb;

/*const TIMES = 1e6;
const ex = new FunzioneProb(1.596, '0.105, 0.388', '-0.651, 0.651', '0.441, 0.443, 1.188, 1.506', '0.441, 0.443, 1.188, 1.506, 0.105, 0.388');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/