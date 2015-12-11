import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

Router.map(function() {
  this.route('md5Encoder');
  this.route('markdown');
  this.route('prettyPrintJson');
  this.route('prettyPrintCss');
  this.route('prettyPrintXml');
  this.route('minifyXml');
  this.route('minifyCss');
  this.route('minifyJson');
  this.route('prettyPrintSql');
  this.route('minifySql');
  this.route('autoprefixer');
  this.route('HtmlJsCssSandbox');
  this.route('numberSystemsCalculator');
});

export default Router;
