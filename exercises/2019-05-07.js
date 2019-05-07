const random = require('random');

class Settimana {

    _pick() {
        this._picked = this.poisson();
        return this._picked;
    }

    constructor(lambda, first, second, third) {
        this.first = +first;
        this.second = +second;
        this.third = +third;

        this.random = random;
        this.poisson = random.poisson(lambda);
    }

    _solveFirst() {
        return this._picked > this.first;
    }

    _solveSecond() {
        return this._picked <= this.second;
    }

    _solveThird() {
        let count = 0;
        while(this._pick() === 0) count++;
        return count >= this.third;
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

module.exports = Settimana;

/* const TIMES = 1e9;
const ex = new Settimana(3, 12, 7, 5);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */