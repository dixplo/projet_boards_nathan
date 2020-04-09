import Route from '@ember/routing/route'
import {set} from '@ember/object'
import RSVP from 'rsvp'
import EmberObject from '@ember/object'

export default Route.extend({
  model() {
    return RSVP.hash({
      project: EmberObject.create(),
      developers: this.get('store').findAll('developer')
    });
  },
  actions:{
  addNew(model,developer){
    let project = this.get('store').createRecord('project',{name:model.name,description:model.description,startDate:model.startDate,dueDate:model.dueDate});
    set(project,'owner',model.owner);
    project.save().then(()=>{
      developer.save().then(()=>{this.transitionTo('projects');});
    });
  },
  cancel() {
    this.transitionTo('projects');
  }
}
});
