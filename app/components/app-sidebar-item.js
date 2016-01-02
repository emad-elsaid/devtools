import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected:selected'],
  isSelected: function(){
    return this.get('selectedRoute') && (this.get('selectedRoute') === this.get('route'));
  }.property('selectedRoute', 'route')
});
