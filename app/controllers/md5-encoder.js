import Ember from 'ember';
import MD5 from 'npm:blueimp-md5';

export default Ember.Controller.extend({
  authors: ['blueimp'],
  outputText: function(){
    return MD5.md5(this.get('inputText'));
  }.property('inputText'),

  outputHMACText: function(){
    return MD5.md5(this.get('inputText'), this.get('HMACKey'));
  }.property('inputText', 'HMACKey')
});
