import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').peekRecord('project', params.project_id);
  }
});
