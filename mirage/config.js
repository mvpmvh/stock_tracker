export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

    let stock_data = [{
        id: 1,
        type: 'stocks',
        attributes: {
            name: 'Apple Inc.',
            symbol: 'AAPL',
            low: 112.04,
            high: 172.23,
            open: 115.14,
            close: 144.43
        }
    }, {
        id: 2,
        type: 'stock',
        attributes: {
            name: 'Alphabet Inc.',
            symbol: 'GOOGL',
            low: 145.22,
            high: 194.18,
            open: 155.27,
            close: 186.88
        }
    }, {
        id: 3,
        type: 'stocks',
        attributes: {
            name: 'Yahoo! Inc.',
            symbol: 'YHOO',
            low: 32.56,
            high: 45.68,
            open: 35.03,
            close: 33.27
        }
    }];

    this.get('/stocks', (db, request) => {
        if(request.queryParams.symbol !== undefined) {
            let filteredStocks = stock_data.filter(function(data) {
                return data.attributes.symbol
                        .toLowerCase()
                        .indexOf(request.queryParams.symbol.toLowerCase()) !== -1;
            });

            return { data: filteredStocks };
        }

        return {
            data: stock_data
        }
    });

    this.get('/stocks/:id', (schema, request) => {
        return {
            data: stock_data[request.params.id]
        };
    });
}
