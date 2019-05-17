class Paolopoli {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    _defacto(n) {
        let res = 1;
        for(let i = n; i > 0; i--) {
            res *= i;
        }
        return res;
    }

    _choose(n, k) {
        let res = 1;
        for(let i = n - k + 1; i <= n; i++) {
            res *= i;
        }
        return res / this._defacto(k);
    }

    get primo() {
        return this._primo;
    }
    set primo(data) {
        this._primo = this._parseData(data);
    }

    get secondo() {
        return this._secondo;
    }
    set secondo(data) {
        this._secondo = this._parseData(data);
    }

    get lambdaX() {
        if(this._lambdaX === undefined) {
            const maggiore = (this.primo[0] > this.primo[1] ? 0 : 1);
            const x = this.primo[1 - maggiore], y = this.primo[maggiore];
            this._lambdaX = Math.pow(this._defacto(y) / this._defacto(x), 1 / (y - x));
        }
        return this._lambdaX;
    }

    get lambdaZ() {
        if(this._lambdaZ === undefined) {
            this._lambdaZ = this.lambdaX + this.lambdaY;
        }
        return this._lambdaZ;
    }

    constructor(primo, lambdaY, secondo, terzo) {
        this.primo = primo;
        this.lambdaY = +lambdaY;
        this.secondo = secondo;
        this.terzo = +terzo;
    }

    _solveFirst() {
        return this.lambdaX;
    }

    _solveSecond() {
        const x = this.secondo[0];
        const n = this.secondo[1];
        const lxz = this.lambdaX / this.lambdaZ;
        const lyz = this.lambdaY / this.lambdaZ;
        return this._choose(n, x) * (lxz ** x) * (lyz ** (n - x));
    }

    _solveThird() {
        return (this.terzo * this.lambdaX / (this.lambdaZ));
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird() ];
    }
}

module.exports = Paolopoli;

/* const TIMES = 1e8;
const ex = new Paolopoli('3, 4', 9, '15, 17', 17);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */