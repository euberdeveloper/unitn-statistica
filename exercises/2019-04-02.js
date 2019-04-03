class Singoletti {

    _f(interval) {
        let res = 0;
        for(let i = interval[0] + 1; i < interval[1] && i < this.singoletti.length && i >= 0; i++) {
            res += this.singoletti[i];
        }
        return res;
    }

    _parseSingoletti(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str).map(n => n - 1);
    }

    get singoletti() {
        return this._singoletti;
    }
    set singoletti(data) {
        this._singoletti = this._parseSingoletti(data);
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

    get fourth() {
        return this._fourth;
    }
    set fourth(data) {
        this._fourth = this._parseData(data);
    }

    constructor(singoletti, first, second, third, fourth) {
        this.singoletti = singoletti;
        this.first = first;
        this.second = second;
        this.third = +third;
        this.fourth = fourth;
    }

    _solveFirst() {
        return this._f(this.first);
    }

    _solveSecond() {
        return this._f(this.second);
    }

    _solveThird() {
        return this._f([ -1, this.third ]);
    }

    _solveFourth() {
        return (this.fourth[0] > this.fourth[1] ? 'TRUE' : 'FALSE');
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth()];
    }
}

module.exports = Singoletti;

/*const TIMES = 1e6;
const ex = new Singoletti('0.09, 0.13, 0.11, 0.13, 0.09, 0.14, 0.13, 0.18', '3, 7', '4, inf', 4, '5, 6');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/