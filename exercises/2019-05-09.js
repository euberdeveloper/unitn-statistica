class BivariataSeconda {

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
        this._prob = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ];
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

    _funzMargX(f) {
        return this.primaColonna.filter(val => f(val)).reduce((prev, curr) => prev + this._margX(curr), 0);
    }

    _funzMargY(f) {
        return this.primaRiga.filter(val => f(val)).reduce((prev, curr) => prev + this._margY(curr), 0);
    }

    _espettanzaX(y, grado = 1) {
        return (this.k * this._prob[this.primaRiga.indexOf(y)].reduce((prev, curr, index) => prev + curr * (this.primaColonna[index] ** grado), 0)) / this._margY(y);
    }

    _espettanzaY(x, grado = 1) {
        return (this.k * this._prob.map(col => col[this.primaColonna.indexOf(x)]).reduce((prev, curr, index) => prev + curr * (this.primaRiga[index] ** grado), 0)) / this._margX(x);
    }

    _varianzaY(x) {
        return this._espettanzaY(x, 2) - (this._espettanzaY(x) ** 2);
    }

    constructor(primaRiga, primaColonna, kFirst, kSecond, kThird, kFourth, second, third, fourth, fifth) {
        this.primaRiga = primaRiga;
        this.primaColonna = primaColonna;
        this.prob = [ kFirst, kSecond, kThird, kFourth ];
        this.second = +second;
        this.third = +third;
        this.fourth = +fourth;
        this.fifth = +fifth;
    }

    _solveFirst() {
        return this.k;
    }

    _solveSecond() {
        return this._funzMargX(val => val <= this.second);
    }

    _solveThird() {
        return this._funzMargY(val => val > this.third);
    }

    _solveFourth() {
        return this._espettanzaX(this.fourth);
    }

    _solveFifth() {
        return this._varianzaY(this.fifth);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth(), this._solveFifth() ];
    }
}

module.exports = BivariataSeconda;

/* const TIMES = 1e9;
const ex = new BivariataSeconda('-2.28, -1.73, 0.49, 2.94', '-2.37, 1.75, 6.42', '4, 8, 10', '12, 3, 11', '2, 1, 6', '5, 9, 7', -2.37, 0.49, -2.28, -2.37);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r));
 */