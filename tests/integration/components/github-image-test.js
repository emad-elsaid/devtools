import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-image', 'Integration | Component | github image', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{github-image}}`);
  assert.notEqual(this.$().html().trim(), '');
});
