import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,
  pageSize: 512,
  base: 16,
  lineLength: 10,

  lines: function(){
    return Math.ceil(this.get('pageSize') / this.get('lineLength'));
  }.property('pageSize', 'lineLength'),

  totalPages: function(){
    return Math.ceil(this.get('file').length / this.get('pageSize'));
  }.property('file'),

  fileSize: function(){
    return this.get('file').length;
  }.property('file'),

  loadFile: function(){
    this.set('page', 1);
  }.observes('file'),

  actions: {
    download: function(){
      var str= this.get('file'), arr= new Uint8Array(str.length);
      str.split("").forEach(function(a,b){
        arr[b]=a.charCodeAt();
      });
      download(arr, 'output');
    },
    pageChanged: function(){
      this.set('changed', true);
    },
    save: function(){
      this.setPage();
    }
  },

  currentPageUpdater: function(){
    var start = (this.get('page')-1) * this.get('pageSize'),
        end   = start + this.get('pageSize'),
        page  = this.get('file').slice(start, end),
        formattedPage = this.FormatPage(page);
    this.set('changed', false);
    this.set('currentPage', formattedPage);
  }.observes('file', 'page', 'pageSize', 'base'),

  currentAsciiPageUpdater: function(){
    var start = (this.get('page')-1) * this.get('pageSize'),
        end   = start + this.get('pageSize'),
        page  = this.get('file').slice(start, end),
        formattedPage = this.splitEach(page, this.get('lineLength'));
    this.set('currentAsciiPage', formattedPage);
  }.observes('currentPage', 'file'),

  FormatPage: function(string){
    var output    = [],
        maxLength = (255).toString(this.get('base')).length;

    for(var i=0; i<string.length; i++){
      var char = string.charCodeAt(i).toString(this.get('base'));
      char = (new Array(maxLength-char.length+1)).join(0) + char;
      output.push( char );
    }

    return this.splitEach(output, this.get('lineLength'));
  },

  splitEach: function(string, length){
    var output     = [],
        line       = [];

    for(var i=0; i<string.length; i++){
      if(i%length===0 && i>0){
        output.push(line.join(' '));
        line = [];
      }
      line.push( string[i] );
    }
    if(line.length > 0){
      output.push(line.join(' '));
    }
    return output.join("\n");
  },

  setPage: function(){
    var start = (this.get('page')-1) * this.get('pageSize'),
        length = this.get('pageSize'),
        end   = start + length,
        page  = this.get('file').slice(start, end),
        pageLength = page.length,
        base = this.get('base');

    var newPage = this.get('currentPage'),
        strippedPage = newPage.replace(/\n/g, ' ').split(/\s+/),
        newPagelength = strippedPage.length;

    if(newPagelength !== pageLength ){
      return this.set('error', `Bytes length (${newPagelength}) is not equal to ${pageLength}.`);
    }

    for(let i=0; i<strippedPage.length; i++){
      var trimmedChar = strippedPage[i].replace(/^0+/, '') || '0';
      strippedPage[i] = trimmedChar;
      if( isNaN(parseInt(trimmedChar, base)) ){
        return this.set('error', `Bytes (${strippedPage[i]}) is not valid base (${base}) byte.`);
      }
    }

    var pageString = '';
    for(let i=0; i<strippedPage.length; i++){
      pageString += String.fromCharCode(parseInt(strippedPage[i], 16));
    }

    var file   = this.get('file'),
        before = (start===0)? '' : file.slice(0, start),
        after  = file.slice(end);

    file = before + pageString + after;
    this.set('file', file);

    this.set('error', null);
  }

});
