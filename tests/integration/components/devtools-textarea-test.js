import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('devtools-textarea', 'Integration | Component | devtools textarea', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{devtools-textarea}}`);
  assert.notEqual(this.$().html().trim(), '');
});
