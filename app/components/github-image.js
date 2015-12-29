import Ember from 'ember';
import FoundationBase from '../mixins/foundation-base';

export default Ember.Component.extend(FoundationBase, {
  classNames: ['github-image'],
  tagName: 'span',
  user: 'github',

  image: function(){
    return `https://avatars.githubusercontent.com/${this.get('user')}`;
  }.property('user'),

  link: function(){
    return `https://github.com/${this.get('user')}`;
  }.property('user'),

  title: function(){
    return this.get('name') || this.get('user');
  }.property('name', 'user'),

});
