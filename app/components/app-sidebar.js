import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['sidebar'],
  search: '',

  didInsertElement(){
    var ul = this.$('.side-nav');
    var top = ul.offset().top - $(document).scrollTop();
    ul.outerHeight(this.$().parent().height() - top);
    Ember.run.later(this, this.didInsertElement, 500);
  },

  isValid(route){
    var isExceptionalRoute = ['error', 'index', 'loading', 'application'].contains(route);
    var isSubstate = route.endsWith('_error') || route.endsWith('_loading');
    var includeSearch = route.includes(this.get('search'));
    return !(isExceptionalRoute || isSubstate) && includeSearch;
  },

  routes: function(){
    var routes = this.container.lookup('router:main').router.recognizer.names;
    var keys = Object.keys(routes);
    var objects = [];
    for(var i=0; i<keys.length; i++){
      if( this.isValid(keys[i]) ){
        objects.push({
          label: keys[i],
          route: keys[i]
        });
      }
    }
    return objects;
  }.property('search'),

});
