class DadoGeometrico {

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

    _calcP(x) {
        return this.pSucc * ((1 - this.pSucc) ** (x - 1));
    }

    constructor(probs, successo, second, third, fourth) {
        this.probs = probs;
        this.successo = successo;
        this.second = +second;
        this.third = +third;
        this.fourth = +fourth;
    }

    _solveFirst() {
        return this.pSucc;
    }

    _solveSecond() {
        return this._calcP(this.second);
    }

    _solveThird() {
        let valdagno = 1;
        for(let i = 1; i <= this.third; i++) {
            valdagno -= this._calcP(i);
        }
        return valdagno;
    }

    _solveFourth() {
        let valdagno = 0;
        for(let i = 1; i <= this.fourth; i++) {
            valdagno += this._calcP(i);
        }
        return valdagno;
    }

    async test(times, callback) {
        return [this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth()];
    }
}

module.exports = DadoGeometrico;

/*const TIMES = 1e6;
const ex = new DadoGeometrico('0.23, 0.16, 0.15, 0.16, 0.16, 0.14', '2, 5', 3, 3, 6.03);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/