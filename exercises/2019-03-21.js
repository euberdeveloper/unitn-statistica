class DiceGame {

    constructor(lanciA, lanciB, fermaDado) {
        this.lanciA = +lanciA;
        this.lanciB = +lanciB;
        this.fermaDado = +fermaDado;
    }

    _tossDice() {
        const n = Math.floor(Math.random() * 6) + 1;
        return (n === this.fermaDado);
    }

    _tossA() {
        for(let i = 0; i < this.lanciA; i++) {
            if(this._tossDice()) {
                return true;
            }
        }
        return false;
    }

    _tossB() {
        for(let i = 0; i < this.lanciB; i++) {
            if(this._tossDice()) {
                return true;
            }
        }
        return false;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            const a = this._tossA();
            const b = this._tossB();
            if(a && !b) {
                first++;
            }
            else if(!a && b) {
                second++;
            }
            else if(a && b) {
                third++;
            }
            else {
                i--;
            }
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

module.exports = DiceGame;

/*const TIMES = 1e6;
const ex = new DiceGame(4, 3, 2);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/