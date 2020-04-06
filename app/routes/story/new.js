import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').peekRecord('project', params.project_id);
  },
  actions:{
    addNew(code,description){
      let story = this.get('store').createRecord('story',{code:code,description:description});
      let leProjet = this.get('store').peekRecord('project',1);
      story.project =  leProjet;
      story.save();
      this.transitionTo('projects');
    },
    cancel() {
      this.transitionTo('projects');
    }
  }
});
