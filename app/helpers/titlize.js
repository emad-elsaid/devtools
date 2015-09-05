import Ember from 'ember';

export function titlize(params/*, hash*/) {
  return params[0].classify().replace(/([A-Z])/g, ' $1').trim();
}

export default Ember.Helper.helper(titlize);
