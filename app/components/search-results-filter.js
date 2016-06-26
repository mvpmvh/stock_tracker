import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['search-results-filter'],
    value: '',

    init() {
        this._super(...arguments);
        this.get('filter')('').then((results) => this.set('results', results));
    },

    actions: {
        handleFilterEntry() {
            let filterInputValue = this.get('value');
            let filterAction = this.get('filter');
            filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
        }
    }
});