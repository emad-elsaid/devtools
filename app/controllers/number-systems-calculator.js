import Ember from 'ember';

export default Ember.Controller.extend({
  authors: ['blazeeboy'],
  
  binaryChanged: function(){
    var bin = this.get('binary');
    var dec = parseInt(bin, 2);
    this.set('octal', dec.toString(8));
    this.set('decimal', dec.toString(10));
    this.set('hexadecimal', dec.toString(16));
    this.set('base64', this.Base64().fromInt(dec));
  }.observes('binary'),

  octalChanged: function(){
    var dec = parseInt(this.get('octal'), 8);
    this.set('binary', dec.toString(2) );
  }.observes('octal'),

  decimalChanged: function(){
    var dec = parseInt(this.get('decimal'), 10);
    this.set('binary', dec.toString(2) );
  }.observes('decimal'),

  hexadecimalChanged: function(){
    var dec = parseInt(this.get('hexadecimal'), 16);
    this.set('binary', dec.toString(2) );
  }.observes('hexadecimal'),

  base64Changed: function(){
    var dec = this.Base64().toInt(this.get('base64'));
    this.set('binary', dec.toString(2) );
  }.observes('base64'),

  Base64: function () {
    var digitsStr =
    //   0       8       16      24      32      40      48      56     63
    //   v       v       v       v       v       v       v       v      v
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+-";
    var digits = digitsStr.split('');
    var digitsMap = {};
    for (var i = 0; i < digits.length; i++) {
        digitsMap[digits[i]] = i;
    }
    return {
        fromInt: function(int32) {
            var result = '';
            while (true) {
                result = digits[int32 & 0x3f] + result;
                int32 >>>= 6;
                if (int32 === 0){break;}
            }
            return result;
        },
        toInt: function(digitsStr) {
            var result = 0;
            var digits = digitsStr.split('');
            for (var i = 0; i < digits.length; i++) {
                result = (result << 6) + digitsMap[digits[i]];
            }
            return result;
        }
    };
  }
});
