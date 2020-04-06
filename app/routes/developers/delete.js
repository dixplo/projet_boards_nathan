import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.get('store').peekRecord('developer', params.developer_id);
  },
  actions : {
  delete(developer) {
    developer.deleteRecord();
    developer.save();
    this.transitionTo('developers');
  },
    cancel() {
      this.transitionTo('developers');
    }
  }
});
