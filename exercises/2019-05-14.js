class Covarianza {

    _parseData(data) {
        return data.split(',').map(str => str.toUpperCase()).map(str => str.replace(/INF/g, 'Infinity')).map(str => +str);
    }

    get primo() {
        return this._primo;
    }
    set primo(data) {
        this._primo = this._parseData(data);
    }

    get primaRiga() {
        return this._primaRiga;
    }
    set primaRiga(data) {
        this._primaRiga = this._parseData(data);
    }

    get primaColonna() {
        return this._primaColonna;
    }
    set primaColonna(data) {
        this._primaColonna = this._parseData(data);
    }

    get margX() {
        return this._margX;
    }
    set margX(data) {
        this._margX = this._parseData(data);
    }

    get margY() {
        return this.prob.map(col => col.reduce((prev, curr) => prev + curr, 0));
    }

    get probXCondY() {
        return this.prob.map((col, index) => col.map(val => val / this.margY[index]));
    }

    get probYCondX() {
        return this._probYCondX;
    }
    set probYCondX(data) {
        this._probYCondX = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ];
    }

    get prob() {
        return this._prob;
    }
    set prob(data) {
        this._prob = [ this._parseData(data[0]), this._parseData(data[1]), this._parseData(data[2]), this._parseData(data[3]) ].map(col => col.map((val, index) => val * this.margX[index]));
    }

    _momentoX(grado = 1) {
        return this.primaColonna.reduce((prev, curr, index) => prev + (curr ** grado) * this.margX[index], 0);
    }

    _momentoY(grado = 1) {
        return this.primaRiga.reduce((prev, curr, index) => prev + (curr ** grado) * this.margY[index], 0);
    }

    _momentoXY() {
        return this.primaRiga.reduce((prevY, currY, indexY) => prevY + this.primaColonna.reduce((prevX, currX, indexX) => prevX + currY * currX * this.prob[indexY][indexX], 0), 0);
    }

    _covarianza() {
        return this._momentoXY() - this._momentoX() * this._momentoY();
    }

    _varianzaX() {
        return this._momentoX(2) - (this._momentoX() ** 2);
    }

    _varianzaY() {
        return this._momentoY(2) - (this._momentoY() ** 2);
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

    constructor(primaRiga, primaColonna, margX, kFirst, kSecond, kThird, kFourth, primo) {
        this.primaRiga = primaRiga;
        this.primaColonna = primaColonna;
        this.margX = margX;
        this.prob = [ kFirst, kSecond, kThird, kFourth ];
        this.probYCondX = [ kFirst, kSecond, kThird, kFourth ];
        this.primo = primo;
    }

    _solveFirst() {
        return this.prob[this.primaRiga.indexOf(this.primo[1])][this.primaColonna.indexOf(this.primo[0])];
    }

    _solveSecond() {
        return this._covarianza();
    }

    _solveThird() {
        return this._boolLanguage(this._covarianza() === 0);
    }

    _solveFourth() {
        return this._covarianza() / Math.sqrt(this._varianzaX() * this._varianzaY());
    }

    async test(times, callback) {
        return [ this._solveFirst(), this._solveSecond(), this._solveThird(), this._solveFourth() ];
    }
}

module.exports = Covarianza;

/* const TIMES = 1e9;
const ex = new Covarianza('-8, 1.5, 7, 8', '-9.5, -4.5, -2.5', '0.29, 0.23, 0.48', '0.20, 0.32, 0.25', '0.31, 0.18, 0.26', '0.18, 0.23, 0.19', '0.31, 0.27, 0.30', '-9.5, 7');
ex.test(TIMES, prog => console.log(prog), n => console.log(n)).then(r => console.log(r)); */