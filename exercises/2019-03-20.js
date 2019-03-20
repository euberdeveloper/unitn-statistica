class Bandiere {

    constructor(colori) {
        this.colori = colori;
    }

    _getMax() {
        return this.colori * (this.colori - 1) * (this.colori - 1);
    }

    _solveFirst() {
        return this._getMax();
    }

    _solveSecond() {
        return this.colori * (this.colori - 1) / this._getMax();
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond() ];
    }
}

module.exports = Bandiere;