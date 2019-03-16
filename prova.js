const Biglia = {
    RED: 1000,
    BLACK: 2000
};

class DiceAndBall {

    get balls() {
        return this.reds + this.blacks;
    }

    get first() {
        return this._first;
    }
    set first(data) {
        this._first = data.split(',').map(str => str.trim()).map(str => str === 'R' ? Biglia.RED : Biglia.BLACK);
    }

    get second() {
        return this._second;
    }
    set second(data) {
        this._second = data.split(',').map(str => str.trim()).map(str => str === 'R' ? Biglia.RED : Biglia.BLACK);
    }

    get third() {
        return this._third;
    }
    set third(data) {
        this._third = data === 'R' ? Biglia.RED : Biglia.BLACK;
    }

    constructor(reds, blacks, first, second, third) {
        this.reds = reds;
        this.blacks = blacks;
        this.first = first;
        this.second = second;
        this.third = third;
    }

    _tossDice() {
        return Math.floor(Math.random() * 4) + 1;
    }

    _pick() {
        const n = Math.floor(Math.random() * this.balls) + 1; 
        return (n <= this.reds) ? Biglia.RED : Biglia.BLACK;
    }

    _solveFirst() {
        const times = this._tossDice();
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

    test(times) {
        let first = 0, second = 0, third = 0;
        for(let i = 0; i < times; i++) {
            if(this._solveFirst()) first++;
            if(this._solveSecond()) second++;
            if(this._solveThird()) third++;
        }
        return [ first / times, second / times, third / times ];
    }
}

const TIMES = 100000000;

const ex = new DiceAndBall(7, 14, 'R, B', 'R, R, B', 'B');
const result = ex.test(TIMES);

console.log('PRIMO: ', result[0]);
console.log('SECONDO: ', result[1]);
console.log('TERZO: ', result[2]);