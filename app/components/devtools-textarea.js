import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['devtools-textarea'],

  showNotifier: function(){
    if(! this.get('value') ){ return true; }
    return this.get('value').toString().length < 100;
  }.property('value'),

  textLength: function(){
    if(! this.get('value') ){ return 0; }
    return this.get('value').toString().length;
  }.property('value'),

  fileID: function(){
    return "uploader-" + Math.random().toString(32).slice(2);
  }.property()
});
