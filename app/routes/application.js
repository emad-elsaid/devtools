import Ember from 'ember';
import { titlize } from '../helpers/titlize';

export default Ember.Route.extend({
  routesService: Ember.inject.service('routes'),

  title: function(tokens) {
    if(tokens.length > 0){
      return tokens.join(' - ') + ' - DevTools';
    }else{
      var currentRoute = this.controller.currentRouteName;
      if(this.get('routesService').get('routes').includes(currentRoute)){
        return `${titlize([currentRoute])} - DevTools`;
      }else{
        return 'DevTools';
      }
    }
  }
});
