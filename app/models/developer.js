import DS from 'ember-data';

export default DS.Model.extend({
  identity:DS.attr('string'),
  project: DS.hasMany('project', { inverse: 'owner' })
});
