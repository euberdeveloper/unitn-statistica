class Messaggi {

    _parseLetter(letter) {
        switch (letter) {
            case 'A':
                return this.Lettere.A;
            case 'B':
                return this.Lettere.B;
            case 'C':
                return this.Lettere.C;
        }
    }

    _parseLetters(letters) {
        return letters.split(',').map(l => l.trim()).map(l => l.toUpperCase()).map(l => this._parseLetter(l));
    }

    get first() {
        return this._first;
    }
    set first(data) {
        let { arrivato, partito } = data;
        partito = partito.trim().toUpperCase();
        this._first = {
            arrivato: this._parseLetters(arrivato),
            partito: [ this._parseLetter(partito), this._parseLetter(partito), this._parseLetter(partito), this._parseLetter(partito) ]
        }
    }

    constructor(tutteA, tutteB, noDistorsione, arrivato, partito, nCaratteri) {
        this.Lettere = {
            A: 1000,
            B: 2000,
            C: 3000
        };
        this.Messaggi = {
            TUTTE_A: [this.Lettere.A, this.Lettere.A, this.Lettere.A, this.Lettere.A],
            TUTTE_B: [this.Lettere.B, this.Lettere.B, this.Lettere.B, this.Lettere.B],
            TUTTE_C: [this.Lettere.C, this.Lettere.C, this.Lettere.C, this.Lettere.C]
        };
        this.tutteA = +tutteA;
        this.tutteB = +tutteB;
        this.noDistorsione = +noDistorsione;
        this.first = { arrivato, partito };
        this.nCaratteri = +nCaratteri;
    }

    _pickMessaggio() {
        const n = Math.floor(Math.random() * 100) + 1;
        if (n <= this.tutteA) {
            return this.Messaggi.TUTTE_A;
        }
        else if (this.tutteA < n && n <= this.tutteA + this.tutteB) {
            return this.Messaggi.TUTTE_B;
        }
        else {
            return this.Messaggi.TUTTE_C;
        }
    }

    _pickLettera(lettera) {
        const n = Math.floor(Math.random() * 100) + 1;
        if (n <= this.noDistorsione) {
            return lettera;
        }
        else {
            const n = Math.floor(Math.random() * 2);
            switch (lettera) {
                case this.Lettere.A:
                    return (n == 0 ? this.Lettere.B : this.Lettere.C);
                case this.Lettere.B:
                    return (n == 0 ? this.Lettere.A : this.Lettere.C);
                case this.Lettere.C:
                    return (n == 0 ? this.Lettere.B : this.Lettere.A);
            }
        }
    }

    _pickArrivato(messaggio) {
        return [this._pickLettera(messaggio[0]), this._pickLettera(messaggio[1]), this._pickLettera(messaggio[2]), this._pickLettera(messaggio[3])];
    }

    _arrayEquals(x, y) {
        if(x.length !== y.length) {
            return false;
        }
        else {
            for(let i = 0; i < x.length; i++) {
                if(x[i] !== y[i]) {
                    return false;
                }
            }
            return true;
        }
    }

    _solveFirst() {
        let partito, arrivato;
        do {
            partito = this._pickMessaggio();
            arrivato = this._pickArrivato(partito);
        }
        while(!this._arrayEquals(arrivato, this.first.arrivato));
        return this._arrayEquals(partito, this.first.partito);
    }

    _solveSecond() {
        return 3 ** this.nCaratteri;
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [first, second] = values;
        for (let i = current; i < times && i - current < gap; i++) {
            if (this._solveFirst()) first++;
        }
        if (current + gap >= times) {
            return [ first / times, second ];
        }
        else {
            return await new Promise((resolve, reject) => {
                callback(current + gap);
                setTimeout(async () => { resolve(await this._test(times, current + gap, [first, second], callback)) }, 0);
            });
        }
    }

    async test(times, callback) {
        return await this._test(times, 0, [0, this._solveSecond()], callback);
    }
}

module.exports = Messaggi;

/*const TIMES = 1e6;
const ex = new Messaggi(0.37, 0.13, 0.53, 'C, A, C, C', 'A', 6);
ex.test(TIMES, n => console.log(n)).then(r => console.log(r));*/