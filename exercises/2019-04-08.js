class DadoBinomiale {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get probs() {
        return this._probs;
    }
    set probs(data) {
        this._probs = this._parseData(data);
    }

    get successo() {
        return this._successo;
    }
    set successo(data) {
        this._successo = this._parseData(data).map(n => n - 1);
    }

    get pSucc() {
        return this.successo.reduce((prev, current) => prev + this.probs[current], 0);
    }

    _defacto(n) {
        let res = 1;
        for(let i = n; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    _composizioneSemplice(n, k) {
        let res = 1;
        for(let i = n; i > n - k; i--) {
            res *= i;
        }
        return res / this._defacto(k);
    }

    _calcP(x) {
        return this._composizioneSemplice(this.lanci, x) * (this.pSucc ** x) * ((1 - this.pSucc) ** (this.lanci - x));
    }

    constructor(probs, successo, lanci, almeno) {
        this.probs = probs;
        this.successo = successo;
        this.lanci = +lanci;
        this.almeno = +almeno;
    }

    _solveFirst() {
        return this.pSucc;
    }

    _solveSecond() {
        return this._calcP(1);
    }

    _solveThird() {
        let res = 0;
        for(let i = this.almeno; i <= this.lanci; i++) {
            res += this._calcP(i);
        }
        return res;
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird()];
    }
}

module.exports = DadoBinomiale;

/*const TIMES = 1e6;
const ex = new DadoBinomiale('0.07, 0.15, 0.3, 0.26, 0.16, 0.06', '1, 6', 20, 7);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/