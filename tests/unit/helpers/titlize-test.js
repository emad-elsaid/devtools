import { titlize } from '../../../helpers/titlize';
import { module, test } from 'qunit';

module('Unit | Helper | titlize');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = titlize(['TestRoute']);
  assert.equal(result, 'Test Route');
});
