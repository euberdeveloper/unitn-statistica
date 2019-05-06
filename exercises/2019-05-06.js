const vega = require('vega-statistics');

class CurvaNormale {

    _pick() {
        this.picked = this.gauss.sample();
    }

    get first() {
        return this._first;
    }

    set first(data) {
        this._first = data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    constructor(version, mu, sigmaQuadro, first, second, third) {
       this.version = +version;
       this.mu = +mu;
       this.sigma = Math.sqrt(+sigmaQuadro);
       this.first = first;
       this.second = +second;
       this.third = +third;

       this.vega = vega;
       this.gauss = this.vega.randomNormal(this.mu, this.sigma);
    }

    _solveFirst() {
        return this.version ? (this.first[0] < this.picked && this.picked <= this._first[1]) : (this.first[0] <= this.picked && this.picked < this._first[1]);
    }

    _solveSecond() {
        return this.version ? (this.picked < this.second) : (this.picked > this.second);
    }

    _solveThird() {
        return this.version ? (Math.abs(this.picked) > this.third) : (Math.abs(this.picked) <= this.third);
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            this._pick();
            if(this._solveFirst()) first++;
            if(this._solveSecond()) second++;
            if(this._solveThird()) third++;
        }
        if(current + gap >= times) {
            return [ first / times, second / times, third / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, 0, 0 ], callback);
    }
}

module.exports = CurvaNormale;

/*const TIMES = 1e6;
const ex = new CurvaNormale(true, -0.38, 9.23, '-0.05, 0.74', -4.36, 2.15);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/