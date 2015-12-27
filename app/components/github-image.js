import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['github-image'],
  tagName: 'span',
  user: 'github',

  didInsertElement: function(){
    this.$().foundation('tooltip');
  },

  willDestroyElement: function(){
    this.$('*[data-selector]').each(function(){
      Ember.$( '#'+Ember.$(this).data('selector') ).remove();
    });
  },

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
