class Strade {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get pick() {
        const n = Math.floor(Math.random() * 3) + 1; 
        if(n === 1) {
            return this.Strade.PRIMA;
        }
        else if(n === 2) {
            return this.Strade.SECONDA;
        }
        else {
            return this.Strade.TERZA;
        }
    }

    get primo() {
        return this._primo;
    }
    set primo(data) {
        this._primo = this._parseData(data);
    }

    get margY() {
        return this._margY;
    }
    set margY(data) {
        this._margY = this._parseData(data);
    }

    get primaRiga() {
        return this._primaRiga;
    }
    set primaRiga(data) {
        this._primaRiga = this._parseData(data);
    }

    get probXcondY() {
        return this._probXcondY;
    }
    set probXcondY(data) {
        this._probXcondY = data.map(col => this._parseData(col));
    }

    get prob() {
        return this._prob;
    }
    set prob(data) {
        this._prob = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ].map(col => col.map((val, index) => val * this.margY[index]));
    }

    get margX() {
        if(this._margX) {
            return this._margX;
        }
        else {
            this._margX = this.prob.map(col => col.reduce((prev, curr) => prev + curr, 0));
            return this._margX;
        }
    }

    _espettanzaX(grado = 0) {
        return this.primaRiga.reduce((prev, curr, index) => prev + (curr ** grado) * this.margX[index], 0);
    }

    constructor(primo, margY, primaRiga, col1, col2, col3, col4) {
        this.Strade = {
            PRIMA: 1000,
            SECONDA: 2000,
            TERZA: 3000
        };
        this.primo = primo;
        this.margY = margY;
        this.primaRiga = primaRiga;
        this.primaColonna = [ 1, 2, 3 ];
        this.probXcondY = [ col1, col2, col3, col4 ];
        this.prob = [ col1, col2, col3, col4 ];
    }

    _solveFirst(ore = 0) {
        switch(this.pick) {
            case this.Strade.PRIMA:
                return ore + this.primo[0];
            case this.Strade.SECONDA:
                return this._solveFirst(ore + this.primo[1]);
            case this.Strade.TERZA:
                return this._solveFirst(ore + this.primo[2]);
        }
    }

    _solveSecond() {
        return this._espettanzaX();
    }

    _solveThird() {
        return this._espettanzaX(2) - (this._espettanzaX() ** 2);
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            first += this._solveFirst();
        }
        if(current + gap >= times) {
            return [ first / times, second, third ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, this._solveSecond(), this._solveThird() ], callback);
    }
}

module.exports = Strade;

/* const TIMES = 1e6;
const ex = new Strade('1, 6, 7', '0.52, 0.34, 0.14', '-2.5, 2, 5.5, 7', '0.28, 0.30, 0.23', '0.21, 0.22, 0.21', '0.27, 0.19, 0.37', '0.24, 0.29, 0.19');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */