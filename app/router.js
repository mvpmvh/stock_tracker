import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stocks', function(){
    this.route('detail', { path: '/:stock_id' });
  });
});

export default Router;
