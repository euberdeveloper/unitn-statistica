class DiceAndBall {

    get balls() {
        return this.reds + this.blacks;
    }

    get first() {
        return this._first;
    }
    set first(data) {
        this._first = data.split(',').map(str => str.trim()).map(str => str === 'R' ? this.Biglia.RED : this.Biglia.BLACK);
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

    constructor(reds, blacks, first, second, third) {
        this.Biglia = {
            RED: 1000,
            BLACK: 2000
        }
        this.reds = +reds;
        this.blacks = +blacks;
        this.first = first;
        this.second = second;
        this.third = third;
    }

    _tossDice() {
        return Math.floor(Math.random() * 4) + 1;
    }

    _pick() {
        const n = Math.floor(Math.random() * this.balls) + 1; 
        return (n <= this.reds) ? this.Biglia.RED : this.Biglia.BLACK;
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

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            if(this._solveFirst()) first++;
            if(this._solveSecond()) second++;
            if(this._solveThird()) third++;
        }
        if(current + gap >= times) {
            return [ first / times, second / times, third / times ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [ first, second, third ], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [ 0, 0, 0 ], callback);
    }
}

module.exports = DiceAndBall;
