import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  inputText: 'select * from devtools where name="md5";',
  outputText: function(){
    try{
      return PP.pd.sql(this.get('inputText'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')
});
