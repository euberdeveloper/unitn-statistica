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
const Singoletti = require('./2019-04-02');
const Ripartizione = require('./2019-04-03');
const AbbiamoVinto = require('./2019-04-04');
const Daje = require('./2019-04-05');
const DadoBinomiale = require('./2019-04-08');
const DadoGeometrico = require('./2019-04-09');
const GuidaAutonoma = require('./2019-04-10');
const TestItaliano = require('./2019-04-11');
const Poisson = require('./2019-04-12');
const Libri = require('./2019-04-15');
const FunDensita = require('./2019-04-16');
const Integrali = require('./2019-04-17');
const Densita = require('./2019-04-18');
const Standardizzazione = require('./2019-04-19');
const Caram = require('./2019-04-29');
const ThirtyApril = require('./2019-04-30');
const Cinema = require('./2019-05-01');
const Veicoli = require('./2019-05-02');
const LunaPark = require('./2019-05-03');
const CurvaNormale = require('./2019-05-06');
const Settimana = require('./2019-05-07');
const Bivariata = require('./2019-05-08');
const BivariataSeconda = require('./2019-05-09');
const DioBono = require('./2019-05-13');
const Covarianza = require('./2019-05-14');
const Strade = require('./2019-05-15');
const Palopoli = require('./2019-05-16');
const MacchineSacchetti = require('./2019-05-20');
const Narkov = require('./2019-05-21');
const Money = require('./2019-05-22');

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
        simulated: true,
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
        simulated: true,
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
        simulated: false,
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
        simulated: true,
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
        simulated: false,
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
        simulated: true,
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
        simulated: true,
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
        simulated: true,
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
        simulated: true,
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
        simulated: false,
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
        simulated: false,
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
        simulated: false,
        solution: PesceAprile
    },

    {
        date: '2019-04-02',
        inputs: [
            {
                description: 'Probabilità singoletti da 1 a 8',
                hint: 'Ad esempio: 0.09, 0.13, 0.11, 0.13, 0.09, 0.14, 0.13, 0.18',
                type: 'text'
            },
            {
                description: 'Primo es: intervallo',
                hint: 'Ad esempio: 3, 7',
                type: 'text'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: 4, inf',
                type: 'text'
            },
            {
                description: 'Terzo es: quanto vale x',
                type: 'number'
            },
            {
                description: 'Quarto es: x1 e x2 (in fila)',
                hint: 'Ad esempio: 5, 6',
                type: 'text'
            }
        ],
        simulated: false,
        solution: Singoletti
    },

    {
        date: '2019-04-03',
        inputs: [
            {
                description: 'Funzione di ripartizione. Separare tratti con ; e numeri con , Non inserire il primo e l\'ultimo tratto (quelli con zero e uno)',
                hint: 'Ad es: 0.0001, -1.587, -0.493; 0.0017, -0.493, 0.601; 0.0177, 0.601, 1.695; 0.1017, 1.695, 2.789; 0.3502, 2.789, 3.883; 0.7423, 3.883, 4.977;',
                type: 'text'
            },
            {
                description: 'Primo es: intervallo',
                hint: 'Ad esempio: -0.493, 3.73',
                type: 'text'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: 0.601, 2.789',
                type: 'text'
            },
            {
                description: 'Terzo es: quanto vale P(x)',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Ripartizione
    },

    {
        date: '2019-04-04',
        inputs: [
            {
                description: 'Funzione di ripartizione. Separare tratti con ; e numeri con , Non inserire il primo e l\'ultimo tratto (quelli con zero e uno) e quello con il singoletto (prob. x = 3)',
                hint: 'Ad es: 0.115, 1, 2; 0.31, 2, 3; 0.5, 0.25, 3, 3, 5; (Tenere premuto sulla I blu per + info)',
                type: 'text'
            },
            {
                description: 'Primo es: intervallo',
                hint: 'Ad esempio: -inf, 2',
                type: 'text'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: 4, inf',
                type: 'text'
            },
            {
                description: 'Terzo es: intervallo',
                hint: 'Ad esempio: 1, 2',
                type: 'text'
            },
            {
                description: 'Quarto es: intervallo',
                hint: 'Ad esempio: 5, 7',
                type: 'text'
            }
        ],
        simulated: false,
        solution: AbbiamoVinto
    },

    {
        date: '2019-04-05',
        inputs: [
            {
                description: 'Funzione: valori nei punti 1, 2, 3, 5',
                hint: 'Ad es: 0.115, 0.31, 0.5, 0.9',
                type: 'text'
            },
            {
                description: 'Primo es: singoletto',
                type: 'number'
            },
            {
                description: 'Secondo es: singoletti',
                hint: 'Ad esempio: 3, 2',
                type: 'text'
            },
            {
                description: 'Terzo es: intervallo e singoletto',
                hint: 'Ad esempio: 2.96, 5.62, 3',
                type: 'text'
            }
        ],
        simulated: false,
        solution: Daje
    },

    {
        date: '2019-04-08',
        inputs: [
            {
                description: 'Inserisci i valori delle probabilità',
                hint: 'Ad es: 0.13, 0.13, 0.09, 0.23, 0.36, 0.06',
                type: 'text'
            },
            {
                description: 'Numeri per cui si ha un successo',
                hint: 'Ad es: 1, 2',
                type: 'text'
            },
            {
                description: 'Numero di lanci in totale',
                type: 'number'
            },
            {
                description: 'Terzo es: almeno quanti successi',
                type: 'number'
            }
        ],
        simulated: false,
        solution: DadoBinomiale
    },

    {
        date: '2019-04-09',
        inputs: [
            {
                description: 'Inserisci i valori delle probabilità',
                hint: 'Ad es: 0.23, 0.16, 0.15, 0.16, 0.16, 0.14',
                type: 'text'
            },
            {
                description: 'Numeri per cui si ha un successo',
                hint: 'Ad es: 2, 5',
                type: 'text'
            },
            {
                description: 'Secondo es: esattamente a quale lancio?',
                type: 'number'
            },
            {
                description: 'Terzo es: più di quanti lanci?',
                type: 'number'
            },
            {
                description: 'Quarto es: x minore o uguale a cosa?',
                type: 'number'
            }
        ],
        simulated: false,
        solution: DadoGeometrico
    },

    {
        date: '2019-04-10',
        inputs: [
            {
                description: 'Inserisci la percentuale di successo',
                hint: 'Ad es: 95.6',
                type: 'number'
            },
            {
                description: 'Secondo es: numero misurazioni esatte',
                hint: 'Ad es: 23',
                type: 'number'
            },
            {
                description: 'Terzo es: ->ulteriori<- misurazioni esatte?',
                hint: 'Ad es: 15',
                type: 'number'
            }
        ],
        simulated: true,
        solution: GuidaAutonoma
    },

    {
        date: '2019-04-11',
        inputs: [
            {
                description: 'Risposte corrette per passare l\'esame',
                hint: 'Ad es: 19',
                type: 'number'
            },
            {
                description: 'Probabilità risposta corretta in percentuale',
                hint: 'Ad es: 61.9',
                type: 'number'
            },
            {
                description: 'Es 3: quanto vale r',
                hint: 'Ad es: 19',
                type: 'number'
            },
            {
                description: 'Es 3: quanto vale p',
                hint: 'Ad es: 0.507',
                type: 'number'
            },
            {
                description: 'Es 4: dopo quante risposte passa il test',
                hint: 'Ad es: 27',
                type: 'number'
            },
            {
                description: 'Es 5: X minore o uguale a?',
                hint: 'Ad es: 23.8',
                type: 'number'
            }
        ],
        simulated: true,
        solution: TestItaliano
    },

    {
        date: '2019-04-12',
        inputs: [
            {
                description: 'Numero medio di macchine',
                type: 'number'
            },
            {
                description: 'Es 2: quante macchine esattamente',
                type: 'number'
            },
            {
                description: 'Es 3: quante macchine almeno',
                type: 'number'
            },
            {
                description: 'Es 3: quante macchine al massimo',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Poisson
    },

    {
        date: '2019-04-15',
        inputs: [
            {
                description: 'Probabilità difettoso in percentuale',
                type: 'number'
            },
            {
                description: 'Totale libri in lotto',
                type: 'number'
            },
            {
                description: 'Es 2: quanti libri esattamente perfetti',
                hint: 'mettere almeno 10^7 o 10^8 test',
                type: 'number'
            },
            {
                description: 'Es 3: non più di quanti libri difettosi?',
                hint: 'Anche qui numero test alto. Su pc più veloce.',
                type: 'number'
            }
        ],
        simulated: true,
        solution: Libri
    },

    {
        date: '2019-04-16',
        inputs: [
            {
                description: 'Esponente della funzione',
                type: 'number'
            },
            {
                description: 'Quarto esercizio: x minore o uguale a',
                type: 'number'
            }
        ],
        simulated: false,
        solution: FunDensita
    },

    {
        date: '2019-04-17',
        inputs: [
            {
                description: 'Lambda',
                hint: 'Ad esempio: 0.59',
                type: 'number'
            },
            {
                description: 'Primo es: x <= di?',
                hint: 'Ad esempio: 0.85',
                type: 'number'
            },
            {
                description: 'Secondo es: intervallo',
                hint: 'Ad esempio: 0.1, 1.38',
                type: 'text'
            },
            {
                description: 'Alfa',
                hint: 'Ad esempio 0.64',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Integrali
    },

    {
        date: '2019-04-18',
        inputs: [
            {
                description: 'Scrivere H: k(H - 2x)',
                hint: 'Ad esempio: 12.9',
                type: 'number'
            },
            {
                description: 'Intervallo della funzione',
                hint: 'Ad esempio: 0, 5',
                type: 'text'
            },
            {
                description: 'Terzo es: A + BX; scrivere A e B',
                hint: 'Ad esempio: 19.4, -5.3',
                type: 'text'
            }
        ],
        simulated: false,
        solution: Densita
    },

    {
        date: '2019-04-19',
        inputs: [
            {
                description: 'Scrivere mu:',
                hint: 'Ad esempio: 162.5',
                type: 'number'
            },
            {
                description: 'Scrivere sigma:',
                hint: 'Ad esempio: 4.27',
                type: 'number'
            },
            {
                description: 'Primo e secondo es: scrivere X',
                hint: 'Ad esempio: 166.8981',
                type: 'number'
            },
            {
                description: 'Terzo esercizio: X maggiore o uguale a',
                hint: 'Ad esempio: 167.9656',
                type: 'number'
            },
        ],
        simulated: false,
        solution: Standardizzazione
    },

    {
        date: '2019-04-29',
        notes: 'The second exercise could be aproximated, even the first decimal',
        inputs: [
            {
                description: 'Scrivere mu',
                hint: 'Ad esempio: 5.96',
                type: 'number'
            },
            {
                description: 'Scrivere sigma',
                hint: 'Ad esempio: 0.54',
                type: 'number'
            },
            {
                description: 'Si scarta se superiore a',
                hint: 'Ad esempio: 6.848221',
                type: 'number'
            },
            {
                description: 'Si scarta se inferiore a',
                hint: 'Ad esempio: 5.1204223',
                type: 'number'
            },
            {
                description: 'Terzo es: valore std. corrispondente a',
                hint: 'Ad esempio: 5.1204223',
                type: 'number'
            }
        ],
        simulated: true,
        solution: Caram
    },

    {
        date: '2019-04-30',
        notes: 'Secondo e terzo non sicuri, fatta utilizzando chi quadro',
        inputs: [
            {
                description: 'Scrivere mu',
                hint: 'Ad esempio: 6.9',
                type: 'number'
            },
            {
                description: 'Scrivere sigma quadro',
                hint: 'Ad esempio: 0.25',
                type: 'number'
            }
        ],
        simulated: false,
        solution: ThirtyApril
    },

    {
        date: '2019-05-01',
        notes: 'Nel terzo non viene data la risposta. Inserite la vostra soluzione, viene simulata la probabilità in base a quel numero di biglietti e poi potete controllare che sia effettivamente inferiore a quella richiesta. Nei primi due esattamente una persona non trova posto, nel terzo invece almeno una.',
        inputs: [
            {
                description: 'Percentuale persone che non si presentano',
                hint: 'Ad esempio: 20',
                type: 'number'
            },
            {
                description: 'N. biglietti sala uno',
                hint: 'Ad esempio: 19',
                type: 'number'
            },
            {
                description: 'N. posti sala uno',
                hint: 'Ad esempio: 17',
                type: 'number'
            },
            {
                description: 'N. biglietti sala due',
                hint: 'Ad esempio: 19',
                type: 'number'
            },
            {
                description: 'N. posti sala due',
                hint: 'Ad esempio: 18',
                type: 'number'
            },
            {
                description: 'Terzo es: n. biglietti',
                hint: 'La soluzione che credete sia giusta',
                type: 'number'
            }
        ],
        simulated: true,
        solution: Cinema
    },

    {
        date: '2019-05-02',
        inputs: [
            {
                description: 'Media esponenziale in minuti',
                hint: 'Ad esempio: 8',
                type: 'number'
            },
            {
                description: 'Primo es: minore di',
                hint: 'Ad esempio: 5.4',
                type: 'number'
            },
            {
                description: 'Secondo es: percentuale certezza',
                hint: 'Ad esempio: 87',
                type: 'number'
            },
            {
                description: 'Terzo es: quanti ALTRI minuti',
                hint: 'Ad esempio: 4',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Veicoli
    },

    {
        date: '2019-05-03',
        inputs: [
            {
                description: 'Probabilità palline',
                hint: 'Ad esempio: 0.06, 0.28, 0.34, 0.29, 0.03',
                type: 'text'
            },
            {
                description: 'Terzo es: Y = cosa * X',
                hint: 'Ad esempio: 2',
                type: 'number'
            },
            {
                description: 'Quarto es: numero pallina',
                hint: 'Ad esempio: 2',
                type: 'number'
            }
        ],
        simulated: true,
        solution: LunaPark
    },

    {
        date: '2019-05-06',
        inputs: [
            {
                description: 'Il secondo ti chiede minore ed il terzo maggiore',
                hint: 'Deselezionare se è il contrario',
                type: 'switch'
            },
            {
                description: 'Scrivere mu',
                hint: 'Ad esempio: -0.38',
                type: 'number'
            },
            {
                description: 'Scrivere sigma quadro',
                hint: 'Ad esempio: 9.23',
                type: 'number'
            },
            {
                description: 'Primo es: scrivere intervallo',
                hint: 'Ad esempio: -0.05, 0.74',
                type: 'text'
            },
            {
                description: 'Secondo es: scrivere numero',
                hint: 'Ad esempio: -4.36',
                type: 'number'
            },
            {
                description: 'Terzo es: scrivere numero',
                hint: 'Ad esempio: 2.15',
                type: 'number'
            }
        ],
        simulated: true,
        solution: CurvaNormale
    },

    {
        date: '2019-05-07',
        notes: 'Mettere almeno 10 milioni di test',
        inputs: [
            {
                description: 'Scrivere lambda',
                hint: 'Ad esempio: 3',
                type: 'number'
            },
            {
                description: 'Primo es: più di X',
                hint: 'Ad esempio: 12',
                type: 'number'
            },
            {
                description: 'Secondo es: al più X',
                hint: 'Ad esempio: 7',
                type: 'number'
            },
            {
                description: 'Terzo es: almeno X settimane',
                hint: 'Ad esempio: 5',
                type: 'number'
            }
        ],
        simulated: true,
        solution: Settimana
    },

    {
        date: '2019-05-08',
        inputs: [
            {
                description: 'Scrivere la prima riga (le probabilità senza k)',
                hint: 'Ad esempio: -4.18, 3.53, 4.01',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna (le probabilità senza k)',
                hint: 'Ad esempio: 1.58, 2.37, 2.5',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna con le k',
                hint: 'Ad esempio: 6, 2, 5',
                type: 'text'
            },
            {
                description: 'Scrivere la seconda colonna con le k',
                hint: 'Ad esempio: 1, 3, 4',
                type: 'text'
            },
            {
                description: 'Scrivere la terza colonna con le k',
                hint: 'Ad esempio: 9, 8, 7',
                type: 'text'
            },
            {
                description: 'Secondo es: X = cosa',
                hint: 'Ad esempio: 1.58',
                type: 'number'
            },
            {
                description: 'Terzo es: Y = cosa',
                hint: 'Ad esempio: 4.01',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Bivariata
    },

    {
        date: '2019-05-09',
        inputs: [
            {
                description: 'Scrivere la prima riga (i valori senza k)',
                hint: 'Ad esempio: -2.28, -1.73, 0.49, 2.94',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna (i valori senza k)',
                hint: 'Ad esempio: -2.37, 1.75, 6.42',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna con le k',
                hint: 'Ad esempio: 4, 8, 10',
                type: 'text'
            },
            {
                description: 'Scrivere la seconda colonna con le k',
                hint: 'Ad esempio: 12, 3, 11',
                type: 'text'
            },
            {
                description: 'Scrivere la terza colonna con le k',
                hint: 'Ad esempio: 2, 1, 6',
                type: 'text'
            },
            {
                description: 'Scrivere la quarta colonna con le k',
                hint: 'Ad esempio: 5, 9, 7',
                type: 'text'
            },
            {
                description: 'Secondo es: X <= cosa',
                hint: 'Ad esempio: -2.37',
                type: 'number'
            },
            {
                description: 'Terzo es: Y > cosa',
                hint: 'Ad esempio: 0.49',
                type: 'number'
            },
            {
                description: 'Quarto es: Y = cosa',
                hint: 'Ad esempio: -2.28',
                type: 'number'
            },
            {
                description: 'Quinto es: X = cosa',
                hint: 'Ad esempio: -2.37',
                type: 'number'
            }
        ],
        simulated: false,
        solution: BivariataSeconda
    },

    {
        date: '2019-05-13',
        inputs: [
            {
                description: 'Scrivere la prima riga (valori della y)',
                hint: 'Ad esempio: -9, 1, 3, 10',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna (valori della x)',
                hint: 'Ad esempio: -3, -2, 10',
                type: 'text'
            },
            {
                description: 'Scrivere i marginali della x',
                hint: 'Ad esempio: 0.28, 0.36, 0.36',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna delle probabilità',
                hint: 'Ad esempio: 0.28, 0.30, 0.29',
                type: 'text'
            },
            {
                description: 'Scrivere la seconda colonna delle probabilità',
                hint: 'Ad esempio: 0.27, 0.24, 0.20',
                type: 'text'
            },
            {
                description: 'Scrivere la terza colonna delle probabilità',
                hint: 'Ad esempio: 0.21, 0.20, 0.30',
                type: 'text'
            },
            {
                description: 'Scrivere la quarta colonna delle probabilità',
                hint: 'Ad esempio: 0.24, 0.26, 0.21',
                type: 'text'
            }
        ],
        simulated: false,
        solution: DioBono
    },

    {
        date: '2019-05-14',
        inputs: [
            {
                description: 'Scrivere la prima riga (valori della y)',
                hint: 'Ad esempio: -8, 1.5, 7, 8',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna (valori della x)',
                hint: 'Ad esempio: -9.5, -4.5, -2.5',
                type: 'text'
            },
            {
                description: 'Scrivere i marginali della x',
                hint: 'Ad esempio: 0.29, 0.23, 0.48',
                type: 'text'
            },
            {
                description: 'Scrivere la prima colonna delle probabilità',
                hint: 'Ad esempio: 0.20, 0.32, 0.25',
                type: 'text'
            },
            {
                description: 'Scrivere la seconda colonna delle probabilità',
                hint: 'Ad esempio: 0.31, 0.18, 0.26',
                type: 'text'
            },
            {
                description: 'Scrivere la terza colonna delle probabilità',
                hint: 'Ad esempio: 0.18, 0.23, 0.19',
                type: 'text'
            },
            {
                description: 'Scrivere la quarta colonna delle probabilità',
                hint: 'Ad esempio: 0.31, 0.27, 0.30',
                type: 'text'
            },
            {
                description: 'Primo es: coordinate',
                hint: 'Ad esempio: -9.5, 7',
                type: 'text'
            }
        ],
        simulated: false,
        solution: Covarianza
    },

    {
        date: '2019-05-15',
        inputs: [
            {
                description: 'Primo es: ore',
                hint: 'Ad esempio: 1, 6, 7',
                type: 'text'
            },
            {
                description: 'Probabilità delle y',
                hint: 'Ad esempio: 0.52, 0.34, 0.14',
                type: 'text'
            },
            {
                description: 'Prima riga tabella',
                hint: 'Ad esempio: -2.5, 2, 5.5, 7',
                type: 'text'
            },
            {
                description: 'Prima colonna valori tabella',
                hint: 'Ad esempio: 0.28, 0.30, 0.23',
                type: 'text'
            },
            {
                description: 'Seconda colonna valori tabella',
                hint: 'Ad esempio: 0.21, 0.22, 0.21',
                type: 'text'
            },
            {
                description: 'Terza colonna valori tabella',
                hint: 'Ad esempio: 0.27, 0.19, 0.37',
                type: 'text'
            },
            {
                description: 'Quarta colonna valori tabella',
                hint: 'Ad esempio: 0.24, 0.29, 0.19',
                type: 'text'
            }
        ],
        simulated: true,
        solution: Strade
    },

    {
        date: '2019-05-16',
        inputs: [
            {
                description: 'P(X = cosa) = P(X = cosa)',
                hint: 'Ad esempio: 3, 4',
                type: 'text'
            },
            {
                description: 'Lambda y',
                hint: 'Ad esempio: 9',
                type: 'number'
            },
            {
                description: 'Secondo esercizio: X e Z',
                hint: 'Ad esempio: 15, 17',
                type: 'text'
            },
            {
                description: 'Terzo esercizio: Z',
                hint: '17',
                type: 'number'
            }
        ],
        simulated: false,
        solution: Palopoli
    },

    {
        date: '2019-05-20',
        inputs: [
            {
                description: 'Media rosse',
                hint: 'Ad esempio: 36',
                type: 'number'
            },
            {
                description: 'Sigma rosse',
                hint: 'Ad esempio: 15',
                type: 'number'
            },
            {
                description: 'Media gialle',
                hint: 'Ad esempio: 25',
                type: 'number'
            },
            {
                description: 'Sigma gialle',
                hint: 'Ad esempio: 11',
                type: 'number'
            },
            {
                description: 'Costo sacchetto',
                hint: 'Ad esempio: 0.18',
                type: 'number'
            },
            {
                description: 'Costo rosse',
                hint: 'Ad esempio: 0.24',
                type: 'number'
            },
            {
                description: 'Costo gialle',
                hint: 'Ad esempio: 0.18',
                type: 'number'
            },
            {
                description: 'Quarto esercizio: costo maggiore o uguale a cosa',
                hint: 'Ad esempio: 13.67',
                type: 'number'
            }
        ],
        simulated: false,
        solution: MacchineSacchetti
    },

    {
        date: '2019-05-21',
        notes: 'Ultimo esercizio simulato',
        inputs: [
            {
                description: 'Lambda uno:',
                hint: 'Ad esempio: 12',
                type: 'number'
            },
            {
                description: 'Lamba due:',
                hint: 'Ad esempio: 9',
                type: 'number'
            },
            {
                description: 'Primo es: maggiore uguale a cosa',
                hint: 'Ad esempio: 23',
                type: 'number'
            },
            {
                description: 'Secondo es: scrivere i due numeri',
                hint: 'Ad esempio: 16, 23',
                type: 'text'
            },
            {
                description: 'Terzo es: Y = cosa X',
                hint: 'Ad esempio: 1.1',
                type: 'number'
            },
            {
                description: 'Terzo es: |Y| minore uguale a cosa',
                hint: 'Ad esempio: 2.5',
                type: 'number'
            },
            {
                description: 'Quarto es: |Y| minore uguale a cosa',
                hint: 'Ad esempio: 2.5',
                type: 'number'
            }
        ],
        simulated: true,
        solution: Narkov
    },

    {
        date: '2019-05-22',
        notes: 'Monete: secondo e quarto esercizio simulati. Albergo: primo e secondo esercizio simulati.',
        inputs: [
            {
                description: 'Ho l\'esercizio delle monete',
                hint: 'Deselezionare se hai quello dell\'albergo',
                type: 'switch'
            },
            {
                description: 'Numero di lanci/clienti',
                hint: 'Ad esempio: 16',
                type: 'number'
            },
            {
                description: 'Monete: secondo es. Albergo: primo es.',
                hint: 'Ad esempio: 11',
                type: 'number'
            },
            {
                description: 'Monete: terzo es. Albergo: secondo es.',
                hint: 'Ad esempio: Monete: 11, 16 Albergo: 7',
                type: 'text'
            },
            {
                description: 'Monete: quarto esercizio',
                hint: 'Ad esempio: 0.62, 16 Albergo: scrivi quello che vuoi',
                type: 'text'
            }
        ],
        simulated: true,
        solution: Money
    }

];
