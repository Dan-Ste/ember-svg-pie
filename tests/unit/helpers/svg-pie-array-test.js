import { svgPieArray } from '../../../helpers/svg-pie-array';
import { module, test } from 'qunit';

module('Unit | Helper | svg pie array');

test('it works', function(assert) {
  let result = svgPieArray(['foo', 'bar', 'baz']);

  assert.propEqual(result, ['foo', 'bar', 'baz']);
});
