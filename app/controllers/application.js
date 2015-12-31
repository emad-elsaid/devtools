import Ember from 'ember';

export default Ember.Controller.extend({
  sidebar: true,
  currentPathChange: function () {
    this.set('authors', this.container.lookup('controller:'+this.currentPath).get('authors'));
  }.observes('currentPath')
});
