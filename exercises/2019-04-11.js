class BinomialeNegativa {

    _answer() {
        const n = Math.floor(Math.random() * 1000) + 1;
        return (n <= (this.p * 1000) ? this.Answer.RIGHT : this.Answer.WRONG);
    }

    constructor(rispCorr, probCorr, r, p, fourth, fifth) {
        this.Answer = {
            RIGHT: 1000,
            WRONG: 2000
        };
        this.rispCorr = +rispCorr;
        this.probCorr = +probCorr;
        this.r = +r;
        this.p = +p;
        this.fourth = +fourth;
        this.fifth = +fifth;
    }

    _solveFirst() {
        return 'TRUE';
    }

    _solveSecond() {
        return 'c(' + this.rispCorr + ', ' + (this.probCorr / 100) + ')';
    }

    _solveThird() {
        for (let i = 0; i < this.r; i++) {
            if (this._answer() === this.Answer.WRONG) {
                return false;
            }
        }
        return true;
    }

    _solveFourth() {
        let corr = 0;
        for (let i = 0; i < this.fourth; i++) {
            if (this._answer() === this.Answer.RIGHT) {
                corr++;
                if(i !== this.fourth - 1) {
                    return false;
                }
            }
        }
        return corr >= this.r;
    }

    _solveFifth() {
        let corr = 0, iterations = 0;
        while(corr < this.fifth) {
            if (this._answer() === this.Answer.RIGHT) {
                corr++;
            }
            iterations++;
        }
        return iterations <= this.fifth;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third, fourth, fifth ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            //if(this._solveThird()) third++;
            if(this._solveFourth()) fourth++;
            //if(this._solveFifth()) fifth++;
        }
        if(current + gap >= times) {
            return [ first, second, third / times, fourth / times, fifth / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third, fourth, fifth ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ this._solveFirst(), this._solveSecond(), 0, 0, 0 ], callback);
    }
}

module.exports = BinomialeNegativa;

const TIMES = 1e6;
const ex = new BinomialeNegativa(19, 61.9, 19, 0.507, 27, 23.8);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));