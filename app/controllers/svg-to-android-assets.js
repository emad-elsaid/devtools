import Ember from 'ember';

export default Ember.Controller.extend({
  authors: ['blazeeboy'],
  svgImage: '',
  imageName: 'ic_example',
  baseDPI: 'mdpi',
  DPIs: new Ember.A([
    { name: 'mdpi',   size: 1   },
    { name: 'hdpi',   size: 1.5 },
    { name: 'xhdpi',  size: 2   },
    { name: 'xxhdpi', size: 3   }
  ]),

  actions: {
    download: function(){
      var image   = this.get('image'),
          width   = image.width,
          height  = image.height,

          DPIs    = this.get('DPIs'),
          baseDPI = this.get('baseDPI'),
          DPISize = DPIs.find((dpi)=> dpi.name===baseDPI).size,

          baseWidth = width / DPISize,
          baseHeight = height / DPISize,

          images = new Ember.A(DPIs.map((dpi)=> {
            return {
              name:  dpi.name,
              data: this.generateImage(baseWidth*dpi.size, baseHeight*dpi.size)
            };
          })),

          zip = new JSZip();

      // add images to zip file
      images.forEach((image)=> {
        zip.file(`drawable-${image.name}/${this.imageName}.png`, image.data, {base64: true});
      });

      var content = null;
      if (JSZip.support.uint8array) {
        content = zip.generate({type : "uint8array"});
      } else {
        content = zip.generate({type : "string"});
      }
      download(content, `${this.get('imageName')}.zip`);
    }
  },

  image: function(){
    var img = new Image();
    img.src = this.get('svgImage');
    return img;
  }.property('svgImage'),

  generateImage: function(width, height){
    var canvas    = document.createElement('canvas');
    canvas.width  = width;
    canvas.height = height;

    var context       = canvas.getContext('2d'),
        image         = this.get('image');

    context.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL('image/png').split('base64,')[1];
  }

});
