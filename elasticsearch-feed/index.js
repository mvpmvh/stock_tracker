'use strict';

const FILES = ['amex.csv', 'nasdaq.csv', 'nyse.csv'];
const HOST = 'elasticsearch';
const PORT = 9200;
const INDEX = 'stock_index';
const TYPE = 'stock';
const ELASTICSEARCH_SETTINGS = { index: INDEX, type: TYPE, host:`${HOST}:${PORT}`};
const STOCK_MAPPING = {
    "mappings": {
        "stock": {
            "_all": { "enabled": false  },
            "properties": {
                "Symbol": { "type": "string"  },
                "Name":  { "type": "string"  },
                "LastSale":   { "type": "string" },
                "MarketCap":   { "type": "string" },
                "IPOyear":   { "type": "string" },
                "Sector":   { "type": "string" },
                "Industry":   { "type": "string" },
                "Summary Quote":   { "type": "string" }
            }
        }
    }
};

let elasticsearchCSV = require('elasticsearch-csv');
let elasticsearch = require('elasticsearch');
let elasticSearchClient = new elasticsearch.Client({host:`${HOST}:${PORT}`});

console.log('starting mapping...');
elasticSearchClient.indices.create({
    index: INDEX,
    type: TYPE,
    body: STOCK_MAPPING
}).then((response) => {
    // Elasticsearch response for the mapping creation
    console.log('mapping finished.');
    _populate_index();
}, (err) => {
    throw err;
});

function _populate_index() {
    console.log('starting bulk import...');
    // create an instance of the importer with options for each imported file
    let complete = 0;
    let total = FILES.length;
    FILES.map(file => {
        let esCSV = new elasticsearchCSV({
            es: ELASTICSEARCH_SETTINGS,
            csv: { filePath: file, headers: true }
        });

        esCSV.import()
            .then((response) => {
                // Elasticsearch response for the bulk insert
                console.log(`finished bulk import ${++complete} of ${total}`);
            }, (err) => {
                throw err;
            });
    });
}