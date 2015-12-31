import Ember from 'ember';
import FoundationBase from '../mixins/foundation-base';

export default Ember.Component.extend(FoundationBase, {
  classNames: ['fixed'],
  routesService: Ember.inject.service('routes'),
  actions: {
    toggleSidebar: function(){
      this.toggleProperty('sidebar');
    }
  }
});
