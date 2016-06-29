'use strict';

let express = require('express');
let app = express();
let router = express.Router();
let jsonp = require('node-jsonp');
let elasticsearch = require('elasticsearch');
let elastic_client = new elasticsearch.Client({
    host: 'elasticsearch:9200',
    log: 'trace'
});

// middleware to use for all requests
router.use((req, res, next) => {
    res.contentType('application/json');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/stocks', (req, res) => {
    let body = {
        "size" : 10,
        "sort" : [{ "Name" : "asc" }]
    };

    if (req.query.symbol) {
        body.query = {
            "bool": {
                "must": [
                    { "match": { "Name": req.query.symbol}}
                ]
            }
        };
    }

    elastic_client.search({
        index: 'stock_index',
        type: 'stock',
        body: body
    }).then((resp) => {
        //console.log(resp.hits.hits);
        res.send({"stocks": resp.hits.hits});
    }, (err) => {
        console.trace(err.message);
        res.json({"error": {
            "message": err.message
        }});
    });
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