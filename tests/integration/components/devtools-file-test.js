import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('devtools-file', 'Integration | Component | devtools file', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{devtools-file}}`);
  assert.notEqual(this.$().html().trim(), '');
});
