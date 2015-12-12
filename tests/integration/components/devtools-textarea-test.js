import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('devtools-textarea', 'Integration | Component | devtools textarea', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{devtools-textarea}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#devtools-textarea}}
      template block text
    {{/devtools-textarea}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
