class FornitoriEMeteo {

    constructor(percA, percB, percC, percDiffA, percDiffB, percDiffC) {
        this.Fornitore = {
            A: 1000,
            B: 2000,
            C: 3000
        };
        this.percA = +percA;
        this.percB = +percB;
        this.percC = +percC;
        this.percDiffA = +percDiffA;
        this.percDiffB = +percDiffB;
        this.percDiffC = +percDiffC;
    }

    _pickFornitore() {
        const n = Math.floor(Math.random() * 100) + 1; 
        if(n <= this.percA) {
            return this.Fornitore.A;
        }
        else if(this.percA < n && n <= this.percA + this.percB) {
            return this.Fornitore.B;
        }
        else {
            return this.Fornitore.C;
        }
    }

    _pickDifettoso(fornitore) {
        const n = Math.floor(Math.random() * 100) + 1; 
        switch(fornitore) {
            case this.Fornitore.A:
                return (n <= this.percDiffA);
            case this.Fornitore.B:
                return (n <= this.percDiffB);
            case this.Fornitore.C:
                return (n <= this.percDiffC);
        }
    }

    async _test(times, current, values, callback) {
        const gap = 1e5;

        let [ first, second, third ] = values;
        for(let i = current; i < times && i - current < gap; i++) {
            const fornitore = this._pickFornitore();
            if(this._pickDifettoso(fornitore)) {
                switch(fornitore) {
                    case this.Fornitore.A:
                        first++;
                        break;
                    case this.Fornitore.B:
                        second++;
                        break;
                    case this.Fornitore.C:
                        third++;
                        break;
                }
            }
            else {
                i--;
            }
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

module.exports = FornitoriEMeteo;