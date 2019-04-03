class Ripartizione {

    _parseTratti(data) {
        data = (data.endsWith(';') ? data.slice(0, data.length - 1) : data);
        let tratti = data.split(';').map(str => str.split(',').map(str => +str));
        tratti.unshift([0, -Infinity, tratti[0][1]]);
        tratti.push([1, tratti[tratti.length - 1][2], Infinity]);
        return tratti;
    }

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
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

    constructor(tratti, first, second, third) {
        this.tratti = tratti;
        this.first = first;
        this.second = second;
        this.third = +third;
    }

    _solveFirst() {
        let begin = -1, end = -1;
        for(let i = 0; i < this.tratti.length && (begin === -1 || end === -1); i++) {
            if(this.tratti[i][1] <= this.first[0] && this.first[0] < this.tratti[i][2]) {
                begin = this.tratti[i][0];
            }
            if(this.tratti[i][1] <= this.first[1] && this.first[1] < this.tratti[i][2]) {
                end = this.tratti[i][0];
            }
        }
        return end - begin;
    }

    _solveSecond() {
        let begin = -1, end = -1;
        for(let i = 0; i < this.tratti.length && (begin === -1 || end === -1); i++) {
            if(this.tratti[i][1] <= this.second[0] && this.second[0] <= this.tratti[i][2] && begin === -1) {
                begin = this.tratti[i][0];
            }
            if(this.tratti[i][1] <= this.second[1] && this.second[1] <= this.tratti[i][2]) {
                end = this.tratti[i][0];
            }
        }
        return end - begin;
    }

    _solveThird() {
        for(let i = 0; i < this.tratti.length; i++) {
            const pbegin = this.tratti[i][0];
            for(let j = i + 1; j < this.tratti.length; j++) {
                const pend = this.tratti[j][0];
                const p = pend - pbegin;
                if(Math.abs(p - this.third) < 0.00001) {
                    return this.tratti[i + 1][1];
                }
                else if(p > this.third) {
                    break;
                }
            }
        }
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird()];
    }
}

module.exports = Ripartizione;

/*const TIMES = 1e6;
const ex = new Ripartizione('0.0001, -1.587, -0.493; 0.0017, -0.493, 0.601; 0.0177, 0.601, 1.695; 0.1017, 1.695, 2.789; 0.3502, 2.789, 3.883; 0.7423, 3.883, 4.977;', '-0.493, 3.73', '0.601, 2.789', 0.0016);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/