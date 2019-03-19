class DueScatole {

    get pallineA() {
        return this.biancheA + this.nereA;
    }

    get pallineB() {
        return this.biancheB + this.nereB;
    }

    get first() {
        return this._first;
    }
    set first(data) {
        data = data.toUpperCase();
        this._first = this._parsePallina(data);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        data = data.split(',').map(str => str.trim()).map(str => str.toUpperCase());
        this._second = {
            secondaPallina: this._parsePallina(data[0]),
            primaPallina: this._parsePallina(data[1])
        };
    }

    constructor(biancheA, nereA, biancheB, nereB, first, second) {
        this.Pallina = {
            BIANCA: 1000,
            NERA: 2000
        };
        this.biancheA = +biancheA;
        this.nereA = +nereA;
        this.biancheB = +biancheB;
        this.nereB = +nereB;
        this.first = first;
        this.second = second;
    }

    _parsePallina(str) {
        return (str === 'B' ? this.Pallina.BIANCA : this.Pallina.NERA);
    }

    _pickA() {
        const n = Math.floor(Math.random() * this.pallineA) + 1; 
        return (n <= this.biancheA ? this.Pallina.BIANCA : this.Pallina.NERA);
    }

    _pickB(pallina) {
        const n = Math.floor(Math.random() * (this.pallineB + 1)) + 1; 
        switch(pallina) {
            case this.Pallina.BIANCA:
                return (n <= this.biancheB + 1 ? this.Pallina.BIANCA : this.Pallina.NERA);
            case this.Pallina.NERA:
                return (n <= this.nereB + 1 ? this.Pallina.NERA : this.Pallina.BIANCA);
        }
    }

    _solveFirst() {
        return (this._pickB(this._pickA()) === this.first);
    }

    _solveSecond() {
        let first, second;
        do {
            first = this._pickA();
            second = this._pickB(first);
        }
        while(second !== this.second.secondaPallina);
        return (first === this.second.primaPallina);
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

module.exports = DueScatole;

/*const TIMES = 100000000;
const ex = new DueScatole(20, 14, 16, 21, 'B', 'B, B');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/