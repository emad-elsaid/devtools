import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'input',
  type: 'file',
  format: 'text', // text, binary, buffer, url
  attributeBindings: [
    'type',
    'name'
  ],

  eventManager: Ember.Object.create({
    change: function(event, view) {
      var file    = event.target.files[0];
      view.read(file);
    }
  }),

  read: function(file){
    var reader  = new FileReader();
    if(file) {
      reader.onloadend = Ember.run.bind(this, this.updateValue, reader);
      switch(this.get('format')){
        case 'text':
          reader.readAsText(file);
          break;
        case 'binary':
          reader.readAsBinaryString(file);
          break;
        case 'buffer':
          reader.readAsArrayBuffer(file);
          break;
        case 'url':
          reader.readAsDataURL(file);
          break;
      }
    } else {
      this.set('value', '');
    }
  },

  updateValue: function(reader){
    this.set('value', reader.result);
  }
});
