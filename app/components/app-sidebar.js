import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';


export default Ember.Component.extend( KeyboardShortcuts,{
  classNames: ['sidebar'],
  search: '',
  routesService: Ember.inject.service('routes'),

  didInsertElement(){
    var ul = this.$('.side-nav');
    if( !ul ){ return false; }
    var top = ul.offset().top - Ember.$(document).scrollTop();
    ul.outerHeight(this.$().parent().height() - top);
    Ember.run.later(this, this.didInsertElement, 500);
  },

  isValid(route){
    return route.toLowerCase().includes(this.get('search').toLowerCase());
  },

  routes: function(){
    return this.get('routesService').get('routes').filter((route)=> this.isValid(route));
  }.property('search'),


  // keyboard accessibility
  selectedIndex: -1,
  selectedRoute: function(){
    return this.get('routes')[this.get('selectedIndex')];
  }.property('selectedIndex', 'routes'),

  // reset selected index if the search query changed
  resetSelectedRoute: function(){
    this.set('selectedIndex', -1);
  }.observes('routes'),

  actions: {
    keyboardUp: function(){
      if(this.get('selectedIndex')===0){return;}
      this.decrementProperty('selectedIndex');
    },

    keyboardDown: function(){
      if(this.get('selectedIndex')>=this.get('routes').length-1){return;}
      this.incrementProperty('selectedIndex');
    },

    keyboardEnter: function(){
      this.$('.selected li').trigger('click');
    }
  },

  keyboardShortcuts: {
    'up': {
      action: 'keyboardUp',
      scoped: true
    },
    'down': {
      action: 'keyboardDown',
      scoped: true
    },
    'enter': {
      action: 'keyboardEnter',
      scoped: true
    }
  }

});
