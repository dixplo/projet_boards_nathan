import Route from '@ember/routing/route';
import {set} from '@ember/object'

export default Route.extend({
  model(params) {
    return this.get('store').peekRecord('project', params.project_id);
  },
  actions:{
    addNew(code,description, project){
      let story = this.get('store').createRecord('story',{code:code,description:description});
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
