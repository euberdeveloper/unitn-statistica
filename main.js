require('zone.js/dist/zone-node');
require('reflect-metadata');

const { enableProdMode } = require('@angular/core');

const path = require('path');
const compression = require('compression')
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const admin = require('firebase-admin');
const serviceAccount = require('./utilities/firebase-credentials')();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://unitn-statistica.firebaseio.com'
});
const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;

enableProdMode();

const PORT = process.env.PORT || 8080;
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

app.post('/api/statistics', (req, res) => {
    db.collection('statistics').get()
        .then(snapshot => {
            if(snapshot.empty) {
                res.status(200).send('No statistics');
            }
            else {
                const statistics = [];
                snapshot.forEach(user => statistics.push({ ...user.data(), id: user.id }));
                res.status(200).send(statistics);
            }
        })
        .catch(error => res.status(500).send({ message: 'Error in getting statistics', error }));
});

app.post('/api/provide-exercise', (req, res) => {
    const { user, password, date, userInfo } = req.body;
    if (userInfo) {
        const anonymous = db.collection('statistics').doc(userInfo.id);
        const value = {
            timestamp: userInfo.timestamp,
            exercise: date
        };
        anonymous.update({ accesses: FieldValue.arrayUnion(value) })
            .catch(() => {
                db.collection('statistics').doc(userInfo.id).create({ accesses: [value] });
            });
    }
    else {
        const anonymous = db.collection('statistics').doc('anonymous');
        const now = (new Date()).toISOString();
        const value = {
            timestamp: now,
            exercise: date
        };
        anonymous.update({ accesses: FieldValue.arrayUnion(value) })
            .catch(() => {
                db.collection('statistics').doc('anonymous').create({ accesses: [value] });
            });
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