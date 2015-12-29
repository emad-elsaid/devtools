import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement(){
    this.$().foundation();
  },
  
  willDestroyElement: function(){
    this.$('*[data-selector]').each(function(){
      Ember.$( '#'+Ember.$(this).data('selector') ).remove();
    });
  },
});
