import Ember from 'ember';
import Markdown from 'npm:markdown';

export default Ember.Controller.extend({
  markdownText: '',
  htmlText: function(){
    return Markdown.markdown.toHTML(this.get('markdownText'));
  }.property('markdownText')
});
