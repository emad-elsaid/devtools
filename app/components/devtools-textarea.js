import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['devtools-textarea'],

  actions: {
    selectAll: function(){
      this.$('textarea').select();
    }
  },

  textLength: function(){
    if(! this.get('value') ){ return 0; }
    return this.get('value').toString().length;
  }.property('value'),

  fileID: function(){
    return "uploader-" + Math.random().toString(32).slice(2);
  }.property()
});
