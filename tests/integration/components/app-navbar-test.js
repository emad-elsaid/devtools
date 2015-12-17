import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-navbar', 'Integration | Component | app navbar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-navbar}}`);
  assert.notEqual(this.$().html().trim(), '');
});
