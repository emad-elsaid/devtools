import Ember from 'ember';
import Clipboard from 'npm:clipboard';

export default Ember.Component.extend({

  notify: Ember.inject.service('notify'),
  classNames: ['devtools-textarea'],

  didInsertElement: function(){
    var view = this,
        clipboard_copy = new Clipboard(this.$('.copy-btn')[0], {
          text: function(){
            return view.get('value');
          }
        }).on('success', function(){
          view.get('notify').info('Text copied to your clipboard.');
        }),
        clipboard_cut = new Clipboard(this.$('.cut-btn')[0], {
          text: function(){
            return view.get('value');
          }
        }).on('success', function(){
          view.set('value', '');
          view.get('notify').info('Text cut to your clipboard.');
        });

    this.setProperties({
      'clipboard_copy': clipboard_copy,
      'clipboard_cut': clipboard_cut
    });
  },

  willDestroyElement: function(){
    this.get('clipboard_copy').destroy();
    this.get('clipboard_cut').destroy();
  },

  actions: {
    selectAll: function(){
      this.$('textarea').select();
    }
  },

  textLength: function(){
    if(! this.get('value') ){ return 0; }
    return this.get('value').toString().length;
  }.property('value'),

  fileID: function(){
    return "uploader-" + Math.random().toString(32).slice(2);
  }.property()
});
