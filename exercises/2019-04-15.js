class Libri {

    _checkLibro() {
        const n = Math.floor(Math.random() * 1000) + 1; 
        return (n <= (this.probDifettosi * 10) ? this.Stato.DIFETTOSO : this.Stato.PERFETTO);
    }

    _checkLibri() {
        this.perfetti = 0;
        this.difettosi = 0;
        for(let i = 0; i < this.lotto; i++) {
            if(this._checkLibro() === this.Stato.PERFETTO) {
                this.perfetti++;
            }
            else {
                this.difettosi++;
            }
        }
    }

    constructor(probDifettosi, lotto, second, third) {
        this.Stato = {
          DIFETTOSO: 1000,
          PERFETTO: 2000  
        };
        this.probDifettosi = +probDifettosi;
        this.lotto = +lotto;
        this.second = +second;
        this.third = +third;
    }

    _solveFirst() {
        return this.difettosi > 0;
    }

    _solveSecond() {
        return this.perfetti === this.second;
    }

    _solveThird() {
        return this.difettosi <= this.third;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            this._checkLibri();
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

module.exports = Libri;

/*const TIMES = 1e8;
const ex = new Libri(9.1, 168, 152, 25);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/