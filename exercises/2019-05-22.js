const random = require('random');

class Money {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _defacto(n) {
        let res = 1;
        for (let i = n; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    _choose(n, k) {
        let res = 1;
        for (let i = n - k + 1; i <= n; i++) {
            res *= i;
        }
        return res / this._defacto(k);
    }

    get pick() {
        const n = Math.floor(Math.random() * 2) + 1;
        return (n === 1 ? this.Lancio.TESTA : this.Lancio.CROCE);
    }

    get pickSecond() {
        const n = Math.floor(Math.random() * 100) + 1;
        return (n <= Math.floor(this.fourth[0] * 100) ? this.Lancio.TESTA : this.Lancio.CROCE);
    }

    get third() {
        return this._third;
    }
    set third(data) {
        this._third = this._parseData(data);
    }

    get fourth() {
        return this._fourth;
    }
    set fourth(data) {
        this._fourth = this._parseData(data);
    }

    constructor(monete, nLanci, second, third, fourth) {
        this.monete = monete;
        if (monete) {
            this.Lancio = {
                TESTA: 1000,
                CROCE: 2000
            };
            this.nLanci = +nLanci;
            this.second = +second;
            this.third = third;
            this.fourth = fourth;
        }
        else {
            this.clienti = +nLanci;
            this.firstAlb = +second;
            this.secondAlb = +third;
            this.random = random;
            this.poisson = this.random.poisson(this.clienti);
        }
    }

    _solveFirst() {
        if(this.monete) {
            return 'FALSE';
        }
        else {
            return (this.poisson() >= this.firstAlb);
        }
    }

    _solveSecond() {
        if(this.monete) {
            let teste = 0;
            for (let i = 0; i < this.nLanci; i++) {
                if (this.pick === this.Lancio.TESTA) {
                    teste++;
                }
            }
            return teste >= this.second;
        }
        else {
            return this.poisson() < this.secondAlb;
        }
    }

    _solveThird() {
        if(this.monete) {
            return this._choose(this.third[1], this.third[0]);
        }
        else {
            return this.clienti;
        }
    }

    _solveFourth() {
        let teste = 0;
        for (let i = 0; i < this.nLanci; i++) {
            if (this.pickSecond === this.Lancio.TESTA) teste++;
        }
        return teste;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [first, second, third, fourth] = values;
        for (let i = current; i < times && i - current < gap; i++) {
            if(!this.monete && this._solveFirst()) first++;
            if (this._solveSecond()) second++;
            if(this.monete) fourth += this._solveFourth();
        }
        if (current + gap >= times) {
            return this.monete ? [first, second / times, third, fourth / times] : [first / times, second / times, third];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [first, second, third, fourth], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [
            (this.monete ? this._solveFirst() : 0), 
            0, 
            this._solveThird(), 
            0], callback);
    }
}

module.exports = Money;

/* const TIMES = 1e6;
const ex = new Money(true, 16, 11, '11, 16', '0.62, 16');
/* const ex = new Money(false, 10, 5, 7); 
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */