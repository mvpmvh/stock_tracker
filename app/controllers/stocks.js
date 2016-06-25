import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        filterStocks(param) {
            if (param !== '') {
                return this.get('store').query('stock', { symbol: param });
            } else {
                return this.get('store').findAll('stock');
            }
        }
    }
});
