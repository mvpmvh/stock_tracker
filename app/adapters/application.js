import RestAdapter from 'ember-data/adapters/rest';

export default RestAdapter.extend({
    host: 'http://192.168.99.100:8081',
    namespace: 'api'
});