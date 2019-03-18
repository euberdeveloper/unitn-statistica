class ComitatoMeccanica {

    get balls() {
        return this.reds + this.blacks;
    }

    get first() {
        return this._first;
    }
    set first(data) {
        this._first = data.split(',').map(str => str.trim()).map(str => +str);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = data.split(',').map(str => str.trim()).map(str => str === 'R' ? this.Biglia.RED : this.Biglia.BLACK);
    }

    get third() {
        return this._third;
    }
    set third(data) {
        this._third = data === 'R' ? this.Biglia.RED : this.Biglia.BLACK;
    }

    constructor(posti, matematici, fisici, first, second, third) {
        this.posti = +posti;
        this.matematici = +matematici;
        this.fisici = +fisici;
        this.first = first;
        this.second = second;
        this.third = third;
    }


    _solveFirst() {
        return times === 2 ? (this._pick() === this.first[0] && this._pick() === this.first[1]) : false;
    }

    _solveSecond() {
        const times = this._tossDice();
        return times === 3 ? (this._pick() === this.second[0] && this._pick() === this.second[1] && this._pick() === this.second[2]) : false;
    }

    _solveThird() {
        const times = this._tossDice();
        if(times === 3) {
            return (this._pick() === this.third && this._pick() === this.third && this._pick() === this.third);
        }
        else if(times === 4) {
            let occured = 0;
            for(let i = 0; i < 4; i++) {
                if(this._pick() === this.third) occured++;
            }
            return occured >= 3;
        }
        else {
            return false;
        }
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveSecond()) second++;
            if(this._solveThird()) third++;
        }
        if(current + gap === times) {
            return [ first, second / times, third / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ this._solveFirst(), 0, 0 ], callback);
    }
}

module.exports = ComitatoMeccanica;

/*const TIMES = 1e6;
const ex = new DiceAndBall(7, 14, 'R, B', 'R, R, B', 'B');
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/