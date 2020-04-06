import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      projects: this.get('store').findAll('project'),
      developers: this.get('store').findAll('developer')
    });
  },
  actions:{
  addNew(name,description,startDate,dueDate,owner){
    let project = this.get('store').createRecord('project',{name:name,description:description,startDate:startDate,dueDate:dueDate,owner:owner});
    project.save();
    this.transitionTo('projects');
  },
  cancel() {
    this.transitionTo('projects');
  }
}
});
