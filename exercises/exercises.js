const FornitoriEMeteo = require('./2019-03-14');
const DiceAndBalls = require('./2019-03-15');
const ComitatoMeccanica = require('./2019-03-18');
const DueScatole = require('./2019-03-19');
const Bandiere = require('./2019-03-20');
const DiceGame = require('./2019-03-21');
const Sottoinsiemi = require('./2019-03-22');
const Gatti = require('./2019-03-25');
const Messaggi = require('./2019-03-26');
const FunzioneProb = require('./2019-03-27');
const FunzProb = require('./2019-03-28');
const PesceAprile = require('./2019-04-01');

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
    },

    {
        date: '2019-03-25',
        inputs: [
            {
                description: 'Percentuale gatti/prodotti infetti?',
                type: 'number'
            },
            {
                description: 'Percentuale test positivi su gatti/prodotti infetti?',
                hint: 'Scrivere 100 se non si ha quella sui gatti',
                type: 'number'
            },
            {
                description: 'Percentuale test positivi su gatti/prodotti sani?',
                type: 'number'
            }
        ],
        solution: Gatti
    },

    {
        date: '2019-03-26',
        inputs: [
            {
                description: 'Probabilità tutte A in percentuale',
                type: 'number'
            },
            {
                description: 'Probabilità tutte B in percentuale',
                type: 'number'
            },
            {
                description: 'Probabilità lettera non distorta in percentuale',
                hint: 'Non distorta vuol dire che arriva invariata',
                type: 'number'
            },
            {
                description: 'Messaggio che arriva, lettere separate da virgola?',
                hint: 'Ad esempio: A, B, B, C',
                type: 'text'
            },
            {
                description: 'Lettera di cui è composto il messaggio iniziale',
                hint: 'Ad esempio: B',
                type: 'text'
            },
            {
                description: 'Secondo es: numero caratteri sequenza',
                type: 'number'
            }
        ],
        solution: Messaggi
    },

    {
        date: '2019-03-27',
        inputs: [
            {
                description: 'Valore di lambda',
                type: 'number'
            },
            {
                description: 'Primo esercizio, intervallo',
                hint: 'Ad esempio: 0.105, 0.388',
                type: 'text'
            },
            {
                description: 'Secondo esercizio, intervallo',
                hint: 'Ad esempio: -0.651, 0.651',
                type: 'text'
            },
            {
                description: 'Terzo esercizio, intervalli',
                hint: 'Ad esempio: 0.441, 0.443, 1.188, 1.506',
                type: 'text'
            },
            {
                description: 'Quarto esercizio, intervalli',
                hint: 'Ad esempio: 0.441, 0.443, 1.188, 1.506, 0.105, 0.388',
                type: 'text'
            }
        ],
        solution: FunzioneProb
    },

    {
        date: '2019-03-28',
        inputs: [
            {
                description: 'Hai la funzione quadratica',
                hint: 'Deselezionare se hai c * (x - 1)^3',
                type: 'switch'
            },
            {
                description: 'Da che numero la funzione assume 1?',
                hint: 'Se l\'intervallo è [0,N], scrivere N',
                type: 'number'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: -3.887, 11.614',
                type: 'text'
            },
            {
                description: 'Terzo es: che probabilità deve dare',
                hint: 'La domanda chiede p(]2, t]) = X. Scrivere X.',
                type: 'number'
            }
        ],
        solution: FunzProb
    },

    {
        date: '2019-04-01',
        inputs: [
            {
                description: 'Hai una funzione senza frazione?',
                hint: 'Deselezionare se non hai 1 - e^(-lambda * x)',
                type: 'switch'
            },
            {
                description: 'Quanto vale lambda',
                hint: 'Esponente senza il meno di e',
                type: 'number'
            },
            {
                description: 'Primo es: intervallo',
                hint: 'Ad esempio: -inf, 0.293',
                type: 'text'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: 0.531, inf',
                type: 'text'
            },
            {
                description: 'Terzo es: intervalli. (numeri in fila)',
                hint: 'Ad esempio: -inf, 0.293, 0.531, inf, 1.755',
                type: 'text'
            },
            {
                description: 'Quarto es: intervalli. (numeri in fila)',
                hint: 'Ad esempio: -inf, 0.293, 0.531, inf, 0.157, 1.174',
                type: 'text'
            }
        ],
        solution: PesceAprile
    }

];