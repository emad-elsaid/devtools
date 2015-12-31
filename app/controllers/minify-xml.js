import Ember from 'ember';
import PP from 'npm:pretty-data';

export default Ember.Controller.extend({
  authors: ['Vkiryukhin'],
  inputText:
`<devtools>
  <!-- Comment -->
  <script>md5</script>
  <script>Bluefish</script>
</devtools>`,
  preserveComments: false,
  outputText: function(){
    try{
      return PP.pd.xmlmin(this.get('inputText'), this.get('preserveComments'));
    }catch(e){
      return e.message;
    }
  }.property('inputText', 'preserveComments')
});
