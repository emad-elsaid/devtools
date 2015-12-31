import Ember from 'ember';
import Markdown from 'npm:markdown';

export default Ember.Controller.extend({
  authors: ['Evilstreak'],
  markdownText: '',
  htmlText: function(){
    return Markdown.markdown.toHTML(this.get('markdownText'));
  }.property('markdownText')
});
