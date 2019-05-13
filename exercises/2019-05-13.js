class DioBono {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get primaRiga() {
        return this._primaRiga;
    }
    set primaRiga(data) {
        this._primaRiga = this._parseData(data);
    }

    get primaColonna() {
        return this._primaColonna;
    }
    set primaColonna(data) {
        this._primaColonna = this._parseData(data);
    }

    get margX() {
        return this._margX;
    }
    set margX(data) {
        this._margX = this._parseData(data);
    }

    get margY() {
        return this.prob.map(col => col.reduce((prev, curr) => prev + curr, 0));
    }

    get probXCondY() {
        return this.prob.map((col, index) => col.map(val => val / this.margY[index]));
    }

    get probYCondX() {
        return this._probYCondX;
    }
    set probYCondX(data) {
        this._probYCondX = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ];
    }

    get prob() {
        return this._prob;
    }
    set prob(data) {
        this._prob = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ].map(col => col.map((val, index) => val * this.margX[index]));
    }

    _momentoX(grado = 1) {
        return this.primaColonna.reduce((prev, curr, index) => prev + (curr ** grado) * this.margX[index], 0);
    }

    _espettanzaXsuY() {
        return this.probXCondY.map(col => col.reduce((prev, curr, index) => prev + curr * this.primaColonna[index], 0));
    }

    _varEspettanzaXsuY() {
        return this._espettanzaXsuY().reduce((prev, curr, index) => prev + ((curr - this._momentoX()) ** 2) * this.margY[index], 0);
    }

    _varXsuY() {
        return this.probXCondY.map(col => col.reduce((prev, curr, index) => prev + (curr * (this.primaColonna[index] ** 2)), 0) - (col.reduce((prev, curr, index) => prev + curr * this.primaColonna[index], 0) ** 2));
    }

    _espettanzaVarXsuY() {
        return this._varXsuY().reduce((prev, curr, index) => prev + curr * this.margY[index], 0);
    }

    constructor(primaRiga, primaColonna, margX, kFirst, kSecond, kThird, kFourth) {
        this.primaRiga = primaRiga;
        this.primaColonna = primaColonna;
        this.margX = margX;
        this.prob = [ kFirst, kSecond, kThird, kFourth ];
        this.probYCondX = [ kFirst, kSecond, kThird, kFourth ];
    }

    _solveFirst() {
        return this._momentoX();
    }

    _solveSecond() {
        return this._momentoX(2) - (this._momentoX() ** 2);
    }

    _solveThird() {
        return this._varEspettanzaXsuY();
    }

    _solveFourth() {
        return this._espettanzaVarXsuY();
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = DioBono;

/* const TIMES = 1e9;
const ex = new DioBono('-9, 1, 3, 10', '-3, -2, 10', '0.28, 0.36, 0.36', '0.28, 0.30, 0.29', '0.27, 0.24, 0.20', '0.21, 0.20, 0.30', '0.24, 0.26, 0.21');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */