export default Darkroom.plugins['save'] = Darkroom.Plugin.extend({
  Download: Darkroom.Transformation.extend({
    applyTransformation: function(canvas) {
      open(canvas.toDataURL());
    }
  }),

  defaults: {
    callback: function() {
      this.darkroom.applyTransformation(new this.Download());
    }
  },

  initialize: function() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.destroyButton = buttonGroup.createButton({
      image: 'save'
    });

    this.destroyButton.addEventListener('click', this.options.callback.bind(this));
  },
});
