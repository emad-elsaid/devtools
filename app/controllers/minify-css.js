import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  authors: ['Vkiryukhin'],
  inputText:
`.dev-tools{
  /* Comment */
  background: "awesome";
  font-size: perfect;
}`,
  preserveComments: false,
  outputText: function(){
    try{
      return PP.pd.cssmin(this.get('inputText'), this.get('preserveComments'));
    }catch(e){
      return e.message;
    }
  }.property('inputText', 'preserveComments')
});
