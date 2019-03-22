class Sottoinsiemi {

    constructor(setEnd, elementsNumber) {
        this.setEnd = +setEnd;
        this.elementsNumber = +elementsNumber;
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

    _pickNumber() {
        return Math.floor(Math.random() * this.setEnd) + 1;;
    }

    _solveFirst() {
        return this._composizioneSemplice(this.setEnd, this.elementsNumber);
    }

    _solveSecond() {
        return this._solveFirst() - this._composizioneSemplice(Math.ceil(this.setEnd / 2), this.elementsNumber);
    }

    _solveThird() {
        let pickedNumbers = [];
        do {
            for(let i = 0; i < this.elementsNumber; i++) {
                pickedNumbers[i] = this._pickNumber();
            }
        }
        while(pickedNumbers.every(n => n % 2 !== 0));
        return pickedNumbers.every(n => n % 2 === 0);
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveThird()) third++;
        }
        if(current + gap >= times) {
            return [ first, second, third / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ this._solveFirst(), this._solveSecond(), 0 ], callback);
    }
}

module.exports = Sottoinsiemi;

/*const TIMES = 1e9;
const ex = new Sottoinsiemi(7200, 5);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/