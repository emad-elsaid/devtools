import Ember from 'ember';
import FoundationBase from '../mixins/foundation-base';

export default Ember.Component.extend(FoundationBase, {
  classNames: ['fixed'],
  actions: {
    toggleSidebar: function(){
      this.toggleProperty('sidebar');
      return true;
    }
  },
  showFullLogo: function(){
    return this.currentPath === 'index';
  }.property('currentPath')
});
