const FornitoriEMeteo = require('./2019-03-14');
const DiceAndBalls = require('./2019-03-15');

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
    }

];