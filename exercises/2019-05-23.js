class Cerchio {

    _f(x) {
        return (2 * Math.sqrt(1 - (x ** 2))) / Math.PI;
    }

    _boolLanguage(bool) {
        const n = Math.floor(Math.random() * 14) + 1; 
        switch(n) {
            case 1: 
                return (bool ? 'VERO' : 'FALSO');
            case 2:
                return (bool ? 'TRUE' : 'FALSE');
            case 3:
                return (bool ? 'RICHTICH' : 'FALSCH');
            case 4:
                return (bool ? 'VERDAD' : 'FALSO');
            case 5:
                return (bool ? '实' : '假');
            case 6:
                return (bool ? 'リアル' : '偽');
            case 7:
                return (bool ? '현실' : '그릇된');
            case 8:
                return (bool ? 'իրական' : 'կեղծ'); 
            case 9:
                return (bool ? 'حقيقي' : 'زائف');
            case 10:
                return (bool ? 'אמיתי' : 'שקר');
            case 11:
                return (bool ? 'असली' : 'झूठा');    
            case 12:
                return (bool ? 'реальный' : 'фальшивый');    
            case 13:
                return (bool ? 'πραγματικός' : 'ψευδής');   
            case 14:
                return (bool ? 'maoli' : 'wahahee');   
        }
    }

    constructor(first, second) {
        this.first = +first;
        this.second = +second;
    }

    _solveFirst() {
        return this._f(this.first);
    }

    _solveSecond() {
        return this._f(this.second);
    }

    _solveThird() {
        return this._boolLanguage(false);
    }

    _solveFourth() {
        return this._boolLanguage(true);
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Cerchio;

/* const TIMES = 1e6;
const ex = new Cerchio(-0.5, -0.54);
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */