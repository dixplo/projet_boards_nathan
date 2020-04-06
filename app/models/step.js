import DS from 'ember-data';

export default DS.Model.extend({
  order:DS.attr('number'),
  title: DS.attr('string'),
  stories:DS.hasMany('story',{inverse:'step'})
});
