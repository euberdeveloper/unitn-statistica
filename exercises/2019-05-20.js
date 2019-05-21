class MacchineSacchetti {

    constructor(mediaRosse, sigmaRosse, mediaGialle, sigmaGialle, costoSacchetto, costoRosse, costoGialle, fourth) {
        this.mediaRosse = +mediaRosse;
        this.sigmaRosse = +sigmaRosse;
        this.mediaGialle = +mediaGialle;
        this.sigmaGialle = +sigmaGialle;
        this.costoSacchetto = +costoSacchetto;
        this.costoRosse = +costoRosse;
        this.costoGialle = +costoGialle;
        this.fourth = +fourth;
    }

    _solveFirst() {
        return (this.mediaRosse + this.mediaGialle) * this.costoSacchetto;
    }

    _solveSecond() {
        return (this.mediaRosse * this.costoRosse) + (this.mediaGialle * this.costoGialle);
    }

    _solveThird() {
        return ((this.sigmaRosse ** 2) * (this.costoRosse ** 2)) + ((this.sigmaGialle ** 2) * (this.costoGialle ** 2));
    }

    _solveFourth() {
        return ((this.mediaRosse * this.costoRosse) + (this.mediaGialle * this.costoGialle)) / this.fourth;
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = MacchineSacchetti;

/* const TIMES = 1e8;
const ex = new MacchineSacchetti(36, 15, 25, 11, 0.18, 0.24, 0.18, 13.67);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */