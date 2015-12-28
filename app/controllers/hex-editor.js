import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,
  pageSize: 512,
  base: 16,
  lineLength: 10,

  totalPages: function(){
    return Math.ceil(this.get('file').length / this.get('pageSize'));
  }.property('file'),

  fileSize: function(){
    return this.get('file').length;
  }.property('file'),

  loadFile: function(){
    this.set('page', 1);
  }.observes('file'),

  currentPage: function(){
    var start = (this.get('page')-1) * this.get('pageSize'),
        end   = start + this.get('pageSize'),
        page  = this.get('file').slice(start, end),
        decodedPage = this.decodeString(page);
    return decodedPage;
  }.property('file', 'page', 'pageSize', 'base'),

  currentAsciiPage: function(){
    var start = (this.get('page')-1) * this.get('pageSize'),
        end   = start + this.get('pageSize'),
        page  = this.get('file').slice(start, end),
        splittedPage = this.splitEach(page, this.get('lineLength'));
    return splittedPage;
  }.property('currentPage'),

  decodeString: function(string){
    var output = [];

    for(var i=0; i<string.length; i++){
      output.push( string.charCodeAt(i).toString(this.get('base')) );
    }

    return this.splitEach(output, this.get('lineLength'));
  },

  splitEach: function(string, length){
    var output     = [],
        line       = [];

    for(var i=0; i<string.length; i++){
      if(i%length===0 && i>0){
        output.push(line);
        line = [];
      }
      line.push( string[i] );
    }
    return output;
  }

});
