import Route from '@ember/routing/route';
import {get, set} from '@ember/object';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('developer', params.developer_id);
  },
  actions: {
    update(developer) {
      developer.save().then(()=>this.transitionTo('developers'));
    },
    cancel() {
      this.transitionTo('developers');
    }
  }
});
