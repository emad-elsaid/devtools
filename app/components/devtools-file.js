import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'file',
  attributeBindings: [
    'type',
    'name'
  ],

  eventManager: Ember.Object.create({
    change: function(event, view) {
      var file    = event.target.files[0];
      if(file) {
        var reader  = new FileReader();
        reader.onloadend = Ember.run.bind(view, view.updateValue, reader);
        reader.readAsText(file);
      } else {
        this.set('value', '');
      }
    }
  }),

  updateValue: function(reader){
    this.set('value', reader.result);
  }
});
