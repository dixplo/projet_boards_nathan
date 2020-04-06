import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').peekRecord('project', params.project_id);
  },
  actions:{
    addNew(code,description, project){
      let story = this.get('store').createRecord('story',{code:code,description:description, project:project});
      story.save();
      this.transitionTo('projects');
    },
    cancel() {
      this.transitionTo('projects');
    }
  }
});
