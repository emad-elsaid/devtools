import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-sidebar-item', 'Integration | Component | app sidebar item', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{app-sidebar-item}}`);
  assert.notEqual(this.$().html().trim(), '');
});
