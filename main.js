require('zone.js/dist/zone-node');
require('reflect-metadata');

const { enableProdMode } = require('@angular/core');

const fs = require('fs');
const path = require('path');
const compression = require('compression')
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

enableProdMode();

const PORT = process.env.PORT || 8000;
const DIST_FOLDER = path.join(process.cwd(), 'frontend');
const AUTH = {
    user: 'lagrange',
    password: 'lagragna'
};

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./frontend/server/main');
const { ngExpressEngine } = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const exercises = require('./exercises/exercises');
const serializer = require('./utilities/serializer');
const redirect = require('./utilities/redirect');

let statistics;
try {
    statistics = JSON.parse(fs.readFileSync(STATISTICS_PATH), 'utf8');
}
catch {
    statistics = [];
}

app.use(compression());
if (process.env.NODE_ENV === 'production') {
    app.use(redirect);
}

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', path.join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(path.join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
    res.render('index', { req });
});

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'));

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
    if (user === AUTH.user && password === AUTH.password) {
        const ex = exercises.find(exercise => exercise.date === date);
        if (!ex) {
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