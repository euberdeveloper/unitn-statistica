class ComitatoMeccanica {

    get persone() {
        return this.matematici + this.fisici;
    }

    get first() {
        return this._first;
    }
    set first(matematici) {
        this._first = {
            matematici: matematici,
            fisici: this.posti - matematici
        }
    }

    get second() {
        return this._second;
    }
    set second(matematici) {
        this._second = matematici ? {
            matematici: matematici,
            fisici: this.posti - matematici
        } : null;
    }

    get third() {
        return this._third;
    }
    set third(data) {
        data = data.split(',').map(str => str.trim());
        this._third = {
            compreso: (data[0].toUpperCase() === 'TRUE'),
            matematiciDiPiu: (data[1].toUpperCase() === 'M')
        };
    }

    constructor(posti, matematici, fisici, first, second, third) {
        this.posti = +posti;
        this.matematici = +matematici;
        this.fisici = +fisici;
        this.first = +first;
        this.second = +second;
        this.third = third;
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

    _solveFirst() {
        return this._composizioneSemplice(this.matematici, this.first.matematici) * this._composizioneSemplice(this.fisici, this.first.fisici);
    }

    _solveSecond() {
        const tot = this._composizioneSemplice(this.persone, this.posti);
        if(this.second) {
            const casi = this._composizioneSemplice(this.matematici, this.second.matematici) * this._composizioneSemplice(this.fisici, this.second.fisici);
            return casi / tot;
        }
        else {
            return tot;
        }
    }

    _solveThird() {
        let threshold = (this.posti % 2 === 0 && !this.third.compreso) ? Math.floor(this.posti / 2) - 1 : Math.floor(this.posti / 2);
        let res = 0;
        for(let i = 1; i <= threshold; i++) {
            if(this.third.matematiciDiPiu) {
                res += this._composizioneSemplice(this.matematici, this.posti - i) * this._composizioneSemplice(this.fisici, i);
            }
            else {
                res += this._composizioneSemplice(this.fisici, this.posti - i) * this._composizioneSemplice(this.matematici, i);
            }
        }
        return res;
    }

    async test(_times, _callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird() ];
    }
}

module.exports = ComitatoMeccanica;