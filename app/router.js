import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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
});

export default Router;
