import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('developer');
  },
  actions : {
    addNew(identity){
      let developer = this.get('store').createRecord('developer',{identity:identity});
      developer.save();
      this.transitionTo('developers');
    },
    cancel() {
      this.transitionTo('developers');
    }
  }
});
