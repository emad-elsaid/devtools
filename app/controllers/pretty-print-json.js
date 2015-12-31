import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  authors: ['Vkiryukhin'],
  inputText: '{"Devtools":{"routes": ["MD5","Bluefish"]}}',
  outputText: function(){
    try{
      return PP.pd.json(this.get('inputText'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')
});
