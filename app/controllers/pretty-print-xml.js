import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  authors: ['Vkiryukhin'],
  inputText: '<devtools><script>md5</script><script>Bluefish</script></devtools>',
  outputText: function(){
    try{
      return PP.pd.xml(this.get('inputText'));
    }catch(e){
      return e.message;
    }
  }.property('inputText')

});
