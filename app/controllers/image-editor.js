import Ember from 'ember';
import '../lib/darkroom.save';

export default Ember.Controller.extend({
  initDarkroom: function(){

    // remove darkroom plugin output
    Ember.$('.darkroom-toolbar, .darkroom-image-container').remove();

    // then convert the image to darkroom after rendering
    // as it doesn't work directly after changing Image property
    // it should update view to put image as SRC then convert it.
    Ember.run.scheduleOnce('afterRender', this, ()=>{
      this.set('darkroom', new Darkroom('.darkroom-image img'));
    });
  }.observes('image')
});