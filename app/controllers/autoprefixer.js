import Ember from 'ember';
import PP from 'npm:pretty-data';
import autoprefixer from 'npm:autoprefixer';
import postcss from 'npm:postcss';

export default Ember.Controller.extend({
  authors: ['ai', 'Ebram-Tharwat'],
  browsers: 'last 2 versions',
  inputText: `.a{
  display: flex;
}`,
  outputText: '',
  inputTextChanged: function() {
    try {
      var self = this;
      postcss([autoprefixer({
          browsers: self.get('browsers')
        })])
        .process(self.get('inputText')).then(function(result) {
          self.set('outputText', PP.pd.css(result.css));
        });
    } catch (e) {
      self.set('outputText', e.message);
    }
  }.observes('inputText', 'browsers').on('init')
});
