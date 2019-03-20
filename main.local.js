const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;
const AUTH = {
    user: 'lagrange',
    password: 'lagragna'
};

const exercises = require('./exercises/exercises');
const serializer = require('./utilities/serializer');

app.get('/', express.static(path.join('frontend', 'browser')));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/api/provide-exercise', (req, res) => {
    const { user, password, date } = req.body;
    if(user === AUTH.user && password === AUTH.password) {
        const ex = exercises.find(exercise => exercise.date === date);
        if(!ex) {
            res.status(400).send({ message: 'Exercise not found' });
        }
        else {
            res.status(200).send(serializer(ex));
        }
    }
    else {
        res.status(400).send({ message: 'Not valid credentials' });
    }
});

app.listen(PORT, () => {
    console.log('PORT ', PORT);
    console.log('SERVER LISTENING');
});