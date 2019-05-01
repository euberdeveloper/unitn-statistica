class Cinema {

    get _siPresenta() {
        const n = Math.floor(Math.random() * 100) + 1; 
        return n <= (100 - this.percNonPresentano);
    }

    constructor(percNonPresentano, bigliettiSalaUno, postiSalaUno, bigliettiSalaDue, postiSalaDue, rispostaTerzo) {
        this.percNonPresentano = +percNonPresentano;
        this.bigliettiSalaUno = +bigliettiSalaUno;
        this.postiSalaUno = +postiSalaUno;
        this.bigliettiSalaDue = +bigliettiSalaDue;
        this.postiSalaDue = +postiSalaDue;
        this.rispostaTerzo = +rispostaTerzo;
    }

    _solveFirst() {
        let presentati = 0;
        for(let i = 0; i < this.bigliettiSalaUno; i++) {
            if(this._siPresenta) presentati++;
        }
        return (presentati - this.postiSalaUno) === 1;
    }   

    _solveSecond() {
        let presentati = 0;
        for(let i = 0; i < this.bigliettiSalaDue; i++) {
            if(this._siPresenta) presentati++;
        }
        return (presentati - this.postiSalaDue) === 1;
    }

    _solveThird() {
        let presentati = 0;
        for(let i = 0; i < this.rispostaTerzo; i++) {
            if(this._siPresenta) presentati++;
        }
        return (presentati - this.postiSalaUno) > 0;
    }

    _solveFourth() {
        let presentati = 0;
        for(let i = 0; i < this.bigliettiSalaDue; i++) {
            if(this._siPresenta) presentati++;
        }
        return presentati;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third, fourth ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveFirst()) first++;
            if(this._solveSecond()) second++;
            if(this._solveThird()) third++;
            fourth += this._solveFourth();
        }
        if(current + gap >= times) {
            return [ first / times, second / times, third / times, fourth / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third, fourth ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, 0, 0, 0 ], callback);
    }
}

module.exports = Cinema;

/*const TIMES = 1e6;
const ex = new Cinema(20, 19, 17, 19, 18, 21);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/