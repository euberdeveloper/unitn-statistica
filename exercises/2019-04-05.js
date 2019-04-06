class Daje {

    _getRetta(x, y) {
        const a = { x: 3, y: x };
        const b = { x: 5, y: y };
        const h = b.x - a.x;
        const k = b.y - a.y;
        return x => (k / h) * (x - a.x) + a.y;
    }

    _f(x) {
        if(x < 1) {
            return 0;
        }
        else if(1 <= x && x < 2) {
            return this.tratti[0];
        }
        else if(2 <= x && x < 3) {
            return this.tratti[1];
        }
        else if(3 <= x && x < 5) {
            return this._getRetta(this.tratti[2], this.tratti[3])(x);
        }
        else if(5 <= x && x < 6) {
            return this.tratti[3];
        }
        else if(x >= 6) {
            return 1;
        }
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _singoletto(x) {
        return this._f(x) - this._f(x - this.DELTA);
    }

    _intervallo(x, y) {
        let res =  0;
        if(3 < y && y <= 5) {
            let old = y;
            y = 3;
            res += this._f(old) - this._f(y);
        }
        if(3 < x && x <= 5) {
            let old = x;
            x = 5 + this.DELTA;
            res += this._f(x) - this._f(old);
        }
        y = Math.floor(y);
        while(y > x && y > 0) {
            let old = y;
            y -= 1;
            if(3 < y && y <= 5) {
                y = 3;
                res += this._f(old) - this._f(y);
            }
            else {
                res += this._singoletto(old);    
            }
        }
        return res;
    }

    get DELTA() {
        return 0.00001;
    }

    get tratti() {
        return this._tratti;
    }
    set tratti(data) {
        this._tratti = this._parseData(data);
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

    constructor(tratti, first, second, third) {
        this.tratti = tratti;
        this.first = +first;
        this.second = second;
        this.third = third;
    }

    _solveFirst() {
        return this._singoletto(this.first);
    }

    _solveSecond() {
        return this._singoletto(this.second[0]) + this._singoletto(this.second[1]);
    }

    _solveThird() {
        const intervallo = this._intervallo(this.third[0], this.third[1]);
        return (this.third[0] <= this.third[2] && this.third[2] <= this.third[1]  ? intervallo : intervallo + this._singoletto(this.third[2]));
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird()];
    }
}

module.exports = Daje;

/*const TIMES = 1e6;
const ex = new Daje('0.115, 0.31, 0.5, 0.9', '3', '3, 2', '2.96, 5.62, 3');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/