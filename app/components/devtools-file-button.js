import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['devtools-file-button'],
  name: 'uploader',
  tagName: 'span',

  fileID: function(){
    return "uploader-" + Math.random().toString(32).slice(2);
  }.property()

});
