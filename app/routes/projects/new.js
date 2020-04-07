import Route from '@ember/routing/route'
import {set} from '@ember/object'

export default Route.extend({
  model() {
    return this.get('store').findAll('developer');
  },
  actions:{
  addNew(name,description,startDate,dueDate,owner,developer){
    let project = this.get('store').createRecord('project',{name:name,description:description,startDate:startDate,dueDate:dueDate});
    set(project,'owner',owner);
    project.save().then(()=>{
      developer.save().then(()=>{this.transitionTo('projects');});
    });
  },
  cancel() {
    this.transitionTo('projects');
  }
}
});
