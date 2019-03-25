class Gatti {

    constructor(gattiInfetti, positivaInfetti, positivaSani) {
        this.Salute = {
            SANO: 1000,
            INFETTO: 2000
        };
        this.gattiInfetti = +gattiInfetti;
        this.positivaInfetti = +positivaInfetti;
        this.positivaSani = +positivaSani;
    }
    
    _pickGatto() {
        const n = Math.floor(Math.random() * 100) + 1;
        return (n <= this.gattiInfetti ? this.Salute.INFETTO : this.Salute.SANO);
    }

    _pickTest(gatto) {
        const n = Math.floor(Math.random() * 100) + 1;
        switch(gatto) {
            case this.Salute.INFETTO:
                return n <= this.positivaInfetti;
            case this.Salute.SANO:
                return n <= this.positivaSani;
        }
    }

    _solveFirst() {
        const gatto = this._pickGatto();
        const test = this._pickTest(gatto);
        return (this.positivaInfetti === 100 ? test : !test);
    }

    _solveSecond() {
        let gatto, test;
        do {
            gatto = this._pickGatto();
            test = this._pickTest(gatto);
        }
        while(this.positivaInfetti === 100 ? !test : test);
        return gatto === this.Salute.INFETTO;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveFirst()) first++;
            if(this._solveSecond()) second++;
        }
        if(current + gap >= times) {
            return [ first / times, second / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, 0 ], callback);
    }
}

module.exports = Gatti;

/*const TIMES = 1e7;
const ex = new Gatti(9, 86, 6);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/