import Ember from 'ember';

export default Ember.Controller.extend({
  authors: ['blazeeboy'], 
  html: '',
  css: '',
  js: '',
  output: function(){
    var html =  `${this.get('html')}
      <style>${this.get('css')}</style>
      <script>${this.get('js')}</script>`;
    localStorage.setItem('sandbox', html);
    var iframe = this.get('iframe') || Ember.$('iframe.result').get(0);
    if(iframe){
      this.set('iframe');
      iframe.contentWindow.location.reload();
    }
  },

  debounce_output: function(){
    Ember.run.debounce(this, this.output, 500);
  }.observes('html', 'css', 'js').on('init'),
});
