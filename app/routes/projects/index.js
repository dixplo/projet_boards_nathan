import Route from '@ember/routing/route';
import RSVP from 'rsvp';


export default Route.extend({
  model() {
    return RSVP.hash({
      projects: this.get('store').findAll('project'),
      developers: this.get('store').findAll('developer')
    });
  }
});

