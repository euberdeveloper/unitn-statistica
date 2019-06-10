const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const AUTH = {
    user: 'lagrange',
    password: 'lagragna'
};
const STATISTICS_PATH = path.join(__dirname, 'statistics.json');

const exercises = require('./exercises/exercises');
const serializer = require('./utilities/serializer');

let statistics;
try {
    statistics = JSON.parse(fs.readFileSync(STATISTICS_PATH), 'utf8');
}
catch {
    statistics = [];
}

app.get('/', express.static(path.join('frontend', 'browser')));

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/api/statistics', (req, res) => {
    res.sendFile(STATISTICS_PATH);
});

app.post('/api/provide-exercise', (req, res) => {
    const { user, password, date, userinfo } = req.body;
    statistics.push(userinfo);
    try {
        fs.writeFileSync(STATISTICS_PATH, JSON.stringify(statistics, null, 2));
    }
    catch (error) {
        console.error('Error in writing statistics', error);
    }
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