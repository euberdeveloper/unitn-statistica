const random = require('random');

class Narkov {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = this._parseData(data);
    }

    get lambdaTre() {
        return this.lambdaUno + this.lambdaDue;
    }

    get mu() {
        return 0;
    }
    
    get sigma() {
        return this.thirdUno;
    }

    get thirdLambda() {
        return this.thirdDue / this.sigma;
    }

    constructor(lambdaUno, lambdaDue, first, second, thirdUno, thirdDue, fourth) {
        this.lambdaUno = +lambdaUno;
        this.lambdaDue = +lambdaDue;
        this.first = +first;
        this.second = second;
        this.thirdUno = +thirdUno;
        this.thirdDue = +thirdDue;
        this.fourth = +fourth;

        this.random = random;
        this.dnorm = random.normal(this.mu, this.sigma);
    }

    _solveFirst() {
        return this.lambdaTre / this.first;
    }

    _solveSecond() {
        return ((this.lambdaUno / this.lambdaTre) * this.second[1]) / this.second[0];
    }

    _solveThird() {
        return 1 - (1 / (this.thirdLambda ** 2));
    }

    _solveFourth() {
        return Math.abs(this.dnorm()) < this.thirdDue;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third, fourth ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveFourth()) fourth++;
        }
        if(current + gap >= times) {
            return [ first, second, third, fourth / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third, fourth ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ this._solveFirst(), this._solveSecond(), this._solveThird(), 0 ], callback);
    }
}

module.exports = Narkov;

/* const TIMES = 1e7;
const ex = new Narkov(12, 9, 23, '16, 23', 1.1, 2.5, 2.5);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */