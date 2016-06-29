import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
    normalize(model, hash, prop) {
        if (prop === 'stock') {
            hash.id = hash.meta.ticker;

            hash.name = hash.meta["Company-Name"];
            delete hash.meta["Company-Name"];

            hash.symbol = hash.meta.ticker;

            hash.exchange = hash.meta["Exchange-Name"];
            delete hash.meta["Exchange-Name"];

            hash.currency = hash.meta.currency;
            delete hash.meta.currency;

            hash.date = hash.Date;
        }

        if (prop === 'stocks') {
            hash.id = hash._source.Symbol;
            hash.symbol = hash._source.Symbol;
            hash.name = hash._source.Name;
        }
        return this._super(...arguments);
    }
});
