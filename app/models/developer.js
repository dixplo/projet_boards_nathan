import DS from 'ember-data';

export default DS.Model.extend({
  identity:DS.attr('string'),
  ownerProjects: DS.hasMany('project', { inverse: 'owner' })
});
