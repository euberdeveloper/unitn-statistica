class Caram {

    get _pick() {
        return this.gauss.sample();
    }

    get _scartare() {
        return (this._pick < this.inferiore || this._pick > this.superiore);
    }

    _stand(x) {
        return ((x - this.mu) / this.sigma)
    }

    constructor(mu, sigma, superiore, inferiore, third) {
        this.vega = require('vega-statistics');
        this.mu = +mu;
        this.sigma = +sigma;
        this.superiore = +superiore;
        this.inferiore = +inferiore;
        this.third = +third;
        
        this.gauss = this.vega.randomNormal(this.mu, this.sigma);
    }

    _solveFirst() {
        return (this._pick > this.superiore);
    }   

    _solveSecond() {
        let cont = 1;
        while(!this._scartare) cont++;
        return cont;
    }

    _solveThird() {
        return this._stand(this.third);
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveFirst()) first++;
            second += this._solveSecond();
        }
        if(current + gap >= times) {
            return [ first / times, second / times, third ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, 0, this._solveThird() ], callback);
    }
}

module.exports = Caram;

/*const TIMES = 1e7;
const ex = new Caram(5.96, 0.54, 6.848221, 5.1204223, 5.1204223);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/