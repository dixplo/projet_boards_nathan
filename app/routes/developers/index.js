import Route from '@ember/routing/route';
import {set, get} from '@ember/object';

export default Route.extend({
  model() {
    return this.get('store').findAll('developer');
  },
});
