'use strict';

let express = require('express');
let app = express();
let router = express.Router();
let jsonp = require('node-jsonp');

// middleware to use for all requests
router.use((req, res, next) => {
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});

const stocks =
{
    "stocks": [
        {
            name: 'Apple Inc.',
            symbol: 'AAPL',
            low: 112.04,
            high: 172.23,
            open: 115.14,
            close: 144.43
        },
        {
            name: 'Alphabet Inc.',
            symbol: 'GOOGL',
            low: 145.22,
            high: 194.18,
            open: 155.27,
            close: 186.88
        },
        {
            name: 'Yahoo! Inc.',
            symbol: 'YHOO',
            low: 32.56,
            high: 45.68,
            open: 35.03,
            close: 33.27
        }]
};

router.get('/stocks', (req, res) => {
    res.json(stocks);
});

router.get('/stocks/:id', (req, res) => {
    let symbol = req.params.id;
    const CHART_API = `http://chartapi.finance.yahoo.com/instrument/1.0/${symbol}/chartdata;type=quote;range=1m/json`;
    jsonp(CHART_API, 'finance_charts_json_callback',function(json) {
        res.json({"stock": json});
    });
});


app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World');
});

let server = app.listen(8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port)
});