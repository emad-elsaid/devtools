import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  authors: ['Vkiryukhin'],
  inputText:
`SELECT *
FROM devtools
WHERE name="md5";`,
  outputText: function(){
    try{
      return PP.pd.sqlmin(this.get('inputText'), this.get('preserveComments'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')
});
