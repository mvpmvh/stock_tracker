import Ember from 'ember';

let stocks = [{
    id: 1,
    name: 'Apple Inc.',
    symbol: 'AAPL',
    low: 96.00,
    high: 315.00,
    open: 150.00,
    close: 200.00
}, {
    id: 2,
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    low: 140.00,
    high: 305.00,
    open: 112.00,
    close: 212.00
}, {
    id: 3,
    name: 'Yahoo! Inc.',
    symbol: 'YHOO',
    low: 60.23,
    high: 72.32,
    open: 61.44,
    close: 62.52
}];

export default Ember.Route.extend({
    model() {
        return stocks;
    }
});
