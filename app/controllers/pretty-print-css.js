import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  inputText: '.dev-tools{background: "awesome"; font-size: perfect;}',
  outputText: function(){
    try{
      return PP.pd.css(this.get('inputText'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')
});
