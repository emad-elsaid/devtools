import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-sidebar', 'Integration | Component | app sidebar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-sidebar}}`);
  assert.notEqual(this.$().html().trim(), '');
});
