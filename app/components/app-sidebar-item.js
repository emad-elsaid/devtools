import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isSelected:selected'],
  isSelected: function(){
    return this.get('selectedRoute').label === this.get('route').label;
  }.property('selectedRoute', 'route')
});
