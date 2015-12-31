import Ember from 'ember';

export default Ember.Service.extend({

  isValid(route){
    var isExceptionalRoute = ['error', 'index', 'loading', 'application'].contains(route);
    var isSubstate = route.endsWith('_error') || route.endsWith('_loading');
    return !(isExceptionalRoute || isSubstate);
  },

  routes: function(){
    var container = this.container.lookup('router:main');
    var router = container.router;
    if( !router ){ return []; }
    var routes = router.recognizer.names;
    return Object.keys(routes).filter((route)=> this.isValid(route)).sort();
  }.property(),
});
