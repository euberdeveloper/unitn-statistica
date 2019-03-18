const FornitoriEMeteo = require('./2019-03-14');
const DiceAndBalls = require('./2019-03-15');
const ComitatoMeccanica = require('./2019-03-18');

module.exports = [
    
    {
        date: '2019-03-14',
        inputs: [
            {
                description: 'Percentuale Fornitore A o Pioggia',
                hint: 'Ad esempio se fosse il 53%: 53',
                type: 'number'
            },
            {
                description: 'Percentuale Fornitore B o Bel tempo',
                type: 'number'
            },
            {
                description: 'Percentuale Fornitore C o Neve',
                type: 'text'
            },
            {
                description: 'Percentuale Difettoso o Ritardo se Fornitore A o Pioggia',
                type: 'number'
            },
            {
                description: 'Percentuale Difettoso o Ritardo se Fornitore B o Bel tempo',
                type: 'number'
            },
            {
                description: 'Percentuale Difettoso o Ritardo se Fornitore C o Neve',
                type: 'text'
            }
        ],
        solution: FornitoriEMeteo
    },

    {
        date: '2019-03-15',
        inputs: [
            {
                description: 'Numero palline rosse',
                type: 'number'
            },
            {
                description: 'Numero palline nere',
                type: 'number'
            },
            {
                description: 'Sequenza rosse e nere',
                hint: 'Ad esempio: N, R',
                type: 'text'
            },
            {
                description: 'Sequenza rosse e nere',
                hint: 'Ad esempio: N, R, R',
                type: 'text'
            },
            {
                description: 'Tre nere o rosse?',
                hint: 'Ad esempio: N',
                type: 'text'
            }
        ],
        solution: DiceAndBalls
    },

    {
        date: '2019-03-18',
        inputs: [
            {
                description: 'Numero persone del comitato/gruppo',
                type: 'number'
            },
            {
                description: 'Numero matematici/ragazzi',
                type: 'number'
            },
            {
                description: 'Numero fisici/ragazze',
                type: 'number'
            },
            {
                description: 'Esercizio 1: numero matematici/ragazzi',
                type: 'number'
            },
            {
                description: 'Esercizio 2: numero matematici/ragazzi',
                hint: 'Se ti è richiesto il numero di gruppi possibili, digita 0',
                type: 'number'
            },
            {
                description: 'Esercizio 3: Sono di più i maschi/matematici o le femmine/fisici? Possono essere uguali?',
                hint: 'Es: TRUE, M oppure FALSE, F oppure FALSE, M oppure TRUE, F',
                type: 'text'
            }
        ],
        solution: DiceAndBalls
    }

];