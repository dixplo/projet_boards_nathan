import Route from '@ember/routing/route';
import {set} from '@ember/object'
import RSVP from 'rsvp'

export default Route.extend({
  model(params) {
    return RSVP.hash({
      project: this.get('store').peekRecord('project', params.project_id),
      developers: this.get('store').findAll('developer')
    });
  },
  actions:{
    addNew(code,description,developer,project){
      let story = this.get('store').createRecord('story',{code:code,description:description,developer:developer});
      set(story,'project',project);
      story.save().then(()=>{
        project.save().then(()=>{this.transitionTo('projects');});
      });
    },
    cancel() {
      this.transitionTo('projects');
    }
  }
});
