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
    
    // this.get('/stocks', (db, request) => {
    //     if(request.queryParams.symbol !== undefined) {
    //         let filteredStocks = stock_data.filter(function(data) {
    //             return data.attributes.symbol
    //                     .toLowerCase()
    //                     .indexOf(request.queryParams.symbol.toLowerCase()) !== -1;
    //         });
    //
    //         return { data: filteredStocks };
    //     }
    //
    //     return {
    //         data: stock_data
    //     }
    // });

    this.namespace = 'api';
    this.urlPrefix = 'http://192.168.99.100:8081';
    this.passthrough();
}
