class GuidaAutonoma {

    _pick() {
        const n = Math.floor(Math.random() * 1000) + 1; 
        return (n <= (this.probCorr * 10) ? this.Esito.SUCC : this.Esito.FAIL);
    }   

    constructor(probCorr, second, third) {
        this.Esito = {
            SUCC: 1000,
            FAIL: 2000
        };
        this.probCorr = +probCorr;
        this.second = +second;
        this.third = +third;
    }

    _solveFirst() {
        return this._pick() === this.Esito.FAIL;
    }

    _solveSecond() {
        for(let i = 0; i < this.second; i++) {
            if(this._pick() === this.Esito.FAIL) {
                return false;
            }
        }
        return this._pick() === this.Esito.FAIL;
    }

    _solveThird() {
        for(let i = 0; i < this.third - 1; i++) {
            if(this._pick() === this.Esito.FAIL) {
                return false;
            }
        }
        return this._pick() === this.Esito.FAIL;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
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

module.exports = GuidaAutonoma;

/*const TIMES = 1e6;
const ex = new GuidaAutonoma(96.6, 23, 15);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/