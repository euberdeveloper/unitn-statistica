class AbbiamoVinto {

    _fTratto(x, tratto) {
        return tratto[0] + tratto[1] * (x - tratto[2]);
    }

    _f(x) {
        for (const tratto of this.tratti) {
            if (tratto.length === 3) {
                if (tratto[1] <= x&& (x < tratto[2] || x === Infinity &&  tratto[2] === Infinity)) {
                    return tratto[0];
                }
            }
            else if (tratto.length === 5) {
                if (tratto[3] <= x && x < tratto[4]) {
                    return this._fTratto(x, tratto);
                }
            }
        }
    }

    _parseTratti(data) {
        data = (data.endsWith(';') ? data.slice(0, data.length - 1) : data);
        let tratti = data.split(';').map(str => str.split(',').map(str => +str));
        tratti.unshift([0, -Infinity, tratti[0][1]]);
        tratti.push([1, tratti[tratti.length - 1][tratti[tratti.length - 1].length - 1], Infinity]);
        return tratti;
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get DELTA() {
        return 0.00001;
    }

    get tratti() {
        return this._tratti;
    }
    set tratti(data) {
        this._tratti = this._parseTratti(data);
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

    constructor(tratti, first, second, third, fourth) {
        this.tratti = tratti;
        this.first = first;
        this.second = second;
        this.third = third;
        this.fourth = fourth;
    }

    _solveFirst() {
        return this._f(this.first[1] - this.DELTA) - this._f(this.first[0] - this.DELTA);
    }

    _solveSecond() {
        return this._f(this.second[1] - this.DELTA) - this._f(this.second[0]);
    }

    _solveThird() {
        return this._f(this.third[1] - this.DELTA) - this._f(this.third[0] - this.DELTA);
    }

    _solveFourth() {
        return this._f(this.fourth[1] - this.DELTA) - this._f(this.fourth[0] === 5 ? this.fourth[0] : this.fourth[0] - this.DELTA);
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth()];
    }
}

module.exports = AbbiamoVinto;

const TIMES = 1e6;
const ex = new AbbiamoVinto('0.115, 1, 2; 0.31, 2, 3; 0.5, 0.25, 3, 3, 5;', '-inf, 2', '4, inf', '1, 2', '5, 7');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));