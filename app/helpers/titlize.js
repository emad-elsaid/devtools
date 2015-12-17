import Ember from 'ember';

export function titlize(params) {
  if( !(params && params.length>0) ){ return null; }
  return params[0].classify().replace(/([A-Z])/g, ' $1').trim();
}

export default Ember.Helper.helper(titlize);
