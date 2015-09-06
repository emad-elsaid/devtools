import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  inputText:
`{
  "Devtools": {
    "routes": [
      "MD5",
      "Bluefish"
    ]
  }
}`,
  outputText: function(){
    try{
      return PP.pd.jsonmin(this.get('inputText'), this.get('preserveComments'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')
});
