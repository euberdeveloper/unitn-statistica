class Bivariata {

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

    get prob() {
        return this._prob;
    }
    set prob(data) {
        this._prob = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]) ];
    }

    get k() {
        return 1 / this.prob.reduce((prev, curr) => prev + curr.reduce((previous, current) => previous + current, 0), 0);
    }

    _margX(x) {
        return this.prob.map(colonna => colonna[this.primaColonna.indexOf(x)]).reduce((previous, current) => previous + current, 0) * this.k;
    }

    _margY(x) {
        return this.prob[this.primaRiga.indexOf(x)].reduce((previous, current) => previous + current, 0) * this.k;
    }

    constructor(primaRiga, primaColonna, kFirst, kSecond, kThird, second, third) {
        this.primaRiga = primaRiga;
        this.primaColonna = primaColonna;
        this.prob = [ kFirst, kSecond, kThird ];
        this.second = +second;
        this.third = +third;
    }

    _solveFirst() {
        return this.k;
    }

    _solveSecond() {
        return this._margX(this.second);
    }

    _solveThird() {
        return this._margY(this.third);
    }

    _solveFourth() {
        return this.primaColonna.map(el => el * this._margX(el)).reduce((previous, current) => previous + current, 0);
    }

    _solveFifth() {
        return (this.primaRiga.map(el => el * el * this._margY(el)).reduce((previous, current) => previous + current, 0)) - (this.primaRiga.map(el => el *  this._margY(el)).reduce((previous, current) => previous + current, 0) ** 2);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth(), this._solveFifth() ];
    }
}

module.exports = Bivariata;

/* const TIMES = 1e9;
const ex = new Bivariata('-4.18, 3.53, 4.01', '1.58, 2.37, 2.5', '8, 7, 6', '4, 9, 5', '1, 2, 3', 1.58, 4.01);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */
