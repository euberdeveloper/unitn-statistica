const FornitoriEMeteo = require('./2019-03-14');
const DiceAndBalls = require('./2019-03-15');
const ComitatoMeccanica = require('./2019-03-18');
const DueScatole = require('./2019-03-19');
const Bandiere = require('./2019-03-20');
const DiceGame = require('./2019-03-21');
const Sottoinsiemi = require('./2019-03-22');


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
        solution: ComitatoMeccanica
    },

    {
        date: '2019-03-19',
        inputs: [
            {
                description: 'Numero palline bianche in A',
                type: 'number'
            },
            {
                description: 'Numero palline nere in A',
                type: 'number'
            },
            {
                description: 'Numero palline bianche in B',
                type: 'number'
            },
            {
                description: 'Numero palline nere in B',
                type: 'number'
            },
            {
                description: 'Es. 1: colore richiesto?',
                hint: 'B per bianco e N per nero',
                type: 'text'
            },
            {
                description: 'Es. 2: Secondo colore? Primo colore?',
                hint: 'Es: B, N oppure B, B oppure N, N, oppure N, B',
                type: 'text'
            }
        ],
        solution: DueScatole
    },

    {
        date: '2019-03-20',
        inputs: [
            {
                description: 'Numero colori possibili',
                type: 'number'
            }
        ],
        solution: Bandiere
    },

    {
        date: '2019-03-21',
        inputs: [
            {
                description: 'Numero lanci di A',
                type: 'number'
            },
            {
                description: 'Numero lanci di B',
                type: 'number'
            },
            {
                description: 'Numero faccia che ferma il gioco',
                type: 'number'
            }
        ],
        solution: DiceGame
    },

    {
        date: '2019-03-22',
        inputs: [
            {
                description: 'L\'insieme va da 1 a che numero?',
                type: 'number'
            },
            {
                description: 'Numero elementi gruppi da formare?',
                type: 'number'
            }
        ],
        solution: Sottoinsiemi
    }

];