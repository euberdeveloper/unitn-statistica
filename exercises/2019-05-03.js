class LunaPark {

    get _pick() {
        const n = Math.floor(Math.random() * 100) + 1;
        for(let i = 0, count = 0; i < this._valori.length; i++) {
            if(count <= n && n <= count + this._valori[i]) {
                return i + 1;
            }
            count += this._valori[i];
        }
    }

    get _pickGiocatore() {
        const n = Math.floor(Math.random() * 100) + 1;
        return (n <= 50);
    }

    set valori(valori) {
        this._valori = valori.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str).map(n => n * 100);
    }

    constructor(valori, third, fourth) {
       this.valori = valori;
       this.third = +third;
       this.fourth = +fourth;
    }

    _solveFirst() {
        return this._pick;
    }

    _solveSecond(media) {
        return (this._pick - media) ** 3;
    }

    _solveThird(second) {
        return (this.third ** 3) * second;
    }

    _solveFourth() {
        return this._pickGiocatore && this._pick === this.fourth;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third, fourth ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(i === times / 2) {
                first = first / i;
            }
            if(i >= times / 2) {
                second += this._solveSecond(first);
            }
            else {
                first += this._solveFirst();
            }
            if(this._solveFourth()) fourth++;
        }
        if(current + gap >= times) {
            return [ first, second / (times - times / 2), this._solveThird(second / (times - times / 2)), fourth / times ];
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

module.exports = LunaPark;

/*const TIMES = 1e6;
const ex = new LunaPark('0.06, 0.28, 0.34, 0.29, 0.03', 2,  2);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));*/